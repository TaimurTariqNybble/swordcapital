import React, { Component } from 'react';
import InnerBanner from './InnerBanner';
import SwordIcon from '../assets/sword-icon.png';
import axios from 'axios';
import {Link} from "react-router-dom";
import UrlService from '../../Service';
import CustomCookieHelper from '../Helper';

export default class Partner extends Component {

    state = {
        details: [],
        isLoaded: false
    }

    constructor(props) {
        super(props);
        this.state = {
            selectedLang: CustomCookieHelper.HelperGetLang("selectLang")
        };
    }

    componentDidMount() {
        const apiURLs = {
            'en':'pages/6005',
            'ar':'pages/6403',
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

        const details = [];
        details[0] = this.state.details;
        const { isLoaded } = this.state;
        if (isLoaded) {
            const BannerBg = `url(${details[0].acf.banner_image})`;
            document.title = `Sword Capital | ${details[0].title.rendered}`;
        return (
            <>
                <InnerBanner img={BannerBg} title={details[0].title.rendered} />
                <div className="inner-pages-text content-area">
                    <div dangerouslySetInnerHTML={{__html: details[0].content.rendered}}/>
                </div>
                {(this.state.selectedLang === 'ar') ? <>
                    <div className="inner-pages-text content-area-sec-b">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="partner-box">
                                        <img src={SwordIcon} alt=""/>
                                        <h3>ميتاتريدر 5 للمؤسسات</h3>
                                        <Link to="/partners/mt4-white-label" className="theme-btn">بداية</Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="partner-box">
                                        <img src={SwordIcon} alt=""/>
                                        <h3>TWS® للمؤسسات</h3>
                                        <Link to="/partners/tws-trader" className="theme-btn">بداية</Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="partner-box">
                                        <img src={SwordIcon} alt=""/>
                                        <h3>وسيط التعريف</h3>
                                        <Link to="/partners/ib-account" className="theme-btn">بداية</Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="partner-box">
                                        <img src={SwordIcon} alt=""/>
                                        <h3>العلامة التجارية سورد</h3>
                                        <Link to="/partners/franchises-brokerage" className="theme-btn">بداية</Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="partner-box">
                                        <img src={SwordIcon} alt=""/>
                                        <h3>افتح مكتب وساطة خاص بشركتك</h3>
                                        <Link to="/partners/open-your-office" className="theme-btn">بداية</Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="partner-box">
                                        <img src={SwordIcon} alt=""/>
                                        <h3>شارك سورد</h3>
                                        <Link to="/partners/corporation-with-us" className="theme-btn">بداية</Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="partner-box">
                                        <img src={SwordIcon} alt=""/>
                                        <h3>وظائف</h3>
                                        <Link to="/partners/apply-job" className="theme-btn">بداية</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </> : <>
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
                </> }
                
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




