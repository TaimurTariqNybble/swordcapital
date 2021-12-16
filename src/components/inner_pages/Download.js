import React, { Component } from 'react';
import InnerBanner from './InnerBanner';
import {
    Link
  } from "react-router-dom";
import SwordIcon from '../assets/sword-icon.png';
import axios from 'axios';
import UrlService from '../../Service';

export class Download extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        const apiURLs = {
            'en':'pages',
            'ar':'pages',
        }
        this.resolve(apiURLs);
        window.scrollTo(0, 0);
    }

    async resolve(apiURL) {
        try {
            const Response = await UrlService.getData(apiURL);
            this.setState({
                details: Response.data,
                isLoaded: true
            })   
        } catch (error) {
            console.log(error);
        }
    }

    render() {

        const { isLoaded } = this.state;
        if (isLoaded) {
        return (
            <>
                <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/TRADER.jpg)" title="MetaTrader4" />
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                            <h2>MetaTrader4</h2>
                            <p>In order to trade in the financial market, traders need a program that allows them to analyze quotes, make trades and develop strategies. They also need to control their trading accounts by using some kind of mobile devices. Another group of accounts that need to be managed are investors’ accounts. All of the above can be handled by the MetaTrader 4. With MetaTrader 4, you can have all this, too!</p>
                            <a href="https://www.youtube.com/user/MetaQuotesOfficial" target="_blank" rel="noreferrer" class="theme-btn">Learn about MT4 (Video Tutorials)</a>
                            </div>
                            <div className="col-lg-5">
                                <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/08/Screen-Shot-2014-09-21-at-11.07.27-PM.png" className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="partner-box">
                                <img src={SwordIcon} alt=""/>
                                    <h3>Open MT4 Account</h3>
                                    <Link className="theme-btn" to="/open-accounts/personal-account/">Start</Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="partner-box">
                                <img src={SwordIcon} alt=""/>
                                    <h3>Download MT4 for PC</h3>
                                    <a className="theme-btn" href="https://download.mql5.com/cdn/web/sword.investment.capital/mt4/sword4setup.exe" target="_blank" rel="noreferrer" >Download</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="partner-box">
                                <img src={SwordIcon} alt=""/>
                                    <h3>Login MT4 WebTrader</h3>
                                    <a className="theme-btn" href="https://trade.mql5.com/trade?servers=Sword-Demo,Sword-Live" target="_blank" rel="noreferrer" >Login</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="partner-box">
                                <img src={SwordIcon} alt=""/>
                                    <h3>Download MT4 for Iphone & Ipad.</h3>
                                    <p>(server name: sword)</p>
                                    <a className="theme-btn" href="https://apps.apple.com/us/app/metatrader-4/id496212596" target="_blank" rel="noreferrer" >Download</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="partner-box">
                                <img src={SwordIcon} alt=""/>
                                    <h3>Download MT4 for Android.</h3>
                                    <p>(server name: sword)</p>
                                    <a className="theme-btn" href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader4" target="_blank" rel="noreferrer" >Download</a>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{marginTop:"50px"}}>
                            <div className="col-lg-12">
                            <p>After you download the system on your mobile or pc you need to insert your username and password and the server name is sword-live for real account and sword-demo for demo account.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="loaderBg">
                <span><img src={SwordIcon} alt=""/></span>
            </div>
        </>
    )
    }
}


