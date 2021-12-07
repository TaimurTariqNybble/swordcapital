import React, { Component } from 'react';
import InnerBanner from './InnerBanner';
import axios from 'axios';

export default class Test extends Component {
    state = {
        about: [],
        isLoader: false
    }

    componentDidMount() {
        axios.get('https://www.sword-capital.com/dev/wp/wp-json/wp/v2/pages')
            .then(res => this.setState({
                about: res.data,
                isLoader: true
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
            lastName: "",
            yourEmail: "",
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
        if(id === 54) {
            formData = {
                'your-name': this.state.firstName,
                'last-name': this.state.lastName,
                'email-name': this.state.yourEmail,
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
                    errorMessage: res.data.message
                });
                return;
            } else {
                const contactForm = document.getElementById("send-message");
                contactForm.reset();
                this.setState({
                    error: false,
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

        const { isLoader } = this.state;

        if (isLoader) {

            let ShowError = (props) => {
                if(props.message.length > 0) {
                    if(props.error === false) return <div className="alert alert-success"> {props.message} </div>;
                    else return <div className="alert alert-danger"> {props.message} </div>;
                }
                return '';
            }
    
            let hasError = '';
            if(this.state.errorMessage.length > 0) {
                hasError = <ShowError message={this.state.errorMessage} error={this.state.error}/>;
            }
    
            let MessageBtn = (props) => {
                if(props.loading === false) return <input className="blue-btn" type="submit" value="Submit" name="send_message_btn" disabled={props.loading}/>;
                return <input className="blue-btn" type="button" value="Loading..." name="send_message_btn" disabled={props.loading}/>
            }
    
            let send_message_btn = <MessageBtn loading={this.state.isLoading}/>;
        
            return (
                <>
                    <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/TRADER.jpg)" title="Test" />
                    <div className="inner-pages-text content-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    {hasError}
                                    <form onSubmit={this.handleSubmit(54)} id="send-message">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <span>
                                                            <label>First Name<span>*</span></label>
                                                            <input type="text"  required name="firstName" id="firstName" onChange={this.handleChange}/>
                                                        </span>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <span>
                                                            <label>Last Name<span>*</span></label>
                                                            <input type="text"  required name="lastName" id="lastName" onChange={this.handleChange}/>
                                                        </span>
                                                        <span>
                                                            <label>Email Name<span>*</span></label>
                                                            <input type="email"  required name="yourEmail" id="yourEmail" onChange={this.handleChange}/>
                                                        </span>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <span>
                                                            {/* <input className="blue-btn" type="submit" value="Submit" name="send_message_btn"/> */}
                                                            {send_message_btn}
                                                        </span>
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
        return <></>
    }
}
