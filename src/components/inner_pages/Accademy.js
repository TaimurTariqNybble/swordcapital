import React, { Component } from 'react';
import InnerBanner from './InnerBanner';
import SwordIcon from '../assets/sword-icon.png';
import axios from 'axios';

export class Accademy extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('https://www.sword-capital.com/dev/wp/wp-json/wp/v2/pages?slug=introducing-brokers-2')
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
            lastName: "",
            yourEmail: "",
            countryName: "",
            yourTele: "",
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
        if(id === 4071) {
            formData = {
                'ci_firstname': this.state.firstName,
                'ci_lastname': this.state.lastName,
                'ci_email': this.state.yourEmail,
                'ci_country': this.state.countryName,
                'ci_telephone': this.state.yourTele,
                
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

        const { isLoaded } = this.state;

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
            document.title = `Sword Capital | GCC-seminar`;
        return (
            <>
                <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/GCC-SEMINAR.jpg)" title="GCC-seminar" />
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                            <h2>Weekly Workshop</h2>
                            <p>How to use the platforms</p>
                            <p><strong>Register to get the latest update for Sword online courses free fees.</strong></p>
                            <form onSubmit={this.handleSubmit(4071)} id="send-message">
                            <div className="form-field">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label>First Name: الأسم الأول<span>*</span></label>
                                        <input type="text" required name="firstName" id="firstName" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Last Name: أسم العائلة<span>*</span></label>
                                        <input type="text" required name="lastName" id="lastName" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>E-Mail Address: البريد الإلكتروني<span>*</span></label>
                                        <input type="text" required name="yourEmail" id="yourEmail" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Resident Country: الدولة<span>*</span></label>
                                        <select required name="countryName" id="countryName" onChange={this.handleChange}>
                                        <option value="Select country">Select country</option>
                                            <option value="Kuwait">Kuwait</option><option value="United States">United States</option><option value="Canada">Canada</option><option value="Mexico">Mexico</option><option value="United Kingdom">United Kingdom</option><option value="-----" disabled>-----</option><option value="Afghanistan">Afghanistan</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas">Bahamas</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bonaire">Bonaire</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Bouvet Island (Bouvetoya)">Bouvet Island (Bouvetoya)</option><option value="Brazil">Brazil</option><option value="British Indian Ocean Territory (Chagos Archipelago)">British Indian Ocean Territory (Chagos Archipelago)</option><option value="British Virgin Islands">British Virgin Islands</option><option value="Brunei Darussalam">Brunei Darussalam</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Cape Verde">Cape Verde</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Congo">Congo</option><option value="Congo">Congo</option><option value="Cook Islands">Cook Islands</option><option value="Costa Rica">Costa Rica</option><option value="Cote d'Ivoire">Cote d'Ivoire</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Curaçao">Curaçao</option><option value="Cyprus">Cyprus</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option><option value="Faroe Islands">Faroe Islands</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern Territories">French Southern Territories</option><option value="Gabon">Gabon</option><option value="Gambia">Gambia</option><option value="Georgia">Georgia</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guernsey">Guernsey</option><option value="Guinea">Guinea</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option><option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Isle of Man">Isle of Man</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jersey">Jersey</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Korea">Korea</option><option value="Korea">Korea</option><option value="Kuwait">Kuwait</option><option value="Kyrgyz Republic">Kyrgyz Republic</option><option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macao">Macao</option><option value="Macedonia">Macedonia</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Micronesia">Micronesia</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="Netherlands Antilles">Netherlands Antilles</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestinian Territory">Palestinian Territory</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn Islands">Pitcairn Islands</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Reunion">Reunion</option><option value="Romania">Romania</option><option value="Russian Federation">Russian Federation</option><option value="Rwanda">Rwanda</option><option value="Saint Barthelemy">Saint Barthelemy</option><option value="Saint Helena">Saint Helena</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Martin">Saint Martin</option><option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Sint Maarten (Netherlands)">Sint Maarten (Netherlands)</option><option value="Slovakia (Slovak Republic)">Slovakia (Slovak Republic)</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Georgia &amp; S. Sandwich Islands">South Georgia &amp; S. Sandwich Islands</option><option value="Spain">Spain</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard &amp; Jan Mayen Islands">Svalbard &amp; Jan Mayen Islands</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syrian Arab Republic">Syrian Arab Republic</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="Timor-Leste">Timor-Leste</option><option value="Togo">Togo</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks and Caicos Islands">Turks and Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="U.S. Virgin Islands">U.S. Virgin Islands</option><option value="U.S. Minor Outlying Islands">U.S. Minor Outlying Islands</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Wallis and Futuna">Wallis and Futuna</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Telephone (Ex:+965xxxxxx): رقم الهاتف<span>*</span></label>
                                        <input type="text" required name="yourTele" id="yourTele" onChange={this.handleChange}></input>
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

export class OptTrading extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('https://www.sword-capital.com/dev/wp/wp-json/wp/v2/pages?slug=introducing-brokers-2')
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
            lastName: "",
            yourEmail: "",
            countryName: "",
            yourTele: "",
            employStatus: "",
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
        if(id === 727) {
            formData = {
                'ci_firstname': this.state.firstName,
                'ci_lastname': this.state.lastName,
                'ci_email': this.state.yourEmail,
                'ci_country': this.state.countryName,
                'ci_telephone': this.state.yourTele,
                'ci_company': this.state.employStatus,
                
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

        const { isLoaded } = this.state;

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
            document.title = `Sword Capital | Option Trading – Workshop`;
        return (
            <>
                <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/OPTION-TRADING-–-WORKSHOP.jpg)" title="Option Trading – Workshop" />
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                            <div className="row">
                            <div className="col-md-6">
                            <p><strong>Name</strong></p>
                            <p>Option Trading – how to use option platform TWS</p>
                            <p><strong>Location</strong></p>
                            <p>	Kuwait – Aljawhara Tower – Sharq – floor19</p>
                            <p><strong>From</strong></p>
                            <p>Every Sunday till Wednesday from 15:00 till 19:00 PM Kuwait time</p>
                            </div>
                            <div className="col-md-6">
                            <p><strong>Price</strong></p>
                            <p>Free</p>
                            <p><strong>More Information</strong></p>
                            <p>info@sword-capital.com</p>
                            </div>
                            </div>
                            <form onSubmit={this.handleSubmit(727)} id="send-message">
                            <div className="form-field">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label>First Name: الأسم الأول<span>*</span></label>
                                        <input type="text" required name="firstName" id="firstName" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Last Name: أسم العائلة<span>*</span></label>
                                        <input type="text" required name="lastName" id="lastName" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>E-mail Address: البريد الإلكتروني<span>*</span></label>
                                        <input type="text" required name="yourEmail" id="yourEmail" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Employment Status: الوظيفة<span>*</span></label>
                                        <select required name="employStatus" id="employStatus" onChange={this.handleChange}>
                                        <option value="Select status">Select stauts</option>
                                            <option value="Employed">Employed</option>
                                            <option value="Self-Employed">Self-Employed</option>
                                            <option value="Student">Student</option>
                                            <option value="Retired">Retired</option>
                                            <option value="Unemployed">Unemployed</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Resident Country: الدولة<span>*</span></label>
                                        <select required name="countryName" id="countryName" onChange={this.handleChange}>
                                        <option value="Select country">Select country</option>
                                            <option value="Kuwait">Kuwait</option><option value="United States">United States</option><option value="Canada">Canada</option><option value="Mexico">Mexico</option><option value="United Kingdom">United Kingdom</option><option value="-----" disabled>-----</option><option value="Afghanistan">Afghanistan</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas">Bahamas</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bonaire">Bonaire</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Bouvet Island (Bouvetoya)">Bouvet Island (Bouvetoya)</option><option value="Brazil">Brazil</option><option value="British Indian Ocean Territory (Chagos Archipelago)">British Indian Ocean Territory (Chagos Archipelago)</option><option value="British Virgin Islands">British Virgin Islands</option><option value="Brunei Darussalam">Brunei Darussalam</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Cape Verde">Cape Verde</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Congo">Congo</option><option value="Congo">Congo</option><option value="Cook Islands">Cook Islands</option><option value="Costa Rica">Costa Rica</option><option value="Cote d'Ivoire">Cote d'Ivoire</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Curaçao">Curaçao</option><option value="Cyprus">Cyprus</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option><option value="Faroe Islands">Faroe Islands</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern Territories">French Southern Territories</option><option value="Gabon">Gabon</option><option value="Gambia">Gambia</option><option value="Georgia">Georgia</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guernsey">Guernsey</option><option value="Guinea">Guinea</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option><option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Isle of Man">Isle of Man</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jersey">Jersey</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Korea">Korea</option><option value="Korea">Korea</option><option value="Kuwait">Kuwait</option><option value="Kyrgyz Republic">Kyrgyz Republic</option><option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macao">Macao</option><option value="Macedonia">Macedonia</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Micronesia">Micronesia</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="Netherlands Antilles">Netherlands Antilles</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestinian Territory">Palestinian Territory</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn Islands">Pitcairn Islands</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Reunion">Reunion</option><option value="Romania">Romania</option><option value="Russian Federation">Russian Federation</option><option value="Rwanda">Rwanda</option><option value="Saint Barthelemy">Saint Barthelemy</option><option value="Saint Helena">Saint Helena</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Martin">Saint Martin</option><option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Sint Maarten (Netherlands)">Sint Maarten (Netherlands)</option><option value="Slovakia (Slovak Republic)">Slovakia (Slovak Republic)</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Georgia &amp; S. Sandwich Islands">South Georgia &amp; S. Sandwich Islands</option><option value="Spain">Spain</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard &amp; Jan Mayen Islands">Svalbard &amp; Jan Mayen Islands</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syrian Arab Republic">Syrian Arab Republic</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="Timor-Leste">Timor-Leste</option><option value="Togo">Togo</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks and Caicos Islands">Turks and Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="U.S. Virgin Islands">U.S. Virgin Islands</option><option value="U.S. Minor Outlying Islands">U.S. Minor Outlying Islands</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Wallis and Futuna">Wallis and Futuna</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Telephone (Ex:+965xxxxxx): رقم الهاتف<span>*</span></label>
                                        <input type="text" required name="yourTele" id="yourTele" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
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

export class Mt5Workshop extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('https://www.sword-capital.com/dev/wp/wp-json/wp/v2/pages?slug=introducing-brokers-2')
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
            lastName: "",
            yourEmail: "",
            countryName: "",
            yourTele: "",
            employStatus: "",
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
        if(id === 727) {
            formData = {
                'ci_firstname': this.state.firstName,
                'ci_lastname': this.state.lastName,
                'ci_email': this.state.yourEmail,
                'ci_country': this.state.countryName,
                'ci_telephone': this.state.yourTele,
                'ci_company': this.state.employStatus,
                
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

        const { isLoaded } = this.state;

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
            
            document.title = `Sword Capital | MT5 Workshop`;
        return (
            <>
                <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/MT4-WORKSHOP.jpg)" title="MT5 Workshop" />
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                            <div className="row">
                            <div className="col-md-6">
                            <p><strong>Name</strong></p>
                            <p>MT5 Workshop</p>
                            <p><strong>Location</strong></p>
                            <p>	Kuwait – Aljawhara Tower – Sharq – floor 18 & 19</p>
                            <p><strong>Services included</strong></p>
                            <p>N/A</p>
                            </div>
                            <div className="col-md-6">
                            <p><strong>Price</strong></p>
                            <p>Free for Sword Capital Client</p>
                            <p><strong>Payment</strong></p>
                            <p>Free</p>
                            <p><strong>More Information</strong></p>
                            <p>info@sword-capital.com</p>
                            </div>
                            </div>
                            <form onSubmit={this.handleSubmit(727)} id="send-message">
                            <div className="form-field">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label>First Name: الأسم الأول<span>*</span></label>
                                        <input type="text" required name="firstName" id="firstName" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Last Name: أسم العائلة<span>*</span></label>
                                        <input type="text" required name="lastName" id="lastName" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>E-mail Address: البريد الإلكتروني<span>*</span></label>
                                        <input type="text" required name="yourEmail" id="yourEmail" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Employment Status: الوظيفة<span>*</span></label>
                                        <select required name="employStatus" id="employStatus" onChange={this.handleChange}>
                                        <option value="Select status">Select stauts</option>
                                            <option value="Employed">Employed</option>
                                            <option value="Self-Employed">Self-Employed</option>
                                            <option value="Student">Student</option>
                                            <option value="Retired">Retired</option>
                                            <option value="Unemployed">Unemployed</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Resident Country: الدولة<span>*</span></label>
                                        <select required name="countryName" id="countryName" onChange={this.handleChange}>
                                        <option value="Select country">Select country</option>
                                            <option value="Kuwait">Kuwait</option><option value="United States">United States</option><option value="Canada">Canada</option><option value="Mexico">Mexico</option><option value="United Kingdom">United Kingdom</option><option value="-----" disabled>-----</option><option value="Afghanistan">Afghanistan</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas">Bahamas</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bonaire">Bonaire</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Bouvet Island (Bouvetoya)">Bouvet Island (Bouvetoya)</option><option value="Brazil">Brazil</option><option value="British Indian Ocean Territory (Chagos Archipelago)">British Indian Ocean Territory (Chagos Archipelago)</option><option value="British Virgin Islands">British Virgin Islands</option><option value="Brunei Darussalam">Brunei Darussalam</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Cape Verde">Cape Verde</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Congo">Congo</option><option value="Congo">Congo</option><option value="Cook Islands">Cook Islands</option><option value="Costa Rica">Costa Rica</option><option value="Cote d'Ivoire">Cote d'Ivoire</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Curaçao">Curaçao</option><option value="Cyprus">Cyprus</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option><option value="Faroe Islands">Faroe Islands</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern Territories">French Southern Territories</option><option value="Gabon">Gabon</option><option value="Gambia">Gambia</option><option value="Georgia">Georgia</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guernsey">Guernsey</option><option value="Guinea">Guinea</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option><option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Isle of Man">Isle of Man</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jersey">Jersey</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Korea">Korea</option><option value="Korea">Korea</option><option value="Kuwait">Kuwait</option><option value="Kyrgyz Republic">Kyrgyz Republic</option><option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macao">Macao</option><option value="Macedonia">Macedonia</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Micronesia">Micronesia</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="Netherlands Antilles">Netherlands Antilles</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestinian Territory">Palestinian Territory</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn Islands">Pitcairn Islands</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Reunion">Reunion</option><option value="Romania">Romania</option><option value="Russian Federation">Russian Federation</option><option value="Rwanda">Rwanda</option><option value="Saint Barthelemy">Saint Barthelemy</option><option value="Saint Helena">Saint Helena</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Martin">Saint Martin</option><option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Sint Maarten (Netherlands)">Sint Maarten (Netherlands)</option><option value="Slovakia (Slovak Republic)">Slovakia (Slovak Republic)</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Georgia &amp; S. Sandwich Islands">South Georgia &amp; S. Sandwich Islands</option><option value="Spain">Spain</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard &amp; Jan Mayen Islands">Svalbard &amp; Jan Mayen Islands</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syrian Arab Republic">Syrian Arab Republic</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="Timor-Leste">Timor-Leste</option><option value="Togo">Togo</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks and Caicos Islands">Turks and Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="U.S. Virgin Islands">U.S. Virgin Islands</option><option value="U.S. Minor Outlying Islands">U.S. Minor Outlying Islands</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Wallis and Futuna">Wallis and Futuna</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Telephone (Ex:+965xxxxxx): رقم الهاتف<span>*</span></label>
                                        <input type="text" required name="yourTele" id="yourTele" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
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

export class TwsWorkshop extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('https://www.sword-capital.com/dev/wp/wp-json/wp/v2/pages?slug=introducing-brokers-2')
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
            lastName: "",
            yourEmail: "",
            countryName: "",
            yourTele: "",
            employStatus: "",
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
        if(id === 727) {
            formData = {
                'ci_firstname': this.state.firstName,
                'ci_lastname': this.state.lastName,
                'ci_email': this.state.yourEmail,
                'ci_country': this.state.countryName,
                'ci_telephone': this.state.yourTele,
                'ci_company': this.state.employStatus,
                
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

        const { isLoaded } = this.state;

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
            document.title = `Sword Capital | TWS® Workshop`;
        return (
            <>
                <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/TWS®-WORKSHOP.jpg)" title="TWS® Workshop" />
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                            <div className="row">
                            <div className="col-md-6">
                            <p><strong>Name</strong></p>
                            <p>TWS® Workshop</p>
                            <p><strong>Location</strong></p>
                            <p>	Kuwait – Aljawhara Tower – Sharq – floor19</p>
                            <p><strong>From</strong></p>
                            <p>	Every Sunday till Wednesday from 15:00 till 19:00 PM Kuwait time</p>
                            <p><strong>Services included</strong></p>
                            <p>N/A</p>
                            </div>
                            <div className="col-md-6">
                            <p><strong>Price</strong></p>
                            <p>Free for Sword Capital Client</p>
                            <p><strong>Payment</strong></p>
                            <p>Free</p>
                            <p><strong>More Information</strong></p>
                            <p>info@sword-capital.com</p>
                            </div>
                            </div>
                            <form onSubmit={this.handleSubmit(727)} id="send-message">
                            <div className="form-field">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label>First Name: الأسم الأول<span>*</span></label>
                                        <input type="text" required name="firstName" id="firstName" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Last Name: أسم العائلة<span>*</span></label>
                                        <input type="text" required name="lastName" id="lastName" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>E-mail Address: البريد الإلكتروني<span>*</span></label>
                                        <input type="text" required name="yourEmail" id="yourEmail" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Employment Status: الوظيفة<span>*</span></label>
                                        <select required name="employStatus" id="employStatus" onChange={this.handleChange}>
                                        <option value="Select status">Select stauts</option>
                                            <option value="Employed">Employed</option>
                                            <option value="Self-Employed">Self-Employed</option>
                                            <option value="Student">Student</option>
                                            <option value="Retired">Retired</option>
                                            <option value="Unemployed">Unemployed</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Resident Country: الدولة<span>*</span></label>
                                        <select required name="countryName" id="countryName" onChange={this.handleChange}>
                                        <option value="Select country">Select country</option>
                                            <option value="Kuwait">Kuwait</option><option value="United States">United States</option><option value="Canada">Canada</option><option value="Mexico">Mexico</option><option value="United Kingdom">United Kingdom</option><option value="-----" disabled>-----</option><option value="Afghanistan">Afghanistan</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas">Bahamas</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bonaire">Bonaire</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Bouvet Island (Bouvetoya)">Bouvet Island (Bouvetoya)</option><option value="Brazil">Brazil</option><option value="British Indian Ocean Territory (Chagos Archipelago)">British Indian Ocean Territory (Chagos Archipelago)</option><option value="British Virgin Islands">British Virgin Islands</option><option value="Brunei Darussalam">Brunei Darussalam</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Cape Verde">Cape Verde</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Congo">Congo</option><option value="Congo">Congo</option><option value="Cook Islands">Cook Islands</option><option value="Costa Rica">Costa Rica</option><option value="Cote d'Ivoire">Cote d'Ivoire</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Curaçao">Curaçao</option><option value="Cyprus">Cyprus</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option><option value="Faroe Islands">Faroe Islands</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern Territories">French Southern Territories</option><option value="Gabon">Gabon</option><option value="Gambia">Gambia</option><option value="Georgia">Georgia</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guernsey">Guernsey</option><option value="Guinea">Guinea</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option><option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Isle of Man">Isle of Man</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jersey">Jersey</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Korea">Korea</option><option value="Korea">Korea</option><option value="Kuwait">Kuwait</option><option value="Kyrgyz Republic">Kyrgyz Republic</option><option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macao">Macao</option><option value="Macedonia">Macedonia</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Micronesia">Micronesia</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="Netherlands Antilles">Netherlands Antilles</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestinian Territory">Palestinian Territory</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn Islands">Pitcairn Islands</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Reunion">Reunion</option><option value="Romania">Romania</option><option value="Russian Federation">Russian Federation</option><option value="Rwanda">Rwanda</option><option value="Saint Barthelemy">Saint Barthelemy</option><option value="Saint Helena">Saint Helena</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Martin">Saint Martin</option><option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Sint Maarten (Netherlands)">Sint Maarten (Netherlands)</option><option value="Slovakia (Slovak Republic)">Slovakia (Slovak Republic)</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Georgia &amp; S. Sandwich Islands">South Georgia &amp; S. Sandwich Islands</option><option value="Spain">Spain</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard &amp; Jan Mayen Islands">Svalbard &amp; Jan Mayen Islands</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syrian Arab Republic">Syrian Arab Republic</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="Timor-Leste">Timor-Leste</option><option value="Togo">Togo</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks and Caicos Islands">Turks and Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="U.S. Virgin Islands">U.S. Virgin Islands</option><option value="U.S. Minor Outlying Islands">U.S. Minor Outlying Islands</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Wallis and Futuna">Wallis and Futuna</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Telephone (Ex:+965xxxxxx): رقم الهاتف<span>*</span></label>
                                        <input type="text" required name="yourTele" id="yourTele" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
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
                            <p>Important:</p>
                            <p>Sword Capital provides trading in more than 100 exchange markets  worldwide, our clients can trade in forex, option, stocks, CFDs, futures, ETFs and bond from one terminal TWS® and Trader Workstation are either trademarks or service marks of Interactive Brokers LLC.Co</p>
                            <p>Interactive Brokers LLC is a registered Broker-Dealer, Futures Commission Merchant and Forex Dealer Member, regulated by the U.S. Securities and Exchange Commission (SEC), the Commodity Futures Trading Commission (CFTC) and the National Futures Association (NFA), and is a member of the Financial Industry Regulatory Authority (FINRA) and several other self-regulatory organizations.  Interactive Brokers does not endorse or recommend any introducing brokers, third-party financial advisors or hedge funds.  Interactive Brokers provides execution and clearing services to customers.  None of the information contained herein constitutes a recommendation, offer, or solicitation of an offer by Interactive Brokers to buy, sell or hold any security, financial product or instrument or to engage in any specific investment strategy. Interactive Brokers makes no representation, and assumes no liability to the accuracy or completeness of the information provided on this website.</p>
                            <p>For more information regarding Interactive Brokers, please visit <a href="https://www.interactivebrokers.com/" target="_blank" rel="noreferrer">www.interactivebrokers.com</a></p>
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

export class TradeSignal extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('https://www.sword-capital.com/wp-json/wp/v2/pages')
            .then(res => this.setState({
                details: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err));
    }

    render() {

        const { isLoaded } = this.state;
        if (isLoaded) {
        const iframe = '<iframe width="100%" height="390" src="https://www.mql5.com/en/signals/widget/top/109m?c=3" frameborder="0"></iframe>';
        document.title = `Sword Capital | Trading Signals`;
        return (
            <>
                <InnerBanner img="url(https://www.sword-capital.com/dev/wp/wp-content/uploads/2021/07/TRADING-SIGNALS.jpg)" title="Trading Signals" />
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                            <h2>Trading Signals – MT4/5 Signal Expert by MQL forum</h2>
                            <p>Note: Sword Capital is not providing Advisory services</p>
                            <div dangerouslySetInnerHTML={{__html: iframe}}/>
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
