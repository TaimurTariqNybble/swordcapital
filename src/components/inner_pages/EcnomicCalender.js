import React, { Component } from 'react';
import InnerBanner from './InnerBanner';
import SwordIcon from '../assets/sword-icon.png';
import axios from 'axios';
import CustomCookieHelper from '../Helper';
import UrlService from '../../Service';
export default class EcnomicCalender extends Component {



    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        const apiURLs = {
            'en':'pages/6029',
            'ar':'pages/6386',
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

        const iframe = '<iframe width="750px" height="1500px" style="max-width:100%;" src="https://www.tradays.com/en/economic-calendar/widget?mode=2&utm_source=www.sword-capital.com" frameborder="0"></iframe>s';
        
        document.title = `Sword Capital | ${details[0].title.rendered}`;
        return (
            <>
                <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/ECONOMIC-CALENDAR.jpg)" title={details[0].title.rendered} />
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                            <p>Note: Sword Capital is not providing Advisory services</p>
                            <div id="economicCalendar"></div>
                            <div dangerouslySetInnerHTML={{__html: iframe}}/>
                            {/*<div ref={el => (this.instance = el)} />*/}
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


