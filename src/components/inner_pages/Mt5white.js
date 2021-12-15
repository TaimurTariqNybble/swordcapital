import React, { Component } from 'react';
import InnerBanner from './InnerBanner';
import SwordIcon from '../assets/sword-icon.png';
import axios from 'axios';
import CustomCookieHelper from '../Helper';

export default class Mt5white extends Component {
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
            const BannerBg = `url(${details[0].acf.banner_image})`;
            document.title = `Sword Capital | ${details[0].title.rendered}`;
        return (
            <>
                <InnerBanner img={BannerBg} title="Mt5 White Label" />
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