export class MetaTrader5 extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        const apiURLs = {
            'en':'pages',
            'ar':'pages',
        }
        this.resolve(apiURLs);
        window.scrollTo(0, 0);
    }

    async resolve(apiURL) {
        try {
            const Response = await UrlService.getData(apiURL);
            this.setState({
                details: Response.data,
                isLoaded: true
            })   
        } catch (error) {
            console.log(error);
        }
    }

    render() {

        const { isLoaded } = this.state;
        if (isLoaded) {
        return (
            <>
                <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/TRADER.jpg)" title="MetaTrader5" />
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                            <h2>MetaTrader5</h2>
                            <p>In order to trade in the financial market, traders need a program that allows them to analyze quotes, make trades and develop strategies. They also need to control their trading accounts by using some kind of mobile devices. Another group of accounts that need to be managed are investors’ accounts. All of the above can be handled by the MetaTrader 5. With MetaTrader 5, you can have all this, too! </p>
                            <a href="https://www.youtube.com/user/MetaQuotesOfficial" target="_blank" rel="noreferrer" class="theme-btn">Learn about MT5 (Video Tutorials)</a>
                            </div>
                            <div className="col-lg-5">
                                <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/08/Screen-Shot-2014-09-21-at-11.07.27-PM.png" className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-sm-6">
                                <div className="partner-box">
                                <img src={SwordIcon} alt=""/>
                                    <h3>Open MT5 Account</h3>
                                    <Link className="theme-btn" to="/open-accounts/personal-account/">Start</Link>
                                </div>
                            </div>
                            <div className=" col-sm-6">
                                <div className="partner-box">
                                <img src={SwordIcon} alt=""/>
                                    <h3>Download MT5 for PC</h3>
                                    <a className="theme-btn" href="https://download.mql5.com/cdn/web/11668/mt5/swordcapital5setup.exe" target="_blank" rel="noreferrer" >Download</a>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="partner-box">
                                <img src={SwordIcon} alt=""/>
                                    <h3>Download MT5 for Iphone & Ipad.</h3>
                                    <p>(server name: sword)</p>
                                    <a className="theme-btn" href="https://download.mql5.com/cdn/mobile/mt5/ios?server=SwordCapital-Live" target="_blank" rel="noreferrer" >Download</a>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="partner-box">
                                <img src={SwordIcon} alt=""/>
                                    <h3>Download MT5 for Android.</h3>
                                    <p>(server name: sword)</p>
                                    <a className="theme-btn" href="https://download.mql5.com/cdn/mobile/mt5/android?server=SwordCapital-Live" target="_blank" rel="noreferrer" >Download</a>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{marginTop:"50px"}}>
                            <div className="col-lg-12">
                            <p>After you download the system on your mobile or pc you need to insert your username and password and the server name is sword-live for real account and sword-demo for demo account.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="loaderBg">
                <span><img src={SwordIcon} alt=""/></span>
            </div>
        </>
    )
    }
}

