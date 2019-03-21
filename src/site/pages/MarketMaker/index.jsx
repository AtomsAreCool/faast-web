/* eslint-disable */
import * as React from 'react'
import { compose, setDisplayName } from 'recompose'
import { withRouteData } from 'react-static'
import { Row, Col, Button, Container, Card, CardBody, Collapse } from 'reactstrap'

import Header from 'Site/components/Header'
import Footer from 'Site/components/Footer'

import classNames from 'class-names'

import { blobs, blob, faq, numbers } from './style.scss'

const blueColor = '#323540'

export default compose(
  setDisplayName('MarketMaker'),
  withRouteData
)(() => {
  return (
    <div style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
      <Header theme='dark' headerColor={blueColor} />
      <div style={{ minHeight: '85vh', backgroundColor: blueColor }} className={classNames('mb-0 py-5 position-relative')}>
        <Row className='py-3 mx-auto position-relative' style={{ maxWidth: 1280, zIndex: 99 }}>
          <Col sm='12' className='text-center'>
            <h1 className='font-weight-bold text-white mt-3'>Put your Bitcoin to work</h1>
            <h5 className='w-50 mx-auto mt-3' style={{ color: '#9BA5B6' }}>
              Run a Faa.st powered market maker node, help power the movement to decentralize the financial world, and watch your BTC multiply
            </h5>
            <Button 
              className='mt-4 d-inline-block font-weight-bold' 
              style={{ backgroundColor: '#56C8B8', borderRadius: 20, color: '#fff', width: 240 }} 
              tag='a' 
              href={'https://docs.google.com/forms/d/e/1FAIpQLSfxnI0SPvQu-4oVi2YCa7Lp_UEK8WyDFNFSMoXVxZD7Ioxjzw/formResponse'} 
              target='_blank noopener noreferrer' 
              color='primary'
            >
              Sign up for beta
            </Button>
            <small><span style={{ color: '#A9A9B6' }} className='font-xxs d-block mb-4 mt-2'>*beta is invite only, USA citizens are unable to participate</span></small>
          </Col>
          <Col className='mt-3' sm='12'>
            <div className={blobs}>
              <div className={blob}>₿</div>
              <div className={blob}>₿</div>
              <div className={blob}>₿</div>
              <div className={blob}>₿</div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </defs>
            </svg>
          </Col>
        </Row>
        <div style={{ bottom: 0, left: 0 }} className='position-absolute'>
          <svg width="1280px" height="551px" viewBox="0 0 1280 551" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                <stop stopColor="#FFFFFF" offset="0%"></stop>
                <stop stopColor="#979797" stopOpacity="0" offset="100%"></stop>
              </linearGradient>
            </defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="0.039475125">
              <g id="mac-browser" transform="translate(0.000000, -129.000000)" fill="#9B9B9B" stroke="url(#linearGradient-1)">
                <g id="Area-chart" transform="translate(0.000000, 130.000000)">
                  <path d="M0,275 C71.1111111,275 71.1111111,206.25 142.222222,206.25 C213.333333,206.25 213.333333,247.5 284.444444,247.5 C355.555556,247.5 355.555556,137.5 426.666667,137.5 C497.777778,137.5 497.777778,0 568.888889,0 C640,0 640,68.75 711.111111,68.75 C782.222222,68.75 782.222222,96.25 853.333333,96.25 C924.444444,96.25 924.444444,137.5 995.555556,137.5 C1066.66667,137.5 1066.66667,55 1137.77778,55 C1208.88889,55 1208.88889,0 1280,0 L1280,550 L0,550 L0,275 Z" id="area_1"></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <Row style={{ background: '#F6FAFE' }} className='text-center pb-5'>
        <Col>
          <h1 className='font-weight-bold mt-5 pt-3' style={{ color: blueColor }}>Why Become a Market Maker?</h1>
          <h5 className='mx-auto mt-3 font-weight-bold' style={{ color: '#85889B', maxWidth: '80%' }}>Running a market maker node allows you to fulfill swaps on the Faa.st marketplace, and earn interest in return.</h5>
          <h5 className='mx-auto mt-3' style={{ color: '#85889B', maxWidth: '80%' }}>In the early days, earning Bitcoin was as simple as downloading the node software and mining on your computer. Those days are long gone, but Faa.st now provides a way to earn Bitcoin by running a market maker node.</h5>
          <Row className='mt-5 text-center'>
            <Col className='mt-md-0 mt-3' sm='12' md='12' lg='4'>
              <div 
                className='d-inline-block px-4 py-2' 
                style={{ background: '#fff', boxShadow: '0px 5px 11px 1px rgba(200,216,236,0.5)', width: 318, borderRadius: 4 }}
              >
                <img style={{ width: 40 }} src='https://i.imgur.com/24WeJaL.png' />
                <h4 className='font-weight-bold mt-2' style={{ color: '#23D6B8' }}>Earn interest on your BTC</h4>
                <p style={{ color: '#2D303A' }}>Earn a BTC commission in return for helping complete swaps on the Faa.st marketplace</p>
              </div>
            </Col>
            <Col className='mt-md-0 mt-3' sm='12' md='12' lg='4'>
              <div 
                className='d-inline-block px-4 py-2' 
                style={{ background: '#fff', boxShadow: '0px 5px 11px 1px rgba(200,216,236,0.5)', width: 318, borderRadius: 4 }}
              >
                <img style={{ width: 40 }} src='https://i.imgur.com/FLaUbIm.png' />
                <h4 className='font-weight-bold mt-2' style={{ color: '#23D6B8' }}>Access more liquidity</h4>
                <p style={{ color: '#2D303A' }}>Own tokens with low volume? Provide the market access to your holdings</p>
              </div>
            </Col>
            <Col className='mt-md-0 mt-3' sm='12' md='12' lg='4'>
              <div 
                className='d-inline-block px-4 py-2' 
                style={{ background: '#fff', boxShadow: '0px 5px 11px 1px rgba(200,216,236,0.5)', width: 318, borderRadius: 4 }}
              >
                <img style={{ width: 40 }} src='https://i.imgur.com/LmLTn27.png' />
                <h4 className='font-weight-bold mt-2' style={{ color: '#23D6B8' }}>Support decentralization</h4>
                <p style={{ color: '#2D303A' }}>A majority of crypto trading volume is currently through centralized exchanges</p>
              </div>
            </Col>
            <Button 
              className='mt-5 d-inline-block font-weight-bold mx-auto' 
              style={{ backgroundColor: '#56C8B8', borderRadius: 20, color: '#fff', width: 240 }} 
              tag='a' 
              href={'https://docs.google.com/forms/d/e/1FAIpQLSfxnI0SPvQu-4oVi2YCa7Lp_UEK8WyDFNFSMoXVxZD7Ioxjzw/formResponse'} 
              target='_blank noopener noreferrer' 
              color='primary'
            >
              Learn more
            </Button>
          </Row>
        </Col>
      </Row>
      <Row style={{ background: '#fff' }} className='text-center pb-5'>
        <Col>
          <h1 className='font-weight-bold mt-5 pt-3' style={{ color: blueColor }}>Frequently Asked Questions</h1>
          <Container>
            <Row className='text-left mb-3 mt-5'>
              <Col>
                <Collapse isOpen={true}>
                  <Card>
                    <CardBody className={faq}>
                      <h5 style={{ color: blueColor }}>Can you run me through an example swap?</h5>
                      Alice is the market taker and Bob is the market maker. Alice has 10 ETH and wants 1 BTC. The market rate is 9.9 ETH to 1 BTC. Alice submits her swap request is routed through the Faa.st API to Bob. Alice's 10 ETH is sent to Bob. Bob sends 1 BTC from his market maker node's built-in hot wallet to Alice. Once the 10 ETH transaction is confirmed received, Bob sells the ETH for BTC on his exchange account for 1.01 BTC. The BTC is then deposited back to Bob’s node wallet - readily available for the next trade Bob needs to fulfill. Bob earned 0.01 BTC for this swap.
                    </CardBody>
                  </Card>
                </Collapse>
              </Col>
            </Row>
            <Row className='text-left mb-3'>
              <Col>
                <Collapse isOpen={true}>
                  <Card>
                    <CardBody className={faq}>
                      <h5 style={{ color: blueColor }}>What do I need to run a node?</h5>
                      You will need 3 things to run a market maker node: Bitcoin, a computer, and an account on a cryptocurrency exchange.
                    </CardBody>
                  </Card>
                </Collapse>
              </Col>
            </Row>
            <Row className='text-left mb-3'>
              <Col>
                <Collapse isOpen={true}>
                  <Card>
                    <CardBody className={faq}>
                      <h5 style={{ color: blueColor }}>How much will I earn?</h5>
                      Market makers earn Bitcoins by fulfilling swaps. The amount a market maker earns depends on the amount of Bitcoin they have available on their node, the time their node is online, as well as the number of swaps completed. Faa.st limits the amount of market makers on the platform to ensure each market maker earns sufficient commission.
                    </CardBody>
                  </Card>
                </Collapse>
              </Col>
            </Row>
            <Row className='text-left mb-3'>
              <Col>
                <Collapse isOpen={true}>
                  <Card>
                    <CardBody className={faq}>
                      <h5 style={{ color: blueColor }}>Do I need any extra hardware to run a market maker node?</h5>
                      No, but it is recommended that you run your node on a server. This will allow you to complete trades 24 hours/day and make the most interest off your Bitcoin.
                    </CardBody>
                  </Card>
                </Collapse>
              </Col>
            </Row>
            <Row className='text-left mb-3'>
              <Col>
                <Collapse isOpen={true}>
                  <Card>
                    <CardBody className={faq}>
                      <h5 style={{ color: blueColor }}>What is the maximum amount of trade value I will be able to fulfill at any one time?</h5>
                      For security purposes, market makers deposit BTC collateral with Faa.st. The amount of collateral deposited will be the maximum amount in trade value a market maker will be able to fulfill at any one time.
                    </CardBody>
                  </Card>
                </Collapse>
              </Col>
            </Row>
            <Row className='text-left mb-3'>
              <Col>
                <Collapse isOpen={true}>
                  <Card>
                    <CardBody className={faq}>
                      <h5 style={{ color: blueColor }}>How are wallet/exchange/api keys proven safe?</h5>
                      The market maker node will be completely open source and auditable by the community. All private keys and API keys are stored locally on the market maker node, and are not transmitted remotely.
                    </CardBody>
                  </Card>
                </Collapse>
              </Col>
            </Row>
            <Row className='text-left mb-3'>
              <Col>
                <Collapse isOpen={true}>
                  <Card>
                    <CardBody className={faq}>
                      <h5 style={{ color: blueColor }}>Do I need to keep my crypto on an exchange in order to complete trades?</h5>
                      Generally, all crypto is withdrawn from your exchange account after a swap is complete.
                    </CardBody>
                  </Card>
                </Collapse>
              </Col>
            </Row>
            <Row className='text-left mb-3'>
              <Col>
                <Collapse isOpen={true}>
                  <Card>
                    <CardBody className={faq}>
                      <h5 style={{ color: blueColor }}>When is the planned release of the market maker node?</h5>
                      The market maker program is currently live in a private alpha. We are building a waiting list for a public beta near the end of Q3 2019.
                    </CardBody>
                  </Card>
                </Collapse>
              </Col>
            </Row>
            <Row className='text-left mb-3'>
              <Col>
                <Collapse isOpen={true}>
                  <Card>
                    <CardBody className={faq}>
                      <h5 style={{ color: blueColor }}>What is a Market Maker?</h5>
                      A market maker is a participant in a market that fulfills orders for market takers. For example, a market maker will quote a specific price to either buy or sell BTC for TUSD.
                    </CardBody>
                  </Card>
                </Collapse>
              </Col>
            </Row>
            <Row className='text-left mb-3'>
              <Col>
                <Collapse isOpen={true}>
                  <Card>
                    <CardBody className={faq}>
                      <h5 style={{ color: blueColor }}>What is a Market Taker?</h5>
                      A market taker is a participant in a market that is looking to immediately swap from one asset to another. For example, if you have 1 BTC and want 5000 TUSD immediately, you are a market taker. You sell 1 BTC and take whatever price the market has available.
                    </CardBody>
                  </Card>
                </Collapse>
              </Col>
            </Row>
            <Row className='text-left mb-3'>
              <Col>
                <Collapse isOpen={true}>
                  <Card>
                    <CardBody className={faq}>
                      <h5 style={{ color: blueColor }}>Are swaps Atomic?</h5>
                      Sadly, swaps on Faa.st are not currently atomic. The technology for cross chain atomic swaps remains very new, and incomplete. Faa.st is working hard to ensure that swaps are atomic once the technology supporting this is sufficiently tested. The market maker program will evolve into a network of atomic swaps as these become more reliable.
                    </CardBody>
                  </Card>
                </Collapse>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row className='text-center pt-5' style={{ backgroundColor: '#374B5D' }}>
        <Col>
          <h1 className={classNames(numbers, 'font-weight-bold')}>1</h1>
          <p>Sign up for beta</p>
        </Col>
        <Col>
          <h1 className={classNames(numbers, 'font-weight-bold')}>2</h1>
          <p>Run a maker node</p>
        </Col>
        <Col>
          <h1 className={classNames(numbers, 'font-weight-bold')}>3</h1>
          <p>Earn interest on your BTC</p>
        </Col>
      </Row>
      <Row className='text-center pb-5' style={{ backgroundColor: '#374B5D' }}>
        <Col sm='12'>
          <Button 
            className='mt-4 d-inline-block font-weight-bold' 
            style={{ backgroundColor: '#56C8B8', borderRadius: 20, color: '#fff', width: 240 }} 
            tag='a' 
            href={'https://docs.google.com/forms/d/e/1FAIpQLSfxnI0SPvQu-4oVi2YCa7Lp_UEK8WyDFNFSMoXVxZD7Ioxjzw/formResponse'} 
            target='_blank noopener noreferrer' 
            color='primary'
          >
            Sign up for beta
          </Button>
        </Col>
      </Row>
      <Footer />
    </div>
  )})
