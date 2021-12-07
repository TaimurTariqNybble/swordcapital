import React, { Component } from 'react';
import InnerBanner from './InnerBanner';
import OpenImg from '../assets/open-office-img.jpg';
import SwordIcon from '../assets/sword-icon.png';
import axios from 'axios';

export default class OpenOffice extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('https://www.sword-capital.com/dev/wp/wp-json/wp/v2/pages')
            .then(res => this.setState({
                details: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err));
    }

    render() {

        const { isLoaded } = this.state;
        if (isLoaded) {
        return (
            <>
                <InnerBanner title="Open Your Office"/>
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                            <h2>Open your IB office</h2>
                            <p>Sword Capital&nbsp;provide this service for our partners worldwide and help you to open your interducer broker office and work with us</p>
                            <p>This service includes:</p>
                            <ul className="inner-list">
                            <li>Rent an office</li>
                            <li>Trained staff</li>
                            <li>Benefit out of our website and systems</li>
                            <li>Legalisation</li>
                            <li>Full support</li>
                            </ul>
                            <p>For more information on how to establish a productive partnership with Sword Capital, contact us at <a className="open-acount-btn" href="mailto:partners@sword-capital.com">partners@sword-capital.com</a></p>
                            </div>
                            <div className="col-lg-5">
                                <img src={OpenImg} className="img-fluid" alt=""/>
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
