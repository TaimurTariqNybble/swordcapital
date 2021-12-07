import React, { Component } from 'react';
import InnerBanner from './InnerBanner';
import SwordIcon from '../assets/sword-icon.png';
import axios from 'axios';
import { Link } from "react-router-dom";

export class InvestAffairs extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('https://www.sword-capital.com/dev/wp/wp-json/wp/v2/investor_affair')
            .then(res => this.setState({
                details: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err));
    }

    render() {

        const { details, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <>
                    <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/PRODUCTS-CONDITION.jpg)" title="Investors Affairs" />
                    <div className="inner-pages-text content-area">
                        <div className="container">
                            <div className="row justify-content-center">
                                {details.map(item => (
                                    <>
                                        <div className="col-lg-4 col-md-5 col-sm-6">
                                            <div className="blg-bx">
                                                <div className="blg-img">
                                                    {(item.acf.image) ? <img src={item.acf.image} alt={item.title.rendered} /> : <img src="https://sword-capital.com/dev/wp/wp-content/uploads/2021/04/logooo.png" alt="img" />}
                                                </div>
                                                <h3>{item.title.rendered}</h3>
                                                <div dangerouslySetInnerHTML={{ __html: item.uagb_excerpt }} />
                                                <Link to={"/investors_affairs/" + item.slug} className="theme-btn">Read More</Link>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div class="btn-grp">
                                        <span><Link class="theme-btn" to="/investors-affairs/annual-reports/">Annual Governance Reports</Link></span>
                                        <span><Link class="theme-btn" to="/investors-affairs/MOMs/">Minutes of The General Assembly Meetings</Link></span>
                                        <span><Link class="theme-btn" to="/investors-affairs/disclosures-registry/">Disclosures Registry</Link></span>
                                        <span><Link class="theme-btn" to="/investors-affairs/statements-reports/">Financial Statements</Link></span>
                                    </div>
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
                    <span><img src={SwordIcon} alt="" /></span>
                </div>
            </>
        )
    }
}


export class AnnualReports extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('https://www.sword-capital.com/dev/wp/wp-json/wp/v2/pages?slug=annual-reports')
            .then(res => this.setState({
                details: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err));
    }

    render() {

        const { details, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <>
                    <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/MARKET-TOOLS.jpg)" title={details[0].title.rendered} />
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

export class AssemblyMeetings extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('https://www.sword-capital.com/dev/wp/wp-json/wp/v2/pages?slug=minutes-of-the-general-assembly-meetings')
            .then(res => this.setState({
                details: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err));
    }

    render() {

        const { details, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <>
                    <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/MARKET-TOOLS.jpg)" title={details[0].title.rendered} />
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

export class DisclosuresRegistry extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('https://www.sword-capital.com/dev/wp/wp-json/wp/v2/pages?slug=disclosures-registry')
            .then(res => this.setState({
                details: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err));
    }

    render() {

        const { details, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <>
                    <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/MARKET-TOOLS.jpg)" title={details[0].title.rendered} />
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

export class FinancialStatements extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('https://www.sword-capital.com/dev/wp/wp-json/wp/v2/pages?slug=financial-statements')
            .then(res => this.setState({
                details: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err));
    }

    render() {

        const { details, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <>
                    <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/MARKET-TOOLS.jpg)" title={details[0].title.rendered} />
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