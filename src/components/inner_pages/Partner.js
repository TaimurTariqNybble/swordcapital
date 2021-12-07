import React, { Component } from 'react';
import InnerBanner from './InnerBanner';
import SwordIcon from '../assets/sword-icon.png';
import axios from 'axios';
import {Link} from "react-router-dom";

export default class Partner extends Component {

    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('https://www.sword-capital.com/dev/wp/wp-json/wp/v2/pages?slug=partners-center')
            .then(res => this.setState({
                details: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err));
    }

    render() {

        const { details, isLoaded } = this.state;
        if (isLoaded) {
            const BannerBg = `url(${details[0].acf.banner_image})`;
            document.title = `Sword Capital | ${details[0].title.rendered}`;
        return (
            <>
                <InnerBanner img={BannerBg} title={details[0].title.rendered} />
                <div className="inner-pages-text content-area">
                    <div dangerouslySetInnerHTML={{__html: details[0].content.rendered}}/>
                </div>
                <div className="inner-pages-text content-area-sec-b">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="partner-box">
                                    <img src={SwordIcon} alt=""/>
                                    <h3>MT5 White Label</h3>
                                    <Link to="/partners/mt4-white-label" className="theme-btn">Start</Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="partner-box">
                                    <img src={SwordIcon} alt=""/>
                                    <h3>TWS® Trader</h3>
                                    <Link to="/partners/tws-trader" className="theme-btn">Start</Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="partner-box">
                                    <img src={SwordIcon} alt=""/>
                                    <h3>Introducing Brokers</h3>
                                    <Link to="/partners/ib-account" className="theme-btn">Start</Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="partner-box">
                                    <img src={SwordIcon} alt=""/>
                                    <h3>Franchises Brokerage</h3>
                                    <Link to="/partners/franchises-brokerage" className="theme-btn">Start</Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="partner-box">
                                    <img src={SwordIcon} alt=""/>
                                    <h3>Open Your IB Office</h3>
                                    <Link to="/partners/open-your-office" className="theme-btn">Start</Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="partner-box">
                                    <img src={SwordIcon} alt=""/>
                                    <h3>Corporation With Us</h3>
                                    <Link to="/partners/corporation-with-us" className="theme-btn">Start</Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="partner-box">
                                    <img src={SwordIcon} alt=""/>
                                    <h3>Brokers Job</h3>
                                    <Link to="/partners/apply-job" className="theme-btn">Start</Link>
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




