import React, { Component } from 'react';
/*import Logo from './assets/logo.png';*/
import BtnIcon from './assets/btn-icon.png';
import BtnIcon2 from './assets/btn-icon2.png';
import {Link} from "react-router-dom";
import SwordIcon from './assets/sword-icon.png';
import axios from 'axios';
import CustomCookieHelper from './Helper';
import UrlService from '../Service';

export default class HomePage extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        const apiURLs = {
            'en':'pages/5964',
            'ar':'pages/5964',
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

            const Bannerimg = details[0].acf.banner;
            document.title = "Sword Capital | Worldwide Brokerage";
        return (

            <>
                <section className="banner" style={{backgroundImage:`url(${Bannerimg})`}}>
                    <div className="container">
                        <div className="row text-center justify-content-center">
                        <div className="col-lg-8">
                            <div dangerouslySetInnerHTML={{__html: details[0].acf.banner_content}}/>
                            <div className="b-btn">
                                <Link to={details[0].acf.banner_buttons.button_one_link} className="banner-btn" data-aos="fade-up" data-aos-duration="500" data-aos-delay="450">{details[0].acf.banner_buttons.button_one_text} &nbsp; <img src={BtnIcon} alt="" />  </Link>  
                                <Link to={details[0].acf.banner_buttons.button_two_link} className="banner-btn space bg-nav" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500"> {details[0].acf.banner_buttons.button_two_text} &nbsp; <img src={BtnIcon} alt="" />  </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                <section className="trade">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-lg-6 col-md-6 right">
                            <div className="trade-img" data-aos="fade-right" data-aos-duration="500" data-aos-delay="550">
                                <img src={details[0].acf.section_one_image} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div dangerouslySetInnerHTML={{__html: details[0].acf.section_one_content}}/>
                        </div>
                        </div>
                    </div>
                </section>
                <section className="platform" style={{backgroundImage:`url(${details[0].acf.section_two_banner})`}}>
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-lg-7">
                            <div className="platform-head">
                                <div dangerouslySetInnerHTML={{__html: details[0].acf.section_two_content}}/>
                                <Link to="/trading-platform"  className="platform-btn" data-aos="fade-up" data-aos-duration="500" data-aos-delay="450">Trading Platform <span className="icon-img"> <img src={BtnIcon} alt="" /> </span></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                <section className="cards-point">
                    <div className="container">
                        <div className="row text-center justify-content-center">
                        <div className="col-lg-8">
                            <div className="cards-head">
                            <div dangerouslySetInnerHTML={{__html: details[0].acf.section_three_content}}/>
                            </div>
                        </div>
                        </div>
                        <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="card-box" data-aos="fade-up" data-aos-duration="500" data-aos-delay="150">
                                    <div className="c-img">
                                        <img src={details[0].acf.cards_section.card_one.image} alt=""/>
                                    </div>
                                    <div dangerouslySetInnerHTML={{__html: details[0].acf.cards_section.card_one.content}}/>
                                    <Link to="/open-accounts/personal-account" className="account-btn"> Open Account &nbsp; <img className="hov" src={BtnIcon2} alt=""/> </Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="card-box card-h" data-aos="fade-up" data-aos-duration="500" data-aos-delay="150">
                                    <div className="c-img">
                                        <img src={details[0].acf.cards_section.card_two.image} alt=""/>
                                    </div>
                                    <div dangerouslySetInnerHTML={{__html: details[0].acf.cards_section.card_two.content}}/>
                                    <Link to="/open-accounts/premium-account" className="account-btn"> Open Account &nbsp; <img className="hov" src={BtnIcon2} alt=""/> </Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="card-box" data-aos="fade-up" data-aos-duration="500" data-aos-delay="150">
                                    <div className="c-img">
                                        <img src={details[0].acf.cards_section.card_three.image} alt=""/>
                                    </div>
                                    <div dangerouslySetInnerHTML={{__html: details[0].acf.cards_section.card_three.content}}/>
                                    <Link to="/open-accounts/corporate-acc" className="account-btn"> Open Account &nbsp; <img className="hov" src={BtnIcon2} alt=""/> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                {/*<section className="capital">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-8">
                            <div className="capital-img">
                                <img src={Logo}  className="img-fluid" alt=""/>
                            </div>
                            <div className="capital-ul">
                                <ul>
                                    <li><span> FULLY REGULATED </span> </li>
                                    <li><span> EARN POINTS PER LOT </span>   </li>
                                </ul>
                                <ul>
                                    <li><span> FAST PLATFORMS AND SECURE </span> </li>
                                    <li><span> SWORD MASTERCARD </span>   </li>
                                </ul>
                                <ul>
                                    <li><span> Low Cost </span> </li>
                                    <li><span> Real Exchange Spread </span>   </li>
                                </ul>
                                <ul>
                                    <li><span> Fx Spread Start From 0.5 Pip </span> </li>
                                    <li><span> Fund Protection </span>   </li>
                                </ul>
                            </div>
                            <div className="report">
                                <Link to="/daily-report" className="report-btn"> Daily Report <span className="report-icon-img"> <img src={BtnIcon} alt=""/> </span>  </Link>  
                                <Link to="/gcc-seminar" className="report-btn margin bg-btn"> Workshop<span className="report-icon-img"> <img src={BtnIcon} alt=""/> </span>  </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>*/}
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