export class TwsPlatform extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        const apiURLs = {
            'en':'pages',
            'ar':'pages',
        }
        this.resolve(apiURLs);
        window.scrollTo(0, 0);
    }

    async resolve(apiURL) {
        try {
            const Response = await UrlService.getData(apiURL);
            this.setState({
                details: Response.data,
                isLoaded: true
            })   
        } catch (error) {
            console.log(error);
        }
    }

    render() {

        const { isLoaded } = this.state;
        if (isLoaded) {
        return (
            <>
                <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/TRADER.jpg)" title="TWS Platform" />
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                            <h2>Sword TWS ®</h2>
                            <h3>The world #1 trading platform, More than 100 Exchanges worldwide</h3>
                            <p>Our market maker-designed Trader Workstation (TWS®) lets traders, investors and institutions trade stocks, options, futures, forex, bonds, and funds on over 100 markets worldwide from a single account.</p>
                            <p><strong></strong></p>
                            <p>Sword Capital provides trading in more than 100 exchange markets  worldwide, our clients can trade in forex, option, stocks, CFDs, futures, ETFs and bond from one terminal TWS® and Trader Workstation are either trademarks or service marks of Interactive Brokers LLC.Co</p>
                            <p>nteractive Brokers LLC is a registered Broker-Dealer, Futures Commission Merchant and Forex Dealer Member, regulated by the U.S. Securities and Exchange Commission (SEC), the Commodity Futures Trading Commission (CFTC) and the National Futures Association (NFA), and is a member of the Financial Industry Regulatory Authority (FINRA) and several other self-regulatory organizations.  Interactive Brokers does not endorse or recommend any introducing brokers, third-party financial advisors or hedge funds.  Interactive Brokers provides execution and clearing services to customers.  None of the information contained herein constitutes a recommendation, offer, or solicitation of an offer by Interactive Brokers to buy, sell or hold any security, financial product or instrument or to engage in any specific investment strategy. Interactive Brokers makes no representation, and assumes no liability to the accuracy or completeness of the information provided on this website. For more information regarding Interactive Brokers, please visit www.interactivebrokers.com  </p>
                            <p>In order to login TWS® on your desktop you need to setup <a href="https://java.com/en/download/windows_ie.jsp" target="_blank" rel="noreferrer">Java</a></p>
                            <p>To check Market Data prices please login to your TWS Account Management then choose Market Data from tabs.</p>
                            </div>
                            <div className="col-lg-5">
                                <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/08/tradingtech_tws_001.png" className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-4 col-sm-6">
                                <div className="partner-box">
                                <img src={SwordIcon} alt=""/>
                                    <h3>Download TWS for PC</h3>
                                    <a className="theme-btn" href="https://www.clientam.com/en/index.php?f=16040&ns=T&conf=am&wbid=SWORDBRK" target="_blank" rel="noreferrer" >Start</a>
                                </div>
                            </div>
                            <div className=" col-md-4 col-sm-6">
                                <div className="partner-box">
                                <img src={SwordIcon} alt=""/>
                                    <h3>Login TWS Trader</h3>
                                    <a className="theme-btn" href="https://www.clientam.com/en/index.php?f=16040&ns=T&conf=am&wbid=SWORDBRK" target="_blank" rel="noreferrer" >Login</a>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="partner-box">
                                <img src={SwordIcon} alt=""/>
                                    <h3>Login TWS Account manager</h3>
                                    <a className="theme-btn" href="https://zh.wgw.clientam.com/webtrader/servlet/login?id=SWORDBRK" target="_blank" rel="noreferrer" >Login</a>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="partner-box">
                                <img src={SwordIcon} alt=""/>
                                    <h3>Login TWS Webtrader</h3>
                                    <a className="theme-btn" href="https://zh.wgw.clientam.com/webtrader/servlet/login?id=SWORDBRK" target="_blank" rel="noreferrer" >Login</a>
                                </div>
                            </div>
                            <div className=" col-md-4 col-sm-6">
                                <div className="partner-box">
                                <img src={SwordIcon} alt=""/>
                                    <h3>Open Real TWS Account</h3>
                                    <Link className="theme-btn" to="/open-accounts" target="_blank" rel="noreferrer" >Start</Link>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="partner-box">
                                <img src={SwordIcon} alt=""/>
                                    <h3>Exchanges & Contracts</h3>
                                    <a className="theme-btn" href="https://misc.clientam.com/cstools/contract_info/v3.10/index.php?wlId=SWORDBRK" target="_blank" rel="noreferrer" >Start</a>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="partner-box">
                                <img src={SwordIcon} alt=""/>
                                    <h3>TWS Guide</h3>
                                    <a className="theme-btn" href="http://www.clientam.com/php/whiteLabel/welcome.php?id=SWORDBRK" target="_blank" rel="noreferrer" >Start</a>
                                </div>
                            </div>
                            <div className=" col-md-4 col-sm-6">
                                <div className="partner-box">
                                <img src={SwordIcon} alt=""/>
                                    <h3>Margin & Commission</h3>
                                    <Link className="theme-btn" to="/products-condition" target="_blank" rel="noreferrer" >Read More</Link>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="partner-box">
                                <img src={SwordIcon} alt=""/>
                                    <h3>Demo TWS Account</h3>
                                    <a className="theme-btn" href="https://www.clientam.com/en/index.php?f=16040&ns=T&conf=am&wbid=SWORDBRK" target="_blank" rel="noreferrer" >Start</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="loaderBg">
                <span><img src={SwordIcon} alt=""/></span>
            </div>
        </>
    )
    }
}