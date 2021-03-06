import React, { Component } from 'react';
import InnerBanner from './InnerBanner';
import SwordIcon from '../assets/sword-icon.png';
import axios from 'axios';
import UrlService from '../../Service';
import CustomCookieHelper from '../Helper';

export default class ApplyJob extends Component {
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
            'en':'pages',
            'ar':'pages',
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

        const { isLoaded } = this.state;
        if (isLoaded) {
        const iframe = '<iframe src="https://sword.webhr.co/hr/careers/" style="margin-top:0px; margin-left:0px; width:100%; min-height:400px;" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto"></iframe>';
        document.title = `Sword Capital | Apply Job`;
        return (
            <>
                {(this.state.selectedLang === 'ar') ? <>
                    <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/APPLY-JOB.jpg)" title="التقدم لوظيفة" />
                    <div className="inner-pages-text content-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                <h2>Apply for a Job</h2>
                                <div dangerouslySetInnerHTML={{__html: iframe}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </> : <>
                    <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/APPLY-JOB.jpg)" title="Apply Job" />
                    <div className="inner-pages-text content-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                <h2>Apply for a Job</h2>
                                <div dangerouslySetInnerHTML={{__html: iframe}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </> }
                
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
