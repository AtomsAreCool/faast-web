import { createSelector } from 'reselect'
import { mapValues } from 'Utilities/helpers'
import { getSwapStatus, getSwapFriendlyError } from 'Utilities/swap'
import { createItemSelector, selectItemId } from 'Utilities/selector'
import { toBigNumber } from 'Utilities/convert'
import { MultiWallet } from 'Services/Wallet'

import { getAllAssets } from './asset'
import { getAllWallets } from './wallet'
import { getAllTxs } from './tx'

export const getSwapState = ({ swap }) => swap

const createSwapExtender = (allAssets, allWallets, allTxs) => (swap) => {
  const { sendSymbol, receiveSymbol, txId, rate, receiveAddress } = swap
  const sendAsset = allAssets[sendSymbol]
  const receiveAsset = allAssets[receiveSymbol]
  const tx = allTxs[txId] || {}
  const fee = toBigNumber(0)
  let { receiveWalletId } = swap
  if (!receiveWalletId) {
    const receiveWallet = Object.values(allWallets)
      .find((w) => !w.type.includes(MultiWallet.type)
        && (w.usedAddresses.includes(receiveAddress)
          || (swap.receiveAddress.startsWith('0x')
            && w.usedAddresses.includes(receiveAddress.toLowerCase()))))
    if (receiveWallet) {
      receiveWalletId = receiveWallet.id
    }
  }
  swap = {
    ...swap,
    receiveWalletId,
    pair: `${sendSymbol}_${receiveSymbol}`.toLowerCase(),
    inverseRate: toBigNumber(rate).pow(-1),
    sendAsset,
    receiveAsset,
    fee,
    hasFee: fee && toBigNumber(fee).gt(0),
    tx,
    txSigning: tx.signing,
    txSigned: tx.signed,
    txSigningError: tx.signingError,
    txSending: tx.sending,
    txSent: tx.sent,
    txSendingError: tx.sendingError,
  }
  return {
    ...swap,
    status: getSwapStatus(swap),
    friendlyError: getSwapFriendlyError(swap),
  }
}

export const getAllSwaps = createSelector(
  getSwapState,
  getAllAssets,
  getAllWallets,
  getAllTxs,
  (allSwaps, allAssets, allWallets, allTxs) => mapValues(allSwaps, createSwapExtender(allAssets, allWallets, allTxs)))
export const getAllSwapsArray = createSelector(getAllSwaps, Object.values)
export const getSwap = createItemSelector(
  getAllSwaps,
  selectItemId,
  (allSwaps, id) => allSwaps[id] || Object.values(allSwaps).find((s) => s.orderId === id)
)

export const getSentSwapsSorted = createSelector(
  getAllSwapsArray,
  (allSwaps) => allSwaps
    .filter((s) => (s.orderStatus !== 'awaiting deposit' || s.tx.sent) && s.createdAt)
    // Most recently created first
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
)

export const getSentSwapOrderTxIds = createSelector(
  getAllSwapsArray,
  getAllTxs,
  (allSwapsArray, allTxs) => allSwapsArray.reduce((byId, swap) => {
    const tx = allTxs[swap.txId]
    if (tx && tx.sent) {
      return {
        ...byId,
        [swap.orderId]: tx.id,
      }
    }
    return byId
  }, {})
)
