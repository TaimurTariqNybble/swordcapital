import React, { Component } from 'react';
import InnerBanner from './InnerBanner';import {
    Link
  } from "react-router-dom";
import SwordIcon from '../assets/sword-icon.png';
import axios from 'axios';
import UrlService from '../../Service';
import CustomCookieHelper from '../Helper';

export default class OpenAccount extends Component {
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
            document.title = `Sword Capital | Open Accounts`;
        return (
            <>
                {(this.state.selectedLang === 'ar') ? <>
                <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/OPEN-ACCOUNTS.jpg)" title="فتح الحسابات" />
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                            <h2>اختر نوع حسابك</h2>
                            <div className="row justify-content-center">
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="partner-box">
                                    <img src={SwordIcon} alt=""/>
                                        <h3> فتح حساب شخصي </h3>
                                        <Link className="theme-btn" to="/open-accounts/personal-account/">البدأ</Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="partner-box">
                                    <img src={SwordIcon} alt=""/>
                                        <h3>فتح حساب الشركة</h3>
                                        <Link className="theme-btn" to="/open-accounts/corporate-acc">البدأ</Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="partner-box">
                                    <img src={SwordIcon} alt=""/>
                                        <h3>فتح حساب وسيط تعريفي</h3>
                                        <Link className="theme-btn" to="/open-accounts/bank-institution-account">البدأ</Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="partner-box">
                                    <img src={SwordIcon} alt=""/>
                                        <h3>فتح حساب صندوق التحوط</h3>
                                        <Link className="theme-btn" to="/open-accounts/low-spread-account">البدأ</Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="partner-box">
                                    <img src={SwordIcon} alt=""/>
                                        <h3>فتح حساب مميز</h3>
                                        <Link className="theme-btn" to="/open-accounts/premium-account">البدأ</Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="partner-box">
                                    <img src={SwordIcon} alt=""/>
                                        <h3>فتح حساب مكتب العائلة</h3>
                                        <Link className="theme-btn" to="/open-accounts/vip-account">البدأ</Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="partner-box">
                                    <img src={SwordIcon} alt=""/>
                                        <h3>فتح حساب تجريبي</h3>
                                        <Link className="theme-btn" to="/open-accounts/demo-account">البدأ</Link>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </> : <>
                <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/OPEN-ACCOUNTS.jpg)" title="Open Accounts" />
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                            <h2>Choose your Account types</h2>
                            <div className="row justify-content-center">
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="partner-box">
                                    <img src={SwordIcon} alt=""/>
                                        <h3>Open Personal Account</h3>
                                        <Link className="theme-btn" to="/open-accounts/personal-account/">Start</Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="partner-box">
                                    <img src={SwordIcon} alt=""/>
                                        <h3>Open Corporate Account</h3>
                                        <Link className="theme-btn" to="/open-accounts/corporate-acc">Start</Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="partner-box">
                                    <img src={SwordIcon} alt=""/>
                                        <h3>Open IB Account</h3>
                                        <Link className="theme-btn" to="/open-accounts/bank-institution-account">Start</Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="partner-box">
                                    <img src={SwordIcon} alt=""/>
                                        <h3>Open Hedge Fund Account</h3>
                                        <Link className="theme-btn" to="/open-accounts/low-spread-account">Start</Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="partner-box">
                                    <img src={SwordIcon} alt=""/>
                                        <h3>Open Premium Account</h3>
                                        <Link className="theme-btn" to="/open-accounts/premium-account">Start</Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="partner-box">
                                    <img src={SwordIcon} alt=""/>
                                        <h3>Open Family Office Account</h3>
                                        <Link className="theme-btn" to="/open-accounts/vip-account">Start</Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="partner-box">
                                    <img src={SwordIcon} alt=""/>
                                        <h3>Open Demo Account</h3>
                                        <Link className="theme-btn" to="/open-accounts/demo-account">Start</Link>
                                    </div>
                                </div>
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
