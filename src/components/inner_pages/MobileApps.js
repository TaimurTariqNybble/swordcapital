import React, { Component } from 'react';
import InnerBanner from './InnerBanner';
import SwordIcon from '../assets/sword-icon.png';
import axios from 'axios';
import UrlService from '../../Service';

export default class MobileApps extends Component {
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
            
        document.title = `Sword Capital | Mobile Apps`;
        return (
            <>
                <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/MOBILE-APPS.jpg)" title="Mobile Apps" />
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                            <h2>Download Market APPS</h2>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="partner-box dwn-bx">
                                        <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/sword-icon.png" alt=""/>
                                        <h3>Sword Capital Mobile</h3>
                                        <p>Sword Capital Mobile App: An all in one mobile platform which offers real-time forex news, economic calendar, market analysis and the ability to open trading accounts on the fly.</p>
                                        <div className="dwn-btns">
                                        <a className="theme-btn" href="https://play.google.com/store/apps/details?id=com.sword_capital.appv2" target="_blank" rel="noreferrer">Download Android</a>
                                        <a className="theme-btn" href="https://apps.apple.com/us/app/sword-capital-mobile-app/id1521241135" target="_blank" rel="noreferrer">Download IOS</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="partner-box dwn-bx">
                                        <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/mt5.png" alt=""/>
                                        <h3>MetaTrader 5</h3>
                                        <p>The world’s most popular Forex trading platform MetaTrader 5 is now available for smart mobile Download – Apple Download – Android …</p>
                                        <div className="dwn-btns">
                                        <a className="theme-btn" href="https://download.mql5.com/cdn/mobile/mt5/android?server=SwordCapital-Live" target="_blank" rel="noreferrer">Download Android</a>
                                        <a className="theme-btn" href="https://download.mql5.com/cdn/mobile/mt5/ios?server=SwordCapital-Live" target="_blank" rel="noreferrer">Download IOS</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="partner-box dwn-bx">
                                        <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/traday.png" alt=""/>
                                        <h3>Tradays — Forex Economic Calendar</h3>
                                        <p>Economic Calendar for forex and stock traders. This is a useful tool both for long-term and day traders.</p>
                                        <div className="dwn-btns">
                                        <a className="theme-btn" href="https://play.google.com/store/apps/details?id=net.metaquotes.economiccalendar&hl=en&referrer=ref_id%3dfd33a3de%26utm_source%3dsupport.metaquotes.net%26utm_campaign%3d0670.en.tradays%26utm_medium%3dnews%26utm_term%3dtradays.france%26utm_content%3dinstall.app" target="_blank" rel="noreferrer">Download Android</a>
                                        <a className="theme-btn" href="https://itunes.apple.com/us/app/tradays/id1434281988?utm_source=support.metaquotes.net&utm_campaign=0670.en.tradays&utm_medium=news&utm_term=tradays.france&utm_content=install.app" target="_blank" rel="noreferrer">Download IOS</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="partner-box dwn-bx">
                                        <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/bloomerge.png" alt=""/>
                                        <h3>Bloomberg App</h3>
                                        <p>Bloomberg ANYWHERE subscribers, please download the Bloomberg Anywhere App instead.</p>
                                        <div className="dwn-btns">
                                        <a className="theme-btn" href="https://play.google.com/store/apps/details?id=com.bloomberg.android" target="_blank" rel="noreferrer">Download Android</a>
                                        <a className="theme-btn" href="https://itunes.apple.com/us/app/bloomberg/id281941097?mt=8" target="_blank" rel="noreferrer">Download IOS</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="partner-box dwn-bx">
                                        <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/cnbc.jpg" alt=""/>
                                        <h3>CNBC App</h3>
                                        <p>Stay on top of the markets with CNBC Real-Time…the best free App that delivers Real-Time stock quotes direct from the NYSE and NASDAQ.</p>
                                        <div className="dwn-btns">
                                        <a className="theme-btn" href="https://play.google.com/store/apps/details?id=com.cnbc.client&hl=en" target="_blank" rel="noreferrer">Download Android</a>
                                        <a className="theme-btn" href="https://itunes.apple.com/au/app/cnbc-real-time-for-ipad/id398018310?mt=8" target="_blank" rel="noreferrer">Download IOS</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="partner-box dwn-bx">
                                        <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/icon-mt4.png" alt=""/>
                                        <h3>MetaTrader 4</h3>
                                        <p>The world’s most popular Forex trading platform MetaTrader 4 is now available for smart mobile.</p>
                                        <div className="dwn-btns">
                                        <a className="theme-btn" href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader4" target="_blank" rel="noreferrer">Download Android</a>
                                        <a className="theme-btn" href="https://apps.apple.com/us/app/metatrader-4/id496212596" target="_blank" rel="noreferrer">Download IOS</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="partner-box dwn-bx">
                                        <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/mobile-charts.png" alt=""/>
                                        <h3>Mobile Charts</h3>
                                        <p>Trade Interceptor Forex Mobile is a MULTI-BROKER FOREX AND CFD TRADING PLATFORM, which is offered to traders for FREE.</p>
                                        <div className="dwn-btns">
                                        <a className="theme-btn" href="https://play.google.com/store/apps/details?id=com.riflexo.tradeinterceptormobile&hl=en" target="_blank" rel="noreferrer">Download Android</a>
                                        <a className="theme-btn" href="https://itunes.apple.com/us/app/trade-interceptor-forex-mobile/id329476057?mt=8" target="_blank" rel="noreferrer">Download IOS</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="partner-box dwn-bx">
                                        <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/reuters-app.png" alt=""/>
                                        <h3>Reuters App</h3>
                                        <p>Access professional-grade news and market data from Thomson Reuters, the world’s leading source for intelligent information.</p>
                                        <div className="dwn-btns">
                                        <a className="theme-btn" href="https://itunes.apple.com/app/reuters-news-pro-for-ipad/id363274833?mt=8" target="_blank" rel="noreferrer">Download IOS</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="partner-box dwn-bx">
                                        <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/seeking-alpha.png" alt=""/>
                                        <h3>Seeking Alpha</h3>
                                        <p>Enjoy quick & easy access to all your stock news with Seeking Alpha’s free iPad Portfolio app! THE #1 SOURCE FOR SERIOUS INVESTORS.</p>
                                        <div className="dwn-btns">
                                        <a className="theme-btn" href="https://play.google.com/store/apps/details?id=com.seekingalpha.webwrapper&hl=en" target="_blank" rel="noreferrer">Download Android</a>
                                        <a className="theme-btn" href="https://itunes.apple.com/us/app/seeking-alpha-portfolio-for/id624497238?mt=8" target="_blank" rel="noreferrer">Download IOS</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="partner-box dwn-bx">
                                        <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/trader-clock.jpg" alt=""/>
                                        <h3>Trader Clock</h3>
                                        <p>This really is the trading app you can’t do without. If you are trading then this app is the one that you will want by your side all the time.</p>
                                        <div className="dwn-btns">
                                        <a className="theme-btn" href="https://itunes.apple.com/us/app/trader-clock-market-hours/id564139254?mt=8" target="_blank" rel="noreferrer">Download IOS</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="partner-box dwn-bx">
                                        <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/tws-handy.jpg" alt=""/>
                                        <h3>TWS Handy Trader</h3>
                                        <p>The Handy Trader trading application provides electronic access to stocks, options, forex, futures and futures options on multiple markets.</p>
                                        <div className="dwn-btns">
                                        <a className="theme-btn" href="https://play.google.com/store/apps/details?id=handytrader.app" target="_blank" rel="noreferrer">Download Android</a>
                                        <a className="theme-btn" href="https://itunes.apple.com/us/app/handy-trader/id429530128?mt=8" target="_blank" rel="noreferrer">Download IOS</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="partner-box dwn-bx">
                                        <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/yahoo.png" alt=""/>
                                        <h3>Yahoo Finance App</h3>
                                        <p>The Yahoo! Finance App for the iPhone and iPod Touch brings you total coverage from your favorite financial source.</p>
                                        <div className="dwn-btns">
                                        <a className="theme-btn" href="https://itunes.apple.com/us/app/yahoo!-finance/id328412701?mt=8" target="_blank" rel="noreferrer">Download IOS</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="partner-box dwn-bx">
                                        <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/zulu.png" alt=""/>
                                        <h3>ZuluTrade</h3>
                                        <p>ZuluTrade is the largest social trading community, with thousands of talented currency traders from 192 countries to follow in real time.</p>
                                        <div className="dwn-btns">
                                        <a className="theme-btn" href="https://itunes.apple.com/us/app/zulutrade/id336913058?mt=8" target="_blank" rel="noreferrer">Download IOS</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="partner-box dwn-bx">
                                        <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/investing.png" alt=""/>
                                        <h3>Investing App</h3>
                                        <p>Join the hundreds of thousands using our app to stay atop financial markets worldwide.</p>
                                        <div className="dwn-btns">
                                        <a className="theme-btn" href="https://play.google.com/store/apps/details?id=com.fusionmedia.investing&&referrer=utm_content%3D0081eec2-cc19-41d0-b945-d8c83b4e9eed%26utm_medium%3Dad-analytics%26utm_source%3Dflurry%26utm_campaign%3DEN%252520-Webmaster%252520tools" target="_blank" rel="noreferrer">Download Android</a>
                                        <a className="theme-btn" href="https://itunes.apple.com/app/id909998122?mt=8&&referrer=click%3Dfe9da152-4fc1-434a-8671-bd5f1c0ae485" target="_blank" rel="noreferrer">Download IOS</a>
                                        </div>  
                                    </div>
                                </div>
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
