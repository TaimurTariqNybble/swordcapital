import React, { Component } from 'react';
import InnerBanner from './InnerBanner';
import SwordIcon from '../assets/sword-icon.png';
import axios from 'axios';
import UrlService from '../../Service';

export default class InvestDetails extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        const apiURLs = {
            'en':'investor_affair?slug=eeee',
            'ar':'investor_affair?slug=eeee',
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

        const { details, isLoaded } = this.state;
        if (isLoaded) {
        return (
            <>
                {details.length === 1 ? 
                    (
                    <>
                        <InnerBanner img="urlhttps://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/MT5-WHITE-LABEL.jpg)" title={details[0].title.rendered} />
                        <div className="inner-pages-text content-area">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h2>{details[0].title.rendered}</h2>
                                        <div dangerouslySetInnerHTML={{__html: details[0].content.rendered}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    )
                    : (
                    <>
                        <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/MT5-WHITE-LABEL.jpg)" title="404" />
                        <div className="inner-sec content-area">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 text-center">
                                        <h2>Page not found</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)
                }
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