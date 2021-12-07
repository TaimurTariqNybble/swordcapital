import React, { Component } from 'react';
import InnerBanner from './InnerBanner';
import SwordIcon from '../assets/sword-icon.png';
import axios from 'axios';

export class About extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('https://www.sword-capital.com/dev/wp/wp-json/wp/v2/pages?slug=about-sword-capital')
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
                <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/ABOUT-SWORD.jpg)" title={details[0].title.rendered} />
                <div className="inner-pages-text content-area">
                <div dangerouslySetInnerHTML={{__html: details[0].content.rendered}}/>
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

export class Regulation extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('https://www.sword-capital.com/dev/wp/wp-json/wp/v2/pages?slug=conditions-of-use-2')
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
                <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/CONDITIONS-OF-USE.jpg)" title={details[0].title.rendered} />
                <div className="inner-pages-text content-area">
                <div dangerouslySetInnerHTML={{__html: details[0].content.rendered}}/>
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

export class RiskDisclose extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('https://www.sword-capital.com/dev/wp/wp-json/wp/v2/pages?slug=risk-disclosure-2')
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
                <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/RISK-DISCLOSURE.jpg)" title={details[0].title.rendered} />
                <div className="inner-pages-text content-area">
                <div dangerouslySetInnerHTML={{__html: details[0].content.rendered}}/>
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

export class PrivacyPolicy extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('https://www.sword-capital.com/dev/wp/wp-json/wp/v2/pages?slug=privacy-policy')
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
                <InnerBanner img="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/PRIVACY-POLICY.jpg" title={details[0].title.rendered} />
                <div className="inner-pages-text content-area">
                <div dangerouslySetInnerHTML={{__html: details[0].content.rendered}}/>
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

export class FeeLimit extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('https://www.sword-capital.com/dev/wp/wp-json/wp/v2/pages?slug=fees-and-limits')
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
                <InnerBanner title={details[0].title.rendered} />
                <div className="inner-pages-text content-area">
                <div dangerouslySetInnerHTML={{__html: details[0].content.rendered}}/>
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

export class TheBoard extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('https://www.sword-capital.com/dev/wp/wp-json/wp/v2/pages?slug=the-board')
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
                <InnerBanner title={details[0].title.rendered} />
                <div className="inner-pages-text content-area">
                <div dangerouslySetInnerHTML={{__html: details[0].content.rendered}}/>
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


export class Complaint extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('https://www.sword-capital.com/dev/wp/wp-json/wp/v2/pages?slug=complaints')
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
                <InnerBanner title={details[0].title.rendered} />
                <div className="inner-pages-text content-area">
                <div dangerouslySetInnerHTML={{__html: details[0].content.rendered}}/>
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


export class SwordGover extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('https://www.sword-capital.com/dev/wp/wp-json/wp/v2/pages?slug=swords-governance')
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
                <InnerBanner title={details[0].title.rendered} />
                <div className="inner-pages-text content-area">
                <div dangerouslySetInnerHTML={{__html: details[0].content.rendered}}/>
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

export class AmlMoney extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('https://www.sword-capital.com/dev/wp/wp-json/wp/v2/pages?slug=anti-money-laundering-policy-2')
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
                <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/ANTI-MONEY-LAUNDERING-POLICY.jpg)" title={details[0].title.rendered} />
                <div className="inner-pages-text content-area">
                <div dangerouslySetInnerHTML={{__html: details[0].content.rendered}}/>
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
