import React, { Component } from 'react';
import InnerBanner from './InnerBanner';
import SwordIcon from '../assets/sword-icon.png';
import axios from 'axios';
import {Link} from "react-router-dom";

export default class Downloads extends Component {
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
            
            document.title = `Sword Capital | Downloads`;
        return (
            <>
                <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/MOBILE-APPS.jpg)" title="Downloads" />
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="partner-box dwn-bx">
                                        <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/icon-mt4.png" alt=""/>
                                        <h3>MetaTrader 4</h3>
                                        <p>MT4 the world best CFD and STP trading platform <a href="http://www.metatrader4.com/" target="_blank" rel="noreferrer">(About MT4)</a></p>
                                        <p>Server name: sword</p>
                                        <div className="dwn-btns">
                                        <Link className="theme-btn" to="/downloads/metatrader4">Download</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="partner-box dwn-bx">
                                        <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/mt5.png" alt=""/>
                                        <h3>MetaTrader 5</h3>
                                        <p>MT5 the world best and latest CFD and STP trading platform <a href="http://www.metatrader5.com/" target="_blank" rel="noreferrer">(About MT5)</a></p>
                                        <p>Server name: sword</p>
                                        <div className="dwn-btns">
                                        <Link className="theme-btn" to="/downloads/metatrader5">Download</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="partner-box dwn-bx">
                                        <img src="https://sword-capital.com/dev/wp/wp-content/uploads/2021/10/sword-capital-ios-trader.png" alt=""/>
                                        <h3>Download MT4 for IOS</h3>
                                        <p>	Trade With Your iPhone or iPad! MT4</p>
                                        <div className="dwn-btns">
                                        <a className="theme-btn" href="https://apps.apple.com/us/app/metatrader-4/id496212596" target="_blank" rel="noreferrer">Download</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="partner-box dwn-bx">
                                        <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/08/sword-handy-trader.png" alt=""/>
                                        <h3>Download MT4 for ANDROID</h3>
                                        <p>Trade with your Android smartphone or tablet! MT4</p>
                                        <div className="dwn-btns">
                                        <a className="theme-btn" href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader4" target="_blank" rel="noreferrer">Download</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="partner-box dwn-bx">
                                        <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/sword-icon.png" alt=""/>
                                        <h3>Sword Capital Mobile</h3>
                                        <p>Sword Capital Mobile App: An all in one mobile platform which offers real-time forex news, economic calendar, market analysis and the ability to open trading accounts on the fly.</p>
                                        <div className="dwn-btns">
                                        <a className="theme-btn" href="https://play.google.com/store/apps/details?id=com.sword_capital.appv2" target="_blank" rel="noreferrer">Download Android</a>
                                        <a className="theme-btn" href="https://apps.apple.com/us/app/sword-capital-mobile-app/id1521241135" target="_blank" rel="noreferrer">Download IOS</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="partner-box dwn-bx fil-dn">
                                        <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/08/pdf-icon.png" alt=""/>
                                        <h3>Update Client’s Information</h3>
                                        <div className="dwn-btns">
                                        <a className="theme-btn" href="https://www.sword-capital.com/wp-content/uploads/2021/06/Sword_Brokerage_KYcv2_Apr2021.pdf" target="_blank" rel="noreferrer">Download</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="partner-box dwn-bx fil-dn">
                                        <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/08/pdf-icon.png" alt=""/>
                                        <h3>Open online account form</h3>
                                        <div className="dwn-btns">
                                        <Link className="theme-btn" to="/open-accounts">Download</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="partner-box dwn-bx fil-dn">
                                        <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/08/pdf-icon.png" alt=""/>
                                        <h3>Banking Wire Details</h3>
                                        <div className="dwn-btns">
                                        <Link className="theme-btn" to="/banking-details/">Download</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="partner-box dwn-bx fil-dn">
                                        <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/08/pdf-icon.png" alt=""/>
                                        <h3>Is a written authorization to represent or act on another’s behalf in private affairs, business, or some other legal matter</h3>
                                        <div className="dwn-btns">
                                        <a className="theme-btn" href="https://www.sword-capital.com/images/brokrage/Power-of-Attorney.pdf" target="_blank" rel="noreferrer">Download</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="partner-box dwn-bx fil-dn">
                                        <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/08/pdf-icon.png" alt=""/>
                                        <h3>Introducing Broker Partner Agreement</h3>
                                        <div className="dwn-btns">
                                        <a className="theme-btn" href="https://www.sword-capital.com/brokers/contract%20of%20Introducing%20Broker.pdf" target="_blank" rel="noreferrer">Download</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="partner-box dwn-bx fil-dn">
                                        <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/08/pdf-icon.png" alt=""/>
                                        <h3>Sword Capital is committed to full compliance with all applicable laws and regulations regarding money laundering</h3>
                                        <div className="dwn-btns">
                                        <a className="theme-btn" href="https://www.sword-capital.com/images/brokrage/Important-Information-client-protection.pdf" target="_blank" rel="noreferrer">Download</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="partner-box dwn-bx fil-dn">
                                        <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/08/pdf-icon.png" alt=""/>
                                        <h3>Meta Traders 4 products Spread</h3>
                                        <div className="dwn-btns">
                                        <a className="theme-btn" href="https://www.sword-capital.com/brokers/SIC_Spreads-Micro_2014-3.pdf" target="_blank" rel="noreferrer">Download</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="partner-box dwn-bx fil-dn">
                                        <img src="https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/08/pdf-icon.png" alt=""/>
                                        <h3>Complaints Form</h3>
                                        <div className="dwn-btns">
                                        <a className="theme-btn" href="https://www.sword-capital.com/wp-content/uploads/2019/12/Sword-Complaint-Form.pdf" target="_blank" rel="noreferrer">Download</a>
                                        </div>
                                    </div>
                                </div>
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
