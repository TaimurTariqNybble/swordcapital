import React, { Component } from 'react';
import InnerBanner from './InnerBanner';
import SwordIcon from '../assets/sword-icon.png';
import axios from 'axios';
import CustomCookieHelper from '../Helper';

export default class ContactUs extends Component {
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

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            message: "",
            errorMessage: "",
            error: "",
            firstName: "",
            yourEmail: "",
            yourMsg:"",
            yourAcc:"",
            sendEmail:"",
        };

        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleReset = this.handleReset.bind(this);
    }

    validateField(field, value) {
        if(value.length<=0) {
          return <div className="alert alert-danger"><span className="text-capitalize">{field}</span> is required field.</div>;
        } else {
           if(field === 'yourEmail') {
            if(!this.isValidEmail(value))
            return <div className="alert alert-danger">Invalid Email.</div>;
          } else {
            return '';
          }
        }
    }

    handleBlur = (event) => {
        this.setState({ error: this.validateField(event.target.name, event.target.value) });
    }

    isValidEmail(email) {
        return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
    }

    handleChange = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value
        });
    }

    
    handleSubmit = id => event => {
        
        event.preventDefault();
        let formData = {};
        if(id === 103) {
            formData = {
                'send-email-to':this.sendEmail,
                'your-name': this.state.firstName,
                'your-email': this.state.yourEmail,
                'your-acc': this.state.yourAcc,
                'msg': this.state.yourMsg,
                
            }
        }
        const form = new FormData();
        for (const field in formData) {
            form.append(field, formData[field]);
        }


        this.setState({isLoading: true})
        axios.post(`https://www.sword-capital.com/dev/wp/wp-json/contact-form-7/v1/contact-forms/${id}/feedback`, form)
        .then(res => {
            this.setState({isLoading: false})
            if(res.data.status !== 'mail_sent') {
                this.setState({
                    error: true,
                    successMsg: false,
                    errorMessage: res.data.invalid_fields[0].message
                });
                return;
            } else {
                const contactForm = document.getElementById("send-message");
                contactForm.reset();
                this.setState({
                    error: true,
                    successMsg: true,
                    errorMessage: res.data.message
                });
                return;
            }
        })
        .catch(err => {
            this.setState({isLoading: false})
            console.log(err)
        });
    }

    render() {

        const { details, isLoaded } = this.state;

        if (isLoaded) {

            let ShowError = (props) => {
                if(props.message.length > 0) {
                    if(props.error === true) return <div className="alert alert-success"> {props.message} </div>;
                    else return <div className="alert alert-danger"> {props.message} </div>;
                }
                return '';
            }
    
            let hasError = '';
            if(this.state.errorMessage.length > 0) {
                hasError = <ShowError message={this.state.errorMessage} error={this.state.successMsg}/>;
            }
    
            let MessageBtn = (props) => {
                if(props.loading === false) return <input className="blue-btn" type="submit" value="Submit" name="send_message_btn" disabled={props.loading}/>;
                return <input className="blue-btn" type="button" value="Loading..." name="send_message_btn" disabled={props.loading}/>
            }
    
            let send_message_btn = <MessageBtn loading={this.state.isLoading}/>;
            document.title = `Sword Capital | ${details[0].title.rendered}`;

        return (
            <>
                <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/PARTNERS.jpg)" title={details[0].title.rendered} />
                <div className="inner-pages-text content-area">
                    <div className="container">
                    <div dangerouslySetInnerHTML={{__html: details[0].content.rendered}}/>
                        <div className="row">
                            <div className="col-lg-12">
                            <form onSubmit={this.handleSubmit(103)} id="send-message">
                                <div className="form-field">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label>Send Email To<span>*</span></label>
                                            <select required name="sendEmail" id="sendEmail" onChange={this.handleChange}>
                                            <option value="Please Select" >Please Select</option>
                                                <option value="General Information">General Information</option>
                                                <option value="Accounts">Accounts</option>
                                                <option value="Payments">Payments</option>
                                                <option value="Suggestion">Suggestion</option>
                                                <option value="Complain">Complain</option>
                                                <option value="Partners">Partners</option>
                                                <option value="Debit Cards">Debit Cards</option>
                                                <option value="MT4 Trader">MT4 Trader</option>
                                                <option value="TWS Trader">TWS Trader</option>
                                                <option value="Support">Support</option>
                                                <option value="Forget Password">Forget Password</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-6">
                                            <label>Full Name<span>*</span></label>
                                            <input type="text" required name="firstName" id="firstName" onChange={this.handleChange}></input>
                                        </div>
                                        <div className="col-lg-6">
                                            <label>Email Address<span>*</span></label>
                                            <input type="text" required name="yourEmail" id="yourEmail" onChange={this.handleChange}></input>
                                        </div>
                                        <div className="col-lg-6">
                                            <label>Account Number<span>*</span></label>
                                            <input type="text" required name="yourAcc" id="yourAcc" onChange={this.handleChange}></input>
                                        </div>
                                        <div className="col-lg-6">
                                            <label>Message<span>*</span></label>
                                            <textarea required name="yourMsg" id="yourMsg" onChange={this.handleChange}></textarea>
                                            <div className="sub-btn">
                                                {/*<input type="submit" />*/}
                                                {send_message_btn}
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                        {
                                            (this.state.error)
                                            ?
                                            hasError
                                            :
                                            ''
                                        }
                                        </div>
                                    </div>
                                </div>
                            </form>
                            </div>
                        </div>
                        <div dangerouslySetInnerHTML={{__html: details[0].acf.contact_details_content}}/>
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
