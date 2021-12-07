import React, { Component } from 'react';
import InnerBanner from './InnerBanner';
import SwordIcon from '../assets/sword-icon.png';
import axios from 'axios';

export default class BankingDetails extends Component {
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
                <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/GCC-SEMINAR.jpg)" title="Banking Details" />
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                            <h2>Banking Details</h2>
                            <p>Choose your currency or country and print one of the following bank details and provide it to your bank</p>
                            </div>
                            <div className="col-lg-4">
                                <div className="pdf-bx">
                                <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/08/pdf-icon.png" alt=""/>
                                <p>USD / WorldWide Clients</p>
                                <a href="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/08/contract-of-Introducing-Broker.pdf" download="" target="_blank" rel="noreferrer">Download PDF</a>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="pdf-bx">
                                <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/08/pdf-icon.png" alt=""/>
                                <p>USD / GCC Clients</p>
                                <a href="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/08/contract-of-Introducing-Broker.pdf" download="" target="_blank" rel="noreferrer">Download PDF</a>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="pdf-bx">
                                <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/08/pdf-icon.png" alt=""/>
                                <p>KWD / GCC Clients</p>
                                <a href="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/08/contract-of-Introducing-Broker.pdf" download="" target="_blank" rel="noreferrer">Download PDF</a>
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
                <span><img src={SwordIcon} alt=""/></span>
            </div>
        </>
    )
    }
}