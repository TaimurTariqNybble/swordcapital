import React, { Component } from 'react';
import InnerBanner from './InnerBanner';
import SwordIcon from '../assets/sword-icon.png';
import axios from 'axios';
import CustomCookieHelper from '../Helper';
import UrlService from '../../Service';
export class About extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        const apiURLs = {
            'en': 'pages/6031',
            'ar': 'pages/6375',
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

            document.title = `Sword Capital | ${details[0].title.rendered}`;
            return (
                <>
                    <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/ABOUT-SWORD.jpg)" title={details[0].title.rendered} />
                    <div className="inner-pages-text content-area">
                        <div dangerouslySetInnerHTML={{ __html: details[0].content.rendered }} />
                    </div>
                </>
            )
        }
        return (
            <>
                <div className="loaderBg">
                    <span><img src={SwordIcon} alt="" /></span>
                </div>
            </>
        )
    }
}

export class Regulation extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        const apiURLs = {
            'en': 'pages/6033',
            'ar': 'pages/6384',
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

            document.title = `Sword Capital | ${details[0].title.rendered}`;
            return (
                <>
                    <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/CONDITIONS-OF-USE.jpg)" title={details[0].title.rendered} />
                    <div className="inner-pages-text content-area">
                        <div dangerouslySetInnerHTML={{ __html: details[0].content.rendered }} />
                    </div>
                </>
            )
        }
        return (
            <>
                <div className="loaderBg">
                    <span><img src={SwordIcon} alt="" /></span>
                </div>
            </>
        )
    }
}

export class RiskDisclose extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        const apiURLs = {
            'en': 'pages/6035',
            'ar': 'pages/6419',
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

            document.title = `Sword Capital | ${details[0].title.rendered}`;
            return (
                <>
                    <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/RISK-DISCLOSURE.jpg)" title={details[0].title.rendered} />
                    <div className="inner-pages-text content-area">
                        <div dangerouslySetInnerHTML={{ __html: details[0].content.rendered }} />
                    </div>
                </>
            )
        }
        return (
            <>
                <div className="loaderBg">
                    <span><img src={SwordIcon} alt="" /></span>
                </div>
            </>
        )
    }
}

export class PrivacyPolicy extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        const apiURLs = {
            'en': 'pages/6037',
            'ar': 'pages/6401',
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

            document.title = `Sword Capital | ${details[0].title.rendered}`;
            return (
                <>
                    <InnerBanner img="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/PRIVACY-POLICY.jpg" title={details[0].title.rendered} />
                    <div className="inner-pages-text content-area">
                        <div dangerouslySetInnerHTML={{ __html: details[0].content.rendered }} />
                    </div>
                </>
            )
        }
        return (
            <>
                <div className="loaderBg">
                    <span><img src={SwordIcon} alt="" /></span>
                </div>
            </>
        )
    }
}

export class FeeLimit extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        const apiURLs = {
            'en': 'pages/6041',
            'ar': 'pages/6413',
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

            document.title = `Sword Capital | ${details[0].title.rendered}`;
            return (
                <>
                    <InnerBanner title={details[0].title.rendered} />
                    <div className="inner-pages-text content-area">
                        <div dangerouslySetInnerHTML={{ __html: details[0].content.rendered }} />
                    </div>
                </>
            )
        }
        return (
            <>
                <div className="loaderBg">
                    <span><img src={SwordIcon} alt="" /></span>
                </div>
            </>
        )
    }
}

export class TheBoard extends Component {
    state = {
        details: [],
        isLoaded: false
    }
    
    componentDidMount() {
        const apiURLs = {
            'en': 'pages/6045',
            'ar': 'pages/6427',
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

            document.title = `Sword Capital | ${details[0].title.rendered}`;
            return (
                <>
                    <InnerBanner title={details[0].title.rendered} />
                    <div className="inner-pages-text content-area">
                        <div dangerouslySetInnerHTML={{ __html: details[0].content.rendered }} />
                    </div>
                </>
            )
        }
        return (
            <>
                <div className="loaderBg">
                    <span><img src={SwordIcon} alt="" /></span>
                </div>
            </>
        )
    }
}


export class Complaint extends Component {
    state = {
        details: [],
        isLoaded: false
    }
    
    componentDidMount() {
        const apiURLs = {
            'en': 'pages/6048',
            'ar': 'pages/6380',
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

            document.title = `Sword Capital | ${details[0].title.rendered}`;
            return (
                <>
                    <InnerBanner title={details[0].title.rendered} />
                    <div className="inner-pages-text content-area">
                        <div dangerouslySetInnerHTML={{ __html: details[0].content.rendered }} />
                    </div>
                </>
            )
        }
        return (
            <>
                <div className="loaderBg">
                    <span><img src={SwordIcon} alt="" /></span>
                </div>
            </>
        )
    }
}


export class SwordGover extends Component {
    state = {
        details: [],
        isLoaded: false
    }
    6043
    componentDidMount() {
        const apiURLs = {
            'en': 'pages/6043',
            'ar': 'pages/6421',
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

            document.title = `Sword Capital | ${details[0].title.rendered}`;
            return (
                <>
                    <InnerBanner title={details[0].title.rendered} />
                    <div className="inner-pages-text content-area">
                        <div dangerouslySetInnerHTML={{ __html: details[0].content.rendered }} />
                    </div>

                </>
            )
        }
        return (
            <>
                <div className="loaderBg">
                    <span><img src={SwordIcon} alt="" /></span>
                </div>
            </>
        )
    }
}

export class AmlMoney extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        const apiURLs = {
            'en': 'pages/6039',
            'ar': 'pages/6377',
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

            document.title = `Sword Capital | ${details[0].title.rendered}`;
            return (
                <>
                    <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/ANTI-MONEY-LAUNDERING-POLICY.jpg)" title={details[0].title.rendered} />
                    <div className="inner-pages-text content-area">
                        <div dangerouslySetInnerHTML={{ __html: details[0].content.rendered }} />
                    </div>
                </>
            )
        }
        return (
            <>
                <div className="loaderBg">
                    <span><img src={SwordIcon} alt="" /></span>
                </div>
            </>
        )
    }
}
