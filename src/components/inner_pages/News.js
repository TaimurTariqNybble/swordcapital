import React, { Component } from 'react';
import InnerBanner from './InnerBanner';
import SwordIcon from '../assets/sword-icon.png';
import axios from 'axios';
import UrlService from '../../Service';
import CustomCookieHelper from '../Helper';

export class News extends Component {
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
            'en':'pages/6498',
            'ar':'pages/6498',
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

            document.title = `Sword Capital | News`;
        return (
            <>
                {(this.state.selectedLang === 'ar') ? <>
                <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/NEWS.jpg)" title="أخبار" />
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                            <div dangerouslySetInnerHTML={{__html: details[0].content.rendered}}/>
                            </div>
                        </div>
                    </div>
                </div>
                </> : <>
                <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/NEWS.jpg)" title="News" />
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                            <div dangerouslySetInnerHTML={{__html: details[0].content.rendered}}/>
                            </div>
                        </div>
                    </div>
                </div>
                </>}
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

export class DailyReport extends Component {
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
        window.scrollTo(0, 0);
        axios.get('https://www.sword-capital.com/dev/wp/wp-json/wp/v2/pages?slug=daily-report')
            .then(res => this.setState({
                details: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err));
    }

    render() {

        const { details, isLoaded } = this.state;
        if (isLoaded) {
            document.title = `Sword Capital | Daily Report`;
        return (
            <>
                {(this.state.selectedLang === 'ar') ? <>
                <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/DAILY-REPORT.jpg)" title="التقرير اليومي" />
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                            <div dangerouslySetInnerHTML={{__html: details[0].content.rendered}}/>
                            </div>
                        </div>
                    </div>
                </div>
                </> : <>
                <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/DAILY-REPORT.jpg)" title="Daily Report" />
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                            <div dangerouslySetInnerHTML={{__html: details[0].content.rendered}}/>
                            </div>
                        </div>
                    </div>
                </div>
                </>}
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

export class Charting extends Component {
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
        window.scrollTo(0, 0);
        axios.get('https://sword-capital.com/dev/wp/wp-json/wp/v2/pages?slug=market-tools')
            .then(res => this.setState({
                details: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err));
    }

    render() {

        const { details, isLoaded } = this.state;
        if (isLoaded) {
            
            document.title = `Sword Capital | Market Tools`;
        return (
            <>
                {(this.state.selectedLang === 'ar') ? <>
                <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/MARKET-TOOLS.jpg)" title="أدوات السوق" />
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                            <div dangerouslySetInnerHTML={{__html: details[0].content.rendered}}/>
                            </div>
                        </div>
                    </div>
                </div>
                </> : <>
                <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/MARKET-TOOLS.jpg)" title="Market Tools" />
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                            <div dangerouslySetInnerHTML={{__html: details[0].content.rendered}}/>
                            </div>
                        </div>
                    </div>
                </div>
                </>}
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
