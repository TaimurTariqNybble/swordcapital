import React, { Component } from 'react';
import InnerBanner from './InnerBanner';
import {Link} from "react-router-dom";
import SwordIcon from '../assets/sword-icon.png';
import axios from 'axios';

export class ExchangeListUs extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('https://www.sword-capital.com/dev/wp/wp-json/wp/v2/pages?slug=exchange-listings-us-markets-2')
            .then(res => this.setState({
                details: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err));
    }

    render() {

        const { details, isLoaded } = this.state;
        if (isLoaded) {
            document.title = `Sword Capital | ${details[0].title.rendered}`;
        return (
            <>
                <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/EXCHANGE-LISTINGS-US-MARKETS.jpg)" title={details[0].title.rendered} />
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                            <div className="btn-grp">
                                <span><Link to="/exchange-listings-usmarkets" className="theme-btn">America</Link></span>
                                <span><Link to="/exchange-listings-eumarkets" className="theme-btn">Europe</Link></span>
                                <span><Link to="/exchange-listing-asiamarkets" className="theme-btn">Asia/Pacific</Link></span>
                                <span><Link to="/exchange-listing-africamarkets" className="theme-btn">Africa</Link></span>
                            </div>
                            <div dangerouslySetInnerHTML={{__html: details[0].content.rendered}}/>
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


export class ExchangeListEu extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('https://www.sword-capital.com/dev/wp/wp-json/wp/v2/pages?slug=exchange-listings-eu-markets')
            .then(res => this.setState({
                details: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err));
    }

    render() {

        const { details, isLoaded } = this.state;
        if (isLoaded) {
            document.title = `Sword Capital | ${details[0].title.rendered}`;
        return (
            <>
                <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/EXCHANGE-LISTINGS-US-MARKETS.jpg)" title={details[0].title.rendered} />
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                            <div className="btn-grp">
                                <span><Link to="/exchange-listings-usmarkets" className="theme-btn">America</Link></span>
                                <span><Link to="/exchange-listings-eumarkets" className="theme-btn">Europe</Link></span>
                                <span><Link to="/exchange-listing-asiamarkets" className="theme-btn">Asia/Pacific</Link></span>
                                <span><Link to="/exchange-listing-africamarkets" className="theme-btn">Africa</Link></span>
                            </div>
                            <div dangerouslySetInnerHTML={{__html: details[0].content.rendered}}/>
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

export class ExchangeListAsia extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('https://www.sword-capital.com/dev/wp/wp-json/wp/v2/pages?slug=exchange-listing-asia-markets')
            .then(res => this.setState({
                details: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err));
    }

    render() {

        const { details, isLoaded } = this.state;
        if (isLoaded) {
            document.title = `Sword Capital | ${details[0].title.rendered}`;
        return (
            <>
                <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/EXCHANGE-LISTINGS-US-MARKETS.jpg)" title={details[0].title.rendered} />
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                            <div className="btn-grp">
                                <span><Link to="/exchange-listings-usmarkets" className="theme-btn">America</Link></span>
                                <span><Link to="/exchange-listings-eumarkets" className="theme-btn">Europe</Link></span>
                                <span><Link to="/exchange-listing-asiamarkets" className="theme-btn">Asia/Pacific</Link></span>
                                <span><Link to="/exchange-listing-africamarkets" className="theme-btn">Africa</Link></span>
                            </div>
                            <div dangerouslySetInnerHTML={{__html: details[0].content.rendered}}/>
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

export class ExchangeListAfrica extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('https://www.sword-capital.com/dev/wp/wp-json/wp/v2/pages?slug=exchange-listing-africa-markets')
            .then(res => this.setState({
                details: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err));
    }

    render() {

        const { details, isLoaded } = this.state;
        if (isLoaded) {
            document.title = `Sword Capital | ${details[0].title.rendered}`;
        return (
            <>
                <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/EXCHANGE-LISTINGS-US-MARKETS.jpg)" title={details[0].title.rendered} />
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                            <div className="btn-grp">
                                <span><Link to="/exchange-listings-usmarkets" className="theme-btn">America</Link></span>
                                <span><Link to="/exchange-listings-eumarkets" className="theme-btn">Europe</Link></span>
                                <span><Link to="/exchange-listing-asiamarkets" className="theme-btn">Asia/Pacific</Link></span>
                                <span><Link to="/exchange-listing-africamarkets" className="theme-btn">Africa</Link></span>
                            </div>
                            <div dangerouslySetInnerHTML={{__html: details[0].content.rendered}}/>
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


