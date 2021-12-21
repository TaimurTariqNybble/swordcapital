import React, { Component } from 'react';
import InnerBanner from './InnerBanner';
import SwordIcon from '../assets/sword-icon.png';
import axios from 'axios';
import UrlService from '../../Service';

export default class Corporation extends Component {
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
                <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/08/corporation-bg.jpg)" title="Corporation with us" />
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                            <h2>Corporation with us</h2>
                            <h3>Grow up your Business</h3>
                            <p>In order to build a solid Business, sword capital offers you the opportunity to facilitate the brokerage services you offer to your clients and integrates the way you do your business by providing you with full trading capabilities that can be customized according to your needs.</p>
                            <p>Through sword capital White Label Program, you will be able to make your own brand supported by our build up Knowledge of the markets, infrastructure, and fully branded online platform.</p>
                            <p>At sword Capital, our partners and affiliates are paid great attention.</p>
                            <p>Our offered services may include professional training and support required to run successful brokerage activities and grow your business in the marketplace.</p>
                            <p>We seek to ensure true partnership through mutual support and cooperation. Our White Label program includes shared profits and lucrative rebates.</p>
                            <p>We offer the best fees and clearing service, pls check the following details:</p>
                            </div>
                            <div className="col-lg-5">
                                <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/08/img-cor.jpg" className="img-fluid" alt=""/>
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
