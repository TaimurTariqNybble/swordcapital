import React, { Component } from 'react';
import InnerBanner from './InnerBanner';
import SwordIcon from '../assets/sword-icon.png';
import axios from 'axios';
import {
    Link
  } from "react-router-dom";
import CustomCookieHelper from '../Helper';

export default class TradingPlatform extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        const selectedLang = CustomCookieHelper.HelperGetLang("selectLang");
        const apiURLs = {
            'en':'https://www.sword-capital.com/dev/wp/wp-json/wp/v2/pages?slug=home',
            'ar':'https://www.sword-capital.com/dev/wp/wp-json/wp/v2/pages?slug=home',
        }
        const apiURL = apiURLs[selectedLang];
        window.scrollTo(0, 0);
        axios.get(apiURL)
            .then(res => this.setState({
                details: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err));
    }

    render() {

        const { isLoaded } = this.state;
        if (isLoaded) {
            
        document.title = `Sword Capital | Trading Platforms`;
        return (
            <>
                <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/TRADER.jpg)" title="Trading Platforms" />
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                            <h2>Downlaod Our Trading Platforms</h2>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="partner-box plat-bx">
                                        <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/icon-mt4.png" alt=""/>
                                        <h3>MT4 the world best CFD and STP trading platform</h3>
                                        <p>Server name: sword</p>
                                        <Link className="theme-btn" to="/downloads/metatrader4">Start</Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="partner-box plat-bx">
                                        <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/mt5.png" alt=""/>
                                        <h3>MT5 the world best and latest CFD and STP trading platform</h3>
                                        <p>Server name: sword</p>
                                        <Link className="theme-btn" to="/downloads/metatrader5">Start</Link>
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
