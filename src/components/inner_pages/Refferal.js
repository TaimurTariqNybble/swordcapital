import React, { Component } from 'react';
import InnerBanner from './InnerBanner';
import SwordIcon from '../assets/sword-icon.png';
import axios from 'axios';
import CustomCookieHelper from '../Helper';

export default class Refferal extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        const selectedLang = CustomCookieHelper.HelperGetLang("selectLang");
        const apiURLs = {
            'en':'https://www.sword-capital.com/dev/wp/wp-json/wp/v2/pages?slug=home',
            'ar':'https://www.sword-capital.com/dev/wp/wp-json/wp/v2/pages?slug=home',
        }
        const apiURL = apiURLs[selectedLang];
        window.scrollTo(0, 0);
        axios.get(apiURL)
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
                <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/PARTNERS.jpg)" title={details[0].title.rendered} />
                <div className="inner-pages-text content-area">
                    <div dangerouslySetInnerHTML={{__html: details[0].content.rendered}}/>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <form id="send-message">
                                    <div className="form-field">
                                        <label>Your IB Account Number Or You Account Number: <span>*</span></label>
                                        <input type="text" required name="firstName" id="firstName" onChange={this.handleChange}></input>
                                        <label>Email<span>*</span></label>
                                        <input type="text" required name="yourEmail" id="yourEmail" onChange={this.handleChange}></input>
                                        <label>Your Website<span>*</span></label>
                                        <input type="text" required name="lastName" id="lastName" onChange={this.handleChange}></input>
                                        <div className="sub-btn">
                                            <input type="submit" />
                                        </div>
                                    </div>
                                </form>
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
