import React, { Component } from 'react';
import InnerBanner from './InnerBanner';
import SwordIcon from '../assets/sword-icon.png';
import axios from 'axios';
import CustomCookieHelper from '../Helper';

export class IbAccount extends Component {
    state = {
        details: [],
        isLoader: false
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
            agreeCheck: "",
            firstName: "",
            lastName: "",
            yourEmail: "",
            bDay: "",
            countryName: "",
            cityName: "",
            cityAddress: "",
            postalCode: "",
            yourTele: "",
            employStatus: "",
            passportNum: "",
            tradingChoose: "",
            agentReferrat: "",
            investAmount: "",
            totalIncome: "",
            totalNet: "",
            educationLevel: "",
            tradeShare: "",
            workExp: "",
            releventQual: "",
            riskPayment: "",
            identityPassport: "",
            proofResidency: "",
            companyLicense: "",
            swordMaster: "",
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
        if(id === 471) {
            formData = {
                'checkbox-118': this.state.agreeCheck,
                'ci_firstname': this.state.firstName,
                'ci_lastname': this.state.lastName,
                'ci_email': this.state.yourEmail,
                'ci_Bday': this.state.bDay,
                'ci_country': this.state.countryName,
                'ci_city': this.state.cityName,
                'ci_address': this.state.cityAddress,
                'ci_postalcode': this.state.postalCode,
                'ci_telephone': this.state.yourTele,
                'ci_company': this.state.employStatus,
                'ci_fax': this.state.passportNum,
                'so_platform': this.state.tradingChoose,
                'ci_state': this.state.agentReferrat,
                'ci_InvAmount': this.state.investAmount,
                'ci_income': this.state.totalIncome,
                'ci_NetWorth': this.state.totalNet,
                'ci_Education': this.state.educationLevel,
                'namber_01': this.state.tradeShare,
                'ra_WorkExperince': this.state.workExp,
                'ra_ProQualification': this.state.releventQual,
                'ra_risk': this.state.riskPayment,
                //'f_ppt': this.identityPassport,
                //'f_residency': this.state.proofResidency,
                //'f_license': this.state.companyLicense,
                'f_card': this.state.swordMaster,
                
            }
        }
        const form = new FormData();
        for (const field in formData) {
            form.append(field, formData[field]);
        }

         // preparing files
        var files_f_ppt = document.getElementById("identityPassport").files;
        var files_f_residency = document.getElementById("proofResidency").files;
        var files_f_license = document.getElementById("companyLicense").files;

        // residency
        if (files_f_ppt.length > 0) {
        form.append("f_ppt", files_f_ppt[0]);
        }

        // f_license
        if (files_f_residency.length > 0) {
        form.append("f_residency", files_f_residency[0]);
        }

        // residency
        if (files_f_license.length > 0) {
        form.append("f_license", files_f_license[0]);
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

        const { details, isLoader } = this.state;

        if (isLoader) {

            let ShowError = (props) => {
                if(props.message.length > 0) {
                    if(props.successMsg === true) return <div className="alert alert-success"> {props.message} </div>;
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
            const BannerBg = `url(${details[0].acf.banner_image})`;
            document.title = `Sword Capital | ${details[0].title.rendered}`;
        return (
            <>
                <InnerBanner img={BannerBg} title={details[0].title.rendered} />
                <div className="inner-pages-text content-area">
                    <div dangerouslySetInnerHTML={{__html: details[0].content.rendered}}/>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                            <form onSubmit={this.handleSubmit(471)} id="send-message">
                            <h2>Personal Information (Company's Owner)</h2>
                            <div className="form-field">
                                <div className="row">
                                    <div className="col-lg-12 agree-bk">
                                        <label><input type="checkbox" required name="agreeCheck" id="agreeCheck" onChange={this.handleChange} value="I Agree"></input>I Agree</label>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>First Name<span>*</span></label>
                                        <input type="text" required name="firstName" id="firstName" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Last Name<span>*</span></label>
                                        <input type="text" required name="lastName" id="lastName" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Email<span>*</span></label>
                                        <input type="text" required name="yourEmail" id="yourEmail" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Date Of Birth<span>*</span></label>
                                        <input type="date" required name="bDay" id="bDay" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Resident Country<span>*</span></label>
                                        <select required name="countryName" id="countryName" onChange={this.handleChange}>
                                        <option value="Select country">Select country</option>
                                            <option value="Kuwait">Kuwait</option><option value="United States">United States</option><option value="Canada">Canada</option><option value="Mexico">Mexico</option><option value="United Kingdom">United Kingdom</option><option value="-----" disabled>-----</option><option value="Afghanistan">Afghanistan</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas">Bahamas</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bonaire">Bonaire</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Bouvet Island (Bouvetoya)">Bouvet Island (Bouvetoya)</option><option value="Brazil">Brazil</option><option value="British Indian Ocean Territory (Chagos Archipelago)">British Indian Ocean Territory (Chagos Archipelago)</option><option value="British Virgin Islands">British Virgin Islands</option><option value="Brunei Darussalam">Brunei Darussalam</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Cape Verde">Cape Verde</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Congo">Congo</option><option value="Congo">Congo</option><option value="Cook Islands">Cook Islands</option><option value="Costa Rica">Costa Rica</option><option value="Cote d'Ivoire">Cote d'Ivoire</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Curaçao">Curaçao</option><option value="Cyprus">Cyprus</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option><option value="Faroe Islands">Faroe Islands</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern Territories">French Southern Territories</option><option value="Gabon">Gabon</option><option value="Gambia">Gambia</option><option value="Georgia">Georgia</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guernsey">Guernsey</option><option value="Guinea">Guinea</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option><option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Isle of Man">Isle of Man</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jersey">Jersey</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Korea">Korea</option><option value="Korea">Korea</option><option value="Kuwait">Kuwait</option><option value="Kyrgyz Republic">Kyrgyz Republic</option><option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macao">Macao</option><option value="Macedonia">Macedonia</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Micronesia">Micronesia</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="Netherlands Antilles">Netherlands Antilles</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestinian Territory">Palestinian Territory</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn Islands">Pitcairn Islands</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Reunion">Reunion</option><option value="Romania">Romania</option><option value="Russian Federation">Russian Federation</option><option value="Rwanda">Rwanda</option><option value="Saint Barthelemy">Saint Barthelemy</option><option value="Saint Helena">Saint Helena</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Martin">Saint Martin</option><option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Sint Maarten (Netherlands)">Sint Maarten (Netherlands)</option><option value="Slovakia (Slovak Republic)">Slovakia (Slovak Republic)</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Georgia &amp; S. Sandwich Islands">South Georgia &amp; S. Sandwich Islands</option><option value="Spain">Spain</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard &amp; Jan Mayen Islands">Svalbard &amp; Jan Mayen Islands</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syrian Arab Republic">Syrian Arab Republic</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="Timor-Leste">Timor-Leste</option><option value="Togo">Togo</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks and Caicos Islands">Turks and Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="U.S. Virgin Islands">U.S. Virgin Islands</option><option value="U.S. Minor Outlying Islands">U.S. Minor Outlying Islands</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Wallis and Futuna">Wallis and Futuna</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>City<span>*</span></label>
                                        <input type="text" required name="cityName" id="cityName" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Street Address<span>*</span></label>
                                        <input type="text" required name="cityAddress" id="cityAddress" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Postal Code<span>*</span></label>
                                        <input type="text" required name="postalCode" id="postalCode" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Telephone<span>*</span></label>
                                        <input type="text" required name="yourTele" id="yourTele" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Employment Status<span>*</span></label>
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
                                        <label>Passport ID<span>*</span></label>
                                        <input type="text" required name="passportNum" id="passportNum" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Which Trading Platform Do You Want To Use?<span>*</span></label>
                                        <div className="checkbox-field">
                                            <label>
                                            <input type="radio" name="tradingChoose" id="tradingChoose1" onChange={this.handleChange} value="MetaTrader (MT4)"></input> MetaTrader (MT4)
                                            </label>
                                            <label>
                                            <input type="radio" name="tradingChoose" id="tradingChoose2" onChange={this.handleChange} value="MT5 (Minimum open account 10,000$)"></input>MT5 (Minimum open account 10,000$)
                                            </label>
                                            <label>
                                            <input type="radio" name="tradingChoose" id="tradingChoose3" onChange={this.handleChange} value="Sword TWS"></input> Sword TWS
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Your Agent Referral: (Optional) Your Referral Will Get 5$ Per 1 Lot.<span>*</span></label>
                                        <input type="text" name="agentReferrat" id="agentReferrat" onChange={this.handleChange}></input>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <h2>Investment Information</h2>
                            <div className="form-field">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label>Investment Amount (USD)<span>*</span></label>
                                        <select required name="investAmount" id="investAmount" onChange={this.handleChange}>
                                        <option value="Select option">Select option</option>
                                            <option value="25,000$-49,999$">25,000$-49,999$</option>
                                            <option value="50,000$-99,999$">50,000$-99,999$</option>
                                            <option value="100,000$-499,999$">100,000$-499,999$</option>
                                            <option value="500,000$-Unlimited">500,000$-Unlimited</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Your Total Income Per Month(Estimation)<span>*</span></label>
                                        <select required name="totalIncome" id="totalIncome" onChange={this.handleChange}>
                                        <option value="Select option">Select option</option>
                                            <option value="0$-999$">0$-999$</option>
                                            <option value="1000$-4,999$">1000$-4,999$</option>
                                            <option value="5,000$-9,999$">5,000$-9,999$</option>
                                            <option value="10,000$-Unlimited">10,000$-Unlimited</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Your Expectations For The Total Net Worth Per A Year<span>*</span></label>
                                        <select required name="totalNet" id="totalNet" onChange={this.handleChange}>
                                        <option value="Select option">Select option</option>
                                            <option value="Over than 500,000$">Over than 500,000$</option>
                                            <option value="500,000$-100,000$">500,000$-100,000$</option>
                                            <option value="100,000$-10,000$">100,000$-10,000$</option>
                                            <option value="Less then 10,000$">Less then 10,000$</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <h2>Education and Experience</h2>
                            <div className="form-field">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label>Level Of Education<span>*</span></label>
                                        <select required name="educationLevel" id="educationLevel" onChange={this.handleChange}>
                                        <option value="Select option">Select option</option>
                                            <option value="Secondry">Secondry</option>
                                            <option value="High School">High School</option>
                                            <option value="Diploma Degree">Diploma Degree</option>
                                            <option value="Bachelor's Degree">Bachelor's Degree</option>
                                            <option value="Master's Degree">Master's Degree</option>
                                            <option value="Doctora">Doctora</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>How Many Times Have You Personally Traded Shares And/Or Bonds Over The Past Five Years?<span>*</span></label>
                                        <input type="number" required name="tradeShare" id="tradeShare" onChange={this.handleChange} placeholder="10"></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Do You Have Work Experience In A Financial Institution?<span>*</span></label>
                                        <div className="checkbox-field">
                                            <label>
                                            <input type="radio" name="workExp" id="workExp1" onChange={this.handleChange} value="Yes"></input> Yes
                                            </label>
                                            <label>
                                            <input type="radio" name="workExp" id="workExp2" onChange={this.handleChange} value="No"></input> No
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Do You Have A Relevant Professional Qualification And/Or Education?<span>*</span></label>
                                        <div className="checkbox-field">
                                            <label>
                                            <input type="radio" name="releventQual" id="releventQual1" onChange={this.handleChange} value="Yes"></input> Yes
                                            </label>
                                            <label>
                                            <input type="radio" name="releventQual" id="releventQual2" onChange={this.handleChange} value="No"></input> No
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Do You Understand That There Is A Risk Of Loss When Trading In Leveraged Over-The-Counter Derivative Products And You Could Lose Your Entire Initial Deposit/Margin Payment?<span>*</span></label>
                                        <div className="checkbox-field">
                                            <label>
                                            <input type="radio" name="riskPayment" id="riskPayment1" onChange={this.handleChange} value="Yes, I understand the risk"></input> Yes, I understand the risk
                                            </label>
                                            <label>
                                            <input type="radio" name="riskPayment" id="riskPayment1" onChange={this.handleChange} value="No, I do not know the risk"></input> No, I do not know the risk
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <h2>Required Documents</h2>
                            <div className="form-field">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label>Proof Of Identity -Passport (Page 1 And 2) <span>*</span></label>
                                        <div className="upload-field">
                                        {/*<input type="file" id="identityPassport" name="identityPassport" onChange={this.handleChange}/>*/}
                                        <input type="file" id="identityPassport" required name="identityPassport" onChange={(test)=>this.handleChange(test)}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Proof Of Residency - Bill, Bank Statement Or Civil ID<span>*</span></label>
                                        <div className="upload-field">
                                        <input type="file" id="proofResidency" required name="proofResidency" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Company License (In Case Of Corporate Account)</label>
                                        <div className="upload-field">
                                        <input type="file" id="companyLicense" name="companyLicense" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6">
                                        <label>Do You Need Sword MasterCard ? (DHL Maximum Shipping Fees 100$ )<span>*</span></label>
                                        <select name="swordMaster" id="swordMaster" onChange={this.handleChange} >
                                            <option value="No">No</option>
                                            <option value="Yes">Yes</option>
                                        </select>
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


export class PersonalAccount extends Component {
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

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            message: "",
            errorMessage: "",
            error: "",
            agreeCheck: "",
            firstName: "",
            lastName: "",
            yourEmail: "",
            countryName: "",
            yourTele: "",
            passportNum: "",
            investAmount: "",
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
        if(id === 487) {
            formData = {
                'checkbox-118': this.state.agreeCheck,
                'ci_firstname': this.state.firstName,
                'ci_lastname': this.state.lastName,
                'ci_email': this.state.yourEmail,
                'ci_country': this.state.countryName,
                'ci_fax': this.state.passportNum,
                'ci_telephone': this.state.yourTele,
                'so_platform': this.state.tradingChoose,
                'ci_InvAmount': this.state.investAmount,
                
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
                    if(props.successMsg === true) return <div className="alert alert-success"> {props.message} </div>;
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
            document.title = `Sword Capital | Personal Account`;
        return (
            <>
                <InnerBanner title="Personal Account" />
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                            <h3>Online Open Account Form</h3>
                            <p>The Customer represents that the information contained in the Account Application is true and he have the experience in the markets trading and he will not use all his wealth in Forex investment.</p>
                            <p>I read the client <a href="/">agreement</a> and i know the market risk</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                            <form onSubmit={this.handleSubmit(487)} id="send-message">
                            <h2>Personal Information</h2>
                            <div className="form-field">
                                <div className="row">
                                <div className="col-lg-12 agree-bk">
                                        <label><input type="checkbox" required name="agreeCheck" id="agreeCheck" onChange={this.handleChange} value="I Agree"></input>I Agree</label>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>First Name<span>*</span></label>
                                        <input type="text" required name="firstName" id="firstName" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Last Name<span>*</span></label>
                                        <input type="text" required name="lastName" id="lastName" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Resident Country<span>*</span></label>
                                        <select required name="countryName" id="countryName" onChange={this.handleChange}>
                                        <option value="Select country">Select country</option>
                                            <option value="Kuwait">Kuwait</option><option value="United States">United States</option><option value="Canada">Canada</option><option value="Mexico">Mexico</option><option value="United Kingdom">United Kingdom</option><option value="-----" disabled>-----</option><option value="Afghanistan">Afghanistan</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas">Bahamas</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bonaire">Bonaire</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Bouvet Island (Bouvetoya)">Bouvet Island (Bouvetoya)</option><option value="Brazil">Brazil</option><option value="British Indian Ocean Territory (Chagos Archipelago)">British Indian Ocean Territory (Chagos Archipelago)</option><option value="British Virgin Islands">British Virgin Islands</option><option value="Brunei Darussalam">Brunei Darussalam</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Cape Verde">Cape Verde</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Congo">Congo</option><option value="Congo">Congo</option><option value="Cook Islands">Cook Islands</option><option value="Costa Rica">Costa Rica</option><option value="Cote d'Ivoire">Cote d'Ivoire</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Curaçao">Curaçao</option><option value="Cyprus">Cyprus</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option><option value="Faroe Islands">Faroe Islands</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern Territories">French Southern Territories</option><option value="Gabon">Gabon</option><option value="Gambia">Gambia</option><option value="Georgia">Georgia</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guernsey">Guernsey</option><option value="Guinea">Guinea</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option><option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Isle of Man">Isle of Man</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jersey">Jersey</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Korea">Korea</option><option value="Korea">Korea</option><option value="Kuwait">Kuwait</option><option value="Kyrgyz Republic">Kyrgyz Republic</option><option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macao">Macao</option><option value="Macedonia">Macedonia</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Micronesia">Micronesia</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="Netherlands Antilles">Netherlands Antilles</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestinian Territory">Palestinian Territory</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn Islands">Pitcairn Islands</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Reunion">Reunion</option><option value="Romania">Romania</option><option value="Russian Federation">Russian Federation</option><option value="Rwanda">Rwanda</option><option value="Saint Barthelemy">Saint Barthelemy</option><option value="Saint Helena">Saint Helena</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Martin">Saint Martin</option><option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Sint Maarten (Netherlands)">Sint Maarten (Netherlands)</option><option value="Slovakia (Slovak Republic)">Slovakia (Slovak Republic)</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Georgia &amp; S. Sandwich Islands">South Georgia &amp; S. Sandwich Islands</option><option value="Spain">Spain</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard &amp; Jan Mayen Islands">Svalbard &amp; Jan Mayen Islands</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syrian Arab Republic">Syrian Arab Republic</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="Timor-Leste">Timor-Leste</option><option value="Togo">Togo</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks and Caicos Islands">Turks and Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="U.S. Virgin Islands">U.S. Virgin Islands</option><option value="U.S. Minor Outlying Islands">U.S. Minor Outlying Islands</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Wallis and Futuna">Wallis and Futuna</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Passport ID<span>*</span></label>
                                        <input type="text" required name="passportNum" id="passportNum" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Email<span>*</span></label>
                                        <input type="text" required name="yourEmail" id="yourEmail" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Telephone<span>*</span></label>
                                        <input type="text" required name="yourTele" id="yourTele" onChange={this.handleChange}></input>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <h2>Investment Information</h2>
                            <div className="form-field">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label>Which Trading Platform Do You Want To Use?</label>
                                        <div className="checkbox-field">
                                            <label>
                                            <input type="radio" name="tradingChoose" id="tradingChoose1" onChange={this.handleChange} value="MetaTrader (MT4)"></input> MetaTrader (MT4)
                                            </label>
                                            <label>
                                            <input type="radio" name="tradingChoose" id="tradingChoose2" onChange={this.handleChange} value="MetaTrader (MT5)"></input>MetaTrader (MT5)
                                            </label>
                                            <label>
                                            <input type="radio" name="tradingChoose" id="tradingChoose3" onChange={this.handleChange} value="Sword TWS (Minimum open account 20,000$)"></input> Sword TWS (Minimum open account 20,000$)
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Investment Amount (USD)<span>*</span></label>
                                        <select required name="investAmount" id="investAmount" onChange={this.handleChange}>
                                        <option value="Select option">Select option</option>
                                            <option value="100$-2,999$">100$-2,999$</option>
                                            <option value="3,000$-9,999$">3,000$-9,999$</option>
                                            <option value="10,000$-90,999$">10,000$-90,999$</option>
                                            <option value="100,000$-Unlimited">100,000$-Unlimited</option>
                                        </select>
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

export class CorpAccount extends Component {
    state = {
        about: [],
        isLoader: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('https://www.sword-capital.com/wp-json/wp/v2/pages')
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
            agreeCheck: "",
            firstName: "",
            lastName: "",
            yourEmail: "",
            bDay: "",
            countryName: "",
            cityName: "",
            cityAddress: "",
            postalCode: "",
            yourTele: "",
            employStatus: "",
            passportNum: "",
            tradingChoose: "",
            agentReferrat: "",
            investAmount: "",
            totalIncome: "",
            totalNet: "",
            educationLevel: "",
            tradeShare: "",
            workExp: "",
            releventQual: "",
            riskPayment: "",
            identityPassport: "",
            proofResidency: "",
            companyLicense: "",
            swordMaster: "",
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
        if(id === 475) {
            formData = {
                'checkbox-118': this.state.agreeCheck,
                'ci_firstname': this.state.firstName,
                'ci_lastname': this.state.lastName,
                'ci_email': this.state.yourEmail,
                'ci_Bday': this.state.bDay,
                'ci_country': this.state.countryName,
                'ci_city': this.state.cityName,
                'ci_address': this.state.cityAddress,
                'ci_postalcode': this.state.postalCode,
                'ci_telephone': this.state.yourTele,
                'ci_company': this.state.employStatus,
                'ci_fax': this.state.passportNum,
                'so_platform': this.state.tradingChoose,
                'ci_state': this.state.agentReferrat,
                'ci_InvAmount': this.state.investAmount,
                'ci_income': this.state.totalIncome,
                'ci_NetWorth': this.state.totalNet,
                'ci_Education': this.state.educationLevel,
                'namber_01': this.state.tradeShare,
                'ra_WorkExperince': this.state.workExp,
                'ra_ProQualification': this.state.releventQual,
                'ra_risk': this.state.riskPayment,
                //'f_ppt': this.state.identityPassport,
                //'f_residency': this.state.proofResidency,
                //'f_license': this.state.companyLicense,
                'f_card': this.state.swordMaster,
                
            }
        }
        const form = new FormData();
        for (const field in formData) {
            form.append(field, formData[field]);
        }

         // preparing files
         var files_f_ppt = document.getElementById("identityPassport").files;
         var files_f_residency = document.getElementById("proofResidency").files;
         var files_f_license = document.getElementById("companyLicense").files;
 
         // residency
         if (files_f_ppt.length > 0) {
         form.append("f_ppt", files_f_ppt[0]);
         }
 
         // f_license
         if (files_f_residency.length > 0) {
         form.append("f_residency", files_f_residency[0]);
         }
 
         // residency
         if (files_f_license.length > 0) {
         form.append("f_license", files_f_license[0]);
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

        const { isLoader } = this.state;

        if (isLoader) {

            let ShowError = (props) => {
                if(props.message.length > 0) {
                    if(props.successMsg === true) return <div className="alert alert-success"> {props.message} </div>;
                    else return <div className="alert alert-danger"> {props.message} </div>;
                }
                return '';
            }
    
            let hasError = '';
            if(this.state.errorMessage.length > 0) {
                hasError = <ShowError message={this.state.errorMessage} successMsg={this.state.error}/>;
            }
    
            let MessageBtn = (props) => {
                if(props.loading === false) return <input className="blue-btn" type="submit" value="Submit" name="send_message_btn" disabled={props.loading}/>;
                return <input className="blue-btn" type="button" value="Loading..." name="send_message_btn" disabled={props.loading}/>
            }
    
            let send_message_btn = <MessageBtn loading={this.state.isLoading}/>;
            document.title = `Sword Capital | Corporate Account`;
        return (
            <>
                <InnerBanner title="Corporate Account" />
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                            <p>Corporate accounts start from minimum deposit of 25,000$.</p>
                            <p>The Client represents that the information contained in the Account Application is true and he have the experience in the markets trading and he will not use all his wealth in Forex investment.</p>
                            <p><strong>Note: Don’t fund your account before you get the account opening approval from Sword Capital</strong></p>
                            <p>Corporate accounts requirements: After you get your account login details please send your company legal documents to&nbsp;<span style={{color: "#0000ff"}}>accounts@sword-capital.com</span> within 3 working days.</p>
                            <p><strong>Minimum Account: 25,000$</strong></p>
                            <p>I read the client <a href="https://www.sword-capital.com/images/stock/termsSIC.pdf" target="_blank" rel="noopener noreferrer">agreement</a> and i know the market risk</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                            <form onSubmit={this.handleSubmit(475)} id="send-message">
                            <h2>Personal Information (Company's Owner)</h2>
                            <div className="form-field">
                                <div className="row">
                                    <div className="col-lg-12 agree-bk">
                                        <label><input type="checkbox" required name="agreeCheck" id="agreeCheck" onChange={this.handleChange} value="I Agree"></input>I Agree</label>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>First Name<span>*</span></label>
                                        <input type="text" required name="firstName" id="firstName" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Last Name<span>*</span></label>
                                        <input type="text" required name="lastName" id="lastName" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Email<span>*</span></label>
                                        <input type="text" required name="yourEmail" id="yourEmail" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Date Of Birth<span>*</span></label>
                                        <input type="date" required name="bDay" id="bDay" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Resident Country<span>*</span></label>
                                        <select required name="countryName" id="countryName" onChange={this.handleChange}>
                                        <option value="Select country">Select country</option>
                                            <option value="Kuwait">Kuwait</option><option value="United States">United States</option><option value="Canada">Canada</option><option value="Mexico">Mexico</option><option value="United Kingdom">United Kingdom</option><option value="-----" disabled>-----</option><option value="Afghanistan">Afghanistan</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas">Bahamas</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bonaire">Bonaire</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Bouvet Island (Bouvetoya)">Bouvet Island (Bouvetoya)</option><option value="Brazil">Brazil</option><option value="British Indian Ocean Territory (Chagos Archipelago)">British Indian Ocean Territory (Chagos Archipelago)</option><option value="British Virgin Islands">British Virgin Islands</option><option value="Brunei Darussalam">Brunei Darussalam</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Cape Verde">Cape Verde</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Congo">Congo</option><option value="Congo">Congo</option><option value="Cook Islands">Cook Islands</option><option value="Costa Rica">Costa Rica</option><option value="Cote d'Ivoire">Cote d'Ivoire</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Curaçao">Curaçao</option><option value="Cyprus">Cyprus</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option><option value="Faroe Islands">Faroe Islands</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern Territories">French Southern Territories</option><option value="Gabon">Gabon</option><option value="Gambia">Gambia</option><option value="Georgia">Georgia</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guernsey">Guernsey</option><option value="Guinea">Guinea</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option><option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Isle of Man">Isle of Man</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jersey">Jersey</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Korea">Korea</option><option value="Korea">Korea</option><option value="Kuwait">Kuwait</option><option value="Kyrgyz Republic">Kyrgyz Republic</option><option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macao">Macao</option><option value="Macedonia">Macedonia</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Micronesia">Micronesia</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="Netherlands Antilles">Netherlands Antilles</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestinian Territory">Palestinian Territory</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn Islands">Pitcairn Islands</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Reunion">Reunion</option><option value="Romania">Romania</option><option value="Russian Federation">Russian Federation</option><option value="Rwanda">Rwanda</option><option value="Saint Barthelemy">Saint Barthelemy</option><option value="Saint Helena">Saint Helena</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Martin">Saint Martin</option><option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Sint Maarten (Netherlands)">Sint Maarten (Netherlands)</option><option value="Slovakia (Slovak Republic)">Slovakia (Slovak Republic)</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Georgia &amp; S. Sandwich Islands">South Georgia &amp; S. Sandwich Islands</option><option value="Spain">Spain</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard &amp; Jan Mayen Islands">Svalbard &amp; Jan Mayen Islands</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syrian Arab Republic">Syrian Arab Republic</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="Timor-Leste">Timor-Leste</option><option value="Togo">Togo</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks and Caicos Islands">Turks and Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="U.S. Virgin Islands">U.S. Virgin Islands</option><option value="U.S. Minor Outlying Islands">U.S. Minor Outlying Islands</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Wallis and Futuna">Wallis and Futuna</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>City<span>*</span></label>
                                        <input type="text" required name="cityName" id="cityName" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Street Address<span>*</span></label>
                                        <input type="text" required name="cityAddress" id="cityAddress" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Postal Code<span>*</span></label>
                                        <input type="text" required name="postalCode" id="postalCode" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Telephone<span>*</span></label>
                                        <input type="text" required name="yourTele" id="yourTele" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Employment Status<span>*</span></label>
                                        <select required name="employStatus" id="employStatus" onChange={this.handleChange}>
                                        <option value="Select status">Select status</option>
                                            <option value="Employed">Employed</option>
                                            <option value="Self-Employed">Self-Employed</option>
                                            <option value="Student">Student</option>
                                            <option value="Retired">Retired</option>
                                            <option value="Unemployed">Unemployed</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Passport ID<span>*</span></label>
                                        <input type="text" required name="passportNum" id="passportNum" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Which Trading Platform Do You Want To Use?<span>*</span></label>
                                        <div className="checkbox-field">
                                            <label>
                                            <input type="radio" name="tradingChoose" id="tradingChoose1" onChange={this.handleChange} value="MetaTrader (MT4)"></input> MetaTrader (MT4)
                                            </label>
                                            <label>
                                            <input type="radio" name="tradingChoose" id="tradingChoose2" onChange={this.handleChange} value="MT5 (Minimum open account 10,000$)"></input>MT5 (Minimum open account 10,000$)
                                            </label>
                                            <label>
                                            <input type="radio" name="tradingChoose" id="tradingChoose3" onChange={this.handleChange} value="Sword TWS"></input> Sword TWS
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Your Agent Referral: (Optional) Your Referral Will Get 5$ Per 1 Lot.<span>*</span></label>
                                        <input type="text" name="agentReferrat" id="agentReferrat" onChange={this.handleChange}></input>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <h2>Investment Information</h2>
                            <div className="form-field">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label>Investment Amount (USD)<span>*</span></label>
                                        <select required name="investAmount" id="investAmount" onChange={this.handleChange}>
                                        <option value="Select option">Select option</option>
                                            <option value="25,000$-49,999$">25,000$-49,999$</option>
                                            <option value="50,000$-99,999$">50,000$-99,999$</option>
                                            <option value="100,000$-499,999$">100,000$-499,999$</option>
                                            <option value="500,000$-Unlimited">500,000$-Unlimited</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Your Total Income Per Month(Estimation)<span>*</span></label>
                                        <select required name="totalIncome" id="totalIncome" onChange={this.handleChange}>
                                        <option value="Select option">Select option</option>
                                            <option value="0$-999$">0$-999$</option>
                                            <option value="1000$-4,999$">1000$-4,999$</option>
                                            <option value="5,000$-9,999$">5,000$-9,999$</option>
                                            <option value="10,000$-Unlimited">10,000$-Unlimited</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Your Expectations For The Total Net Worth Per A Year<span>*</span></label>
                                        <select required name="totalNet" id="totalNet" onChange={this.handleChange}>
                                        <option value="Select option">Select option</option>
                                            <option value="Over than 500,000$">Over than 500,000$</option>
                                            <option value="500,000$-100,000$">500,000$-100,000$</option>
                                            <option value="100,000$-10,000$">100,000$-10,000$</option>
                                            <option value="Less then 10,000$">Less then 10,000$</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <h2>Education and Experience</h2>
                            <div className="form-field">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label>Level Of Education<span>*</span></label>
                                        <select required name="educationLevel" id="educationLevel" onChange={this.handleChange}>
                                        <option value="Select option">Select option</option>
                                            <option value="Secondry">Secondry</option>
                                            <option value="High School">High School</option>
                                            <option value="Diploma Degree">Diploma Degree</option>
                                            <option value="Bachelor's Degree">Bachelor's Degree</option>
                                            <option value="Master's Degree">Master's Degree</option>
                                            <option value="Doctora">Doctora</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>How Many Times Have You Personally Traded Shares And/Or Bonds Over The Past Five Years?<span>*</span></label>
                                        <input type="number" required name="tradeShare" id="tradeShare" onChange={this.handleChange} placeholder="10"></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Do You Have Work Experience In A Financial Institution?<span>*</span></label>
                                        <div className="checkbox-field">
                                            <label>
                                            <input type="radio" name="workExp" id="workExp1" onChange={this.handleChange} value="Yes"></input> Yes
                                            </label>
                                            <label>
                                            <input type="radio" name="workExp" id="workExp2" onChange={this.handleChange} value="No"></input> No
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Do You Have A Relevant Professional Qualification And/Or Education?<span>*</span></label>
                                        <div className="checkbox-field">
                                            <label>
                                            <input type="radio" name="releventQual" id="releventQual1" onChange={this.handleChange} value="Yes"></input> Yes
                                            </label>
                                            <label>
                                            <input type="radio" name="releventQual" id="releventQual2" onChange={this.handleChange} value="No"></input> No
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Do You Understand That There Is A Risk Of Loss When Trading In Leveraged Over-The-Counter Derivative Products And You Could Lose Your Entire Initial Deposit/Margin Payment?<span>*</span></label>
                                        <div className="checkbox-field">
                                            <label>
                                            <input type="radio" name="riskPayment" id="riskPayment1" onChange={this.handleChange} value="Yes, I understand the risk"></input> Yes, I understand the risk
                                            </label>
                                            <label>
                                            <input type="radio" name="riskPayment" id="riskPayment1" onChange={this.handleChange} value="No, I do not know the risk"></input> No, I do not know the risk
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <h2>Required Documents</h2>
                            <div className="form-field">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label>Proof Of Identity -Passport (Page 1 And 2) <span>*</span></label>
                                        <div className="upload-field">
                                        <input type="file" id="identityPassport" required name="identityPassport" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Proof Of Residency - Bill, Bank Statement Or Civil ID<span>*</span></label>
                                        <div className="upload-field">
                                        <input type="file" id="proofResidency" required name="proofResidency" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Company License (In Case Of Corporate Account)</label>
                                        <div className="upload-field">
                                        <input type="file" id="companyLicense" name="companyLicense" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6">
                                        <label>Do You Need Sword MasterCard ? (DHL Maximum Shipping Fees 100$ )<span>*</span></label>
                                        <select name="swordMaster" id="swordMaster" onChange={this.handleChange} >
                                        <option value="Select option">Select option</option>
                                            <option value="No">No</option>
                                            <option value="Yes">Yes</option>
                                        </select>
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

export class LowAccount extends Component {
    state = {
        about: [],
        isLoader: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('https://www.sword-capital.com/wp-json/wp/v2/pages')
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
            agreeCheck: "",
            firstName: "",
            lastName: "",
            yourEmail: "",
            bDay: "",
            countryName: "",
            cityName: "",
            cityAddress: "",
            postalCode: "",
            yourTele: "",
            employStatus: "",
            passportNum: "",
            tradingChoose: "",
            agentReferrat: "",
            investAmount: "",
            totalIncome: "",
            totalNet: "",
            educationLevel: "",
            tradeShare: "",
            workExp: "",
            releventQual: "",
            riskPayment: "",
            identityPassport: "",
            proofResidency: "",
            companyLicense: "",
            swordMaster: "",
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
        if(id === 481) {
            formData = {
                'checkbox-118': this.state.agreeCheck,
                'ci_firstname': this.state.firstName,
                'ci_lastname': this.state.lastName,
                'ci_email': this.state.yourEmail,
                'ci_Bday': this.state.bDay,
                'ci_country': this.state.countryName,
                'ci_city': this.state.cityName,
                'ci_address': this.state.cityAddress,
                'ci_postalcode': this.state.postalCode,
                'ci_telephone': this.state.yourTele,
                'ci_company': this.state.employStatus,
                'ci_fax': this.state.passportNum,
                'so_platform': this.state.tradingChoose,
                'ci_state': this.state.agentReferrat,
                'ci_InvAmount': this.state.investAmount,
                'ci_income': this.state.totalIncome,
                'ci_NetWorth': this.state.totalNet,
                'ci_Education': this.state.educationLevel,
                'namber_01': this.state.tradeShare,
                'ra_WorkExperince': this.state.workExp,
                'ra_ProQualification': this.state.releventQual,
                'ra_risk': this.state.riskPayment,
                //'f_ppt': this.state.identityPassport,
                //'f_residency': this.state.proofResidency,
                //'f_license': this.state.companyLicense,
                'f_card': this.state.swordMaster,
                
            }
        }
        const form = new FormData();
        for (const field in formData) {
            form.append(field, formData[field]);
        }

         // preparing files
         var files_f_ppt = document.getElementById("identityPassport").files;
         var files_f_residency = document.getElementById("proofResidency").files;
         var files_f_license = document.getElementById("companyLicense").files;
 
         // residency
         if (files_f_ppt.length > 0) {
         form.append("f_ppt", files_f_ppt[0]);
         }
 
         // f_license
         if (files_f_residency.length > 0) {
         form.append("f_residency", files_f_residency[0]);
         }
 
         // residency
         if (files_f_license.length > 0) {
         form.append("f_license", files_f_license[0]);
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

        const { isLoader } = this.state;

        if (isLoader) {

            let ShowError = (props) => {
                if(props.message.length > 0) {
                    if(props.successMsg === true) return <div className="alert alert-success"> {props.message} </div>;
                    else return <div className="alert alert-danger"> {props.message} </div>;
                }
                return '';
            }
    
            let hasError = '';
            if(this.state.errorMessage.length > 0) {
                hasError = <ShowError message={this.state.errorMessage} successMsg={this.state.error}/>;
            }
    
            let MessageBtn = (props) => {
                if(props.loading === false) return <input className="blue-btn" type="submit" value="Submit" name="send_message_btn" disabled={props.loading}/>;
                return <input className="blue-btn" type="button" value="Loading..." name="send_message_btn" disabled={props.loading}/>
            }
    
            let send_message_btn = <MessageBtn loading={this.state.isLoading}/>;
            document.title = `Sword Capital | Low Spread Account`;
        return (
            <>
                <InnerBanner title="Low Spread Account" />
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                            <h2>Start from 0.8 Pip</h2>
                            <h3>Online Open Account Form</h3>
                            <p>The Customer represents that the information contained in the Account Application is true and he have the experience in the markets trading and he will not use all his wealth in Forex investment.</p>
                            <p><strong>Note: Don’t fund your account before you get the account opening approval from Sword Capital.</strong></p>
                            <ul className="inner-list">
                            <li>Low Spread Account benefits:</li>
                            <li>Spread start from 0.8 pip on usd/jpy zero commission MT4 trader&nbsp;</li>
                            <li>Spread start from 0.5 pip on major&nbsp;currencies 10$&nbsp;commission TWS trader&nbsp;</li>
                            <li>Fast market execution &nbsp;</li>
                            <li>Allowed for major and crosses&nbsp;&nbsp;currencies&nbsp;</li>
                            <li>The best brokerage spread&nbsp;</li>
                            <li>Minimum account requirements 500,000$</li>
                            </ul>
                            <p>I read the client <a href="https://www.sword-capital.com/images/stock/termsSIC.pdf" target="_blank" rel="noopener noreferrer">agreement</a> and i know the market risk</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                            <form onSubmit={this.handleSubmit(481)} id="send-message">
                            <h2>Personal Information (Company's Owner)</h2>
                            <div className="form-field">
                                <div className="row">
                                    <div className="col-lg-12 agree-bk">
                                        <label><input type="checkbox" required name="agreeCheck" id="agreeCheck" onChange={this.handleChange} value="I Agree"></input>I Agree</label>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>First Name<span>*</span></label>
                                        <input type="text" required name="firstName" id="firstName" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Last Name<span>*</span></label>
                                        <input type="text" required name="lastName" id="lastName" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Email<span>*</span></label>
                                        <input type="text" required name="yourEmail" id="yourEmail" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Date Of Birth<span>*</span></label>
                                        <input type="date" required name="bDay" id="bDay" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Resident Country<span>*</span></label>
                                        <select required name="countryName" id="countryName" onChange={this.handleChange}>
                                        <option value="Select country">Select country</option>
                                            <option value="Kuwait">Kuwait</option><option value="United States">United States</option><option value="Canada">Canada</option><option value="Mexico">Mexico</option><option value="United Kingdom">United Kingdom</option><option value="-----" disabled>-----</option><option value="Afghanistan">Afghanistan</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas">Bahamas</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bonaire">Bonaire</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Bouvet Island (Bouvetoya)">Bouvet Island (Bouvetoya)</option><option value="Brazil">Brazil</option><option value="British Indian Ocean Territory (Chagos Archipelago)">British Indian Ocean Territory (Chagos Archipelago)</option><option value="British Virgin Islands">British Virgin Islands</option><option value="Brunei Darussalam">Brunei Darussalam</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Cape Verde">Cape Verde</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Congo">Congo</option><option value="Congo">Congo</option><option value="Cook Islands">Cook Islands</option><option value="Costa Rica">Costa Rica</option><option value="Cote d'Ivoire">Cote d'Ivoire</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Curaçao">Curaçao</option><option value="Cyprus">Cyprus</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option><option value="Faroe Islands">Faroe Islands</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern Territories">French Southern Territories</option><option value="Gabon">Gabon</option><option value="Gambia">Gambia</option><option value="Georgia">Georgia</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guernsey">Guernsey</option><option value="Guinea">Guinea</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option><option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Isle of Man">Isle of Man</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jersey">Jersey</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Korea">Korea</option><option value="Korea">Korea</option><option value="Kuwait">Kuwait</option><option value="Kyrgyz Republic">Kyrgyz Republic</option><option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macao">Macao</option><option value="Macedonia">Macedonia</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Micronesia">Micronesia</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="Netherlands Antilles">Netherlands Antilles</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestinian Territory">Palestinian Territory</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn Islands">Pitcairn Islands</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Reunion">Reunion</option><option value="Romania">Romania</option><option value="Russian Federation">Russian Federation</option><option value="Rwanda">Rwanda</option><option value="Saint Barthelemy">Saint Barthelemy</option><option value="Saint Helena">Saint Helena</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Martin">Saint Martin</option><option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Sint Maarten (Netherlands)">Sint Maarten (Netherlands)</option><option value="Slovakia (Slovak Republic)">Slovakia (Slovak Republic)</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Georgia &amp; S. Sandwich Islands">South Georgia &amp; S. Sandwich Islands</option><option value="Spain">Spain</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard &amp; Jan Mayen Islands">Svalbard &amp; Jan Mayen Islands</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syrian Arab Republic">Syrian Arab Republic</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="Timor-Leste">Timor-Leste</option><option value="Togo">Togo</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks and Caicos Islands">Turks and Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="U.S. Virgin Islands">U.S. Virgin Islands</option><option value="U.S. Minor Outlying Islands">U.S. Minor Outlying Islands</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Wallis and Futuna">Wallis and Futuna</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>City<span>*</span></label>
                                        <input type="text" required name="cityName" id="cityName" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Street Address<span>*</span></label>
                                        <input type="text" required name="cityAddress" id="cityAddress" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Postal Code<span>*</span></label>
                                        <input type="text" required name="postalCode" id="postalCode" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Telephone<span>*</span></label>
                                        <input type="text" required name="yourTele" id="yourTele" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Employment Status<span>*</span></label>
                                        <select required name="employStatus" id="employStatus" onChange={this.handleChange}>
                                        <option value="Select status">Select status</option>
                                            <option value="Employed">Employed</option>
                                            <option value="Self-Employed">Self-Employed</option>
                                            <option value="Student">Student</option>
                                            <option value="Retired">Retired</option>
                                            <option value="Unemployed">Unemployed</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Passport ID<span>*</span></label>
                                        <input type="text" required name="passportNum" id="passportNum" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Which Trading Platform Do You Want To Use?<span>*</span></label>
                                        <div className="checkbox-field">
                                            <label>
                                            <input type="radio" name="tradingChoose" id="tradingChoose1" onChange={this.handleChange} value="MetaTrader (MT4)"></input> MetaTrader (MT4)
                                            </label>
                                            <label>
                                            <input type="radio" name="tradingChoose" id="tradingChoose2" onChange={this.handleChange} value="MT5 (Minimum open account 10,000$)"></input>MT5 (Minimum open account 10,000$)
                                            </label>
                                            <label>
                                            <input type="radio" name="tradingChoose" id="tradingChoose3" onChange={this.handleChange} value="Sword TWS"></input> Sword TWS
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Your Agent Referral: (Optional) Your Referral Will Get 5$ Per 1 Lot.<span>*</span></label>
                                        <input type="text" name="agentReferrat" id="agentReferrat" onChange={this.handleChange}></input>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <h2>Investment Information</h2>
                            <div className="form-field">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label>Investment Amount (USD)<span>*</span></label>
                                        <select required name="investAmount" id="investAmount" onChange={this.handleChange}>
                                        <option value="Select option">Select option</option>
                                            <option value="25,000$-49,999$">25,000$-49,999$</option>
                                            <option value="50,000$-99,999$">50,000$-99,999$</option>
                                            <option value="100,000$-499,999$">100,000$-499,999$</option>
                                            <option value="500,000$-Unlimited">500,000$-Unlimited</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Your Total Income Per Month(Estimation)<span>*</span></label>
                                        <select required name="totalIncome" id="totalIncome" onChange={this.handleChange}>
                                        <option value="Select option">Select option</option>
                                            <option value="0$-999$">0$-999$</option>
                                            <option value="1000$-4,999$">1000$-4,999$</option>
                                            <option value="5,000$-9,999$">5,000$-9,999$</option>
                                            <option value="10,000$-Unlimited">10,000$-Unlimited</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Your Expectations For The Total Net Worth Per A Year<span>*</span></label>
                                        <select required name="totalNet" id="totalNet" onChange={this.handleChange}>
                                        <option value="Select option">Select option</option>
                                            <option value="Over than 500,000$">Over than 500,000$</option>
                                            <option value="500,000$-100,000$">500,000$-100,000$</option>
                                            <option value="100,000$-10,000$">100,000$-10,000$</option>
                                            <option value="Less then 10,000$">Less then 10,000$</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <h2>Education and Experience</h2>
                            <div className="form-field">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label>Level Of Education<span>*</span></label>
                                        <select required name="educationLevel" id="educationLevel" onChange={this.handleChange}>
                                        <option value="Select option">Select option</option>
                                            <option value="Secondry">Secondry</option>
                                            <option value="High School">High School</option>
                                            <option value="Diploma Degree">Diploma Degree</option>
                                            <option value="Bachelor's Degree">Bachelor's Degree</option>
                                            <option value="Master's Degree">Master's Degree</option>
                                            <option value="Doctora">Doctora</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>How Many Times Have You Personally Traded Shares And/Or Bonds Over The Past Five Years?<span>*</span></label>
                                        <input type="number" required name="tradeShare" id="tradeShare" onChange={this.handleChange} placeholder="10"></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Do You Have Work Experience In A Financial Institution?<span>*</span></label>
                                        <div className="checkbox-field">
                                            <label>
                                            <input type="radio" name="workExp" id="workExp1" onChange={this.handleChange} value="Yes"></input> Yes
                                            </label>
                                            <label>
                                            <input type="radio" name="workExp" id="workExp2" onChange={this.handleChange} value="No"></input> No
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Do You Have A Relevant Professional Qualification And/Or Education?<span>*</span></label>
                                        <div className="checkbox-field">
                                            <label>
                                            <input type="radio" name="releventQual" id="releventQual1" onChange={this.handleChange} value="Yes"></input> Yes
                                            </label>
                                            <label>
                                            <input type="radio" name="releventQual" id="releventQual2" onChange={this.handleChange} value="No"></input> No
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Do You Understand That There Is A Risk Of Loss When Trading In Leveraged Over-The-Counter Derivative Products And You Could Lose Your Entire Initial Deposit/Margin Payment?<span>*</span></label>
                                        <div className="checkbox-field">
                                            <label>
                                            <input type="radio" name="riskPayment" id="riskPayment1" onChange={this.handleChange} value="Yes, I understand the risk"></input> Yes, I understand the risk
                                            </label>
                                            <label>
                                            <input type="radio" name="riskPayment" id="riskPayment1" onChange={this.handleChange} value="No, I do not know the risk"></input> No, I do not know the risk
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <h2>Required Documents</h2>
                            <div className="form-field">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label>Proof Of Identity -Passport (Page 1 And 2) <span>*</span></label>
                                        <div className="upload-field">
                                        <input type="file" id="identityPassport" required name="identityPassport" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Proof Of Residency - Bill, Bank Statement Or Civil ID<span>*</span></label>
                                        <div className="upload-field">
                                        <input type="file" id="proofResidency" required name="proofResidency" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Company License (In Case Of Corporate Account)</label>
                                        <div className="upload-field">
                                        <input type="file" id="companyLicense" name="companyLicense" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6">
                                        <label>Do You Need Sword MasterCard ? (DHL Maximum Shipping Fees 100$ )<span>*</span></label>
                                        <select name="swordMaster" id="swordMaster" onChange={this.handleChange} >
                                        <option value="Select option">Select option</option>
                                            <option value="No">No</option>
                                            <option value="Yes">Yes</option>
                                        </select>
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

export class PremAccount extends Component {
    state = {
        details: [],
        isLoader: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('https://www.sword-capital.com/wp-json/wp/v2/pages')
            .then(res => this.setState({
                details: res.data,
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
            agreeCheck: "",
            firstName: "",
            lastName: "",
            yourEmail: "",
            bDay: "",
            countryName: "",
            cityName: "",
            cityAddress: "",
            postalCode: "",
            yourTele: "",
            employStatus: "",
            passportNum: "",
            tradingChoose: "",
            agentReferrat: "",
            investAmount: "",
            totalIncome: "",
            totalNet: "",
            educationLevel: "",
            tradeShare: "",
            workExp: "",
            releventQual: "",
            riskPayment: "",
            identityPassport: "",
            proofResidency: "",
            swordMaster: "",
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
        if(id === 489) {
            formData = {
                'checkbox-118': this.state.agreeCheck,
                'ci_firstname': this.state.firstName,
                'ci_lastname': this.state.lastName,
                'ci_email': this.state.yourEmail,
                'ci_Bday': this.state.bDay,
                'ci_country': this.state.countryName,
                'ci_city': this.state.cityName,
                'ci_address': this.state.cityAddress,
                'ci_postalcode': this.state.postalCode,
                'ci_telephone': this.state.yourTele,
                'ci_company': this.state.employStatus,
                'ci_fax': this.state.passportNum,
                'so_platform': this.state.tradingChoose,
                'ci_state': this.state.agentReferrat,
                'ci_InvAmount': this.state.investAmount,
                'ci_income': this.state.totalIncome,
                'ci_NetWorth': this.state.totalNet,
                'ci_Education': this.state.educationLevel,
                'namber_01': this.state.tradeShare,
                'ra_WorkExperince': this.state.workExp,
                'ra_ProQualification': this.state.releventQual,
                'ra_risk': this.state.riskPayment,
                //'f_ppt': this.state.identityPassport,
                //'f_residency': this.state.proofResidency,
                //'f_license': this.state.companyLicense,
                'f_card': this.state.swordMaster,
                
            }
        }
        const form = new FormData();
        for (const field in formData) {
            form.append(field, formData[field]);
        }

         // preparing files
         var files_f_ppt = document.getElementById("identityPassport").files;
         var files_f_residency = document.getElementById("proofResidency").files;
 
         // residency
         if (files_f_ppt.length > 0) {
         form.append("f_ppt", files_f_ppt[0]);
         }
 
         // f_license
         if (files_f_residency.length > 0) {
         form.append("f_residency", files_f_residency[0]);
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

        const { isLoader } = this.state;

        if (isLoader) {

            let ShowError = (props) => {
                if(props.message.length > 0) {
                    if(props.successMsg === true) return <div className="alert alert-success"> {props.message} </div>;
                    else return <div className="alert alert-danger"> {props.message} </div>;
                }
                return '';
            }
    
            let hasError = '';
            if(this.state.errorMessage.length > 0) {
                hasError = <ShowError message={this.state.errorMessage} successMsg={this.state.error}/>;
            }
    
            let MessageBtn = (props) => {
                if(props.loading === false) return <input className="blue-btn" type="submit" value="Submit" name="send_message_btn" disabled={props.loading}/>;
                return <input className="blue-btn" type="button" value="Loading..." name="send_message_btn" disabled={props.loading}/>
            }
    
            let send_message_btn = <MessageBtn loading={this.state.isLoading}/>;
            document.title = `Sword Capital | Premium Account`;
        return (
            <>
                <InnerBanner title="Premium Account" />
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                            <h2>Online Open Account Form</h2>
                            <p>The Customer represents that the information contained in the Account Application is true and he have the experience in the markets trading and he will not use all his wealth in Forex investment.</p>
                            <p><strong>Note: Don’t fund your account before you get the account opening approval from Sword Capital.</strong></p>
                            <p>Minimum Account: 100,000$</p>
                            <h3>Premium Accounts benefit:</h3>
                            <ul className="inner-list">
                                <li>Ipad2 gift or dell laptop</li>
                                <li>Discount 50% on all sword markets training</li>
                                <li>0 commission – 1-2 pip spread</li>
                                <li>Free MasterCard &amp; Free <a href="my-prepaid-card/worldwide-airports-lounge">world airport lounge</a> by sword <a href="my-prepaid-card">card</a></li>
                            </ul>
                            <p>I read the client <a href="https://www.sword-capital.com/images/stock/termsSIC.pdf" target="_blank" rel="noopener noreferrer">agreement</a> and i know the market risk</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                            <form onSubmit={this.handleSubmit(489)} id="send-message">
                            <h2>Personal Information (Company's Owner)</h2>
                            <div className="form-field">
                                <div className="row">
                                    <div className="col-lg-12 agree-bk">
                                        <label><input type="checkbox" required name="agreeCheck" id="agreeCheck" onChange={this.handleChange} value="I Agree"></input>I Agree (For only GCC clients, Please Sign the contract and send the hard copy to Sword branch)</label>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>First Name<span>*</span></label>
                                        <input type="text" required name="firstName" id="firstName" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Last Name<span>*</span></label>
                                        <input type="text" required name="lastName" id="lastName" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Email<span>*</span></label>
                                        <input type="text" required name="yourEmail" id="yourEmail" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Date Of Birth<span>*</span></label>
                                        <input type="date" required name="bDay" id="bDay" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Resident Country<span>*</span></label>
                                        <select required name="countryName" id="countryName" onChange={this.handleChange}>
                                        <option value="Select country">Select country</option>
                                            <option value="Kuwait">Kuwait</option><option value="United States">United States</option><option value="Canada">Canada</option><option value="Mexico">Mexico</option><option value="United Kingdom">United Kingdom</option><option value="-----" disabled>-----</option><option value="Afghanistan">Afghanistan</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas">Bahamas</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bonaire">Bonaire</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Bouvet Island (Bouvetoya)">Bouvet Island (Bouvetoya)</option><option value="Brazil">Brazil</option><option value="British Indian Ocean Territory (Chagos Archipelago)">British Indian Ocean Territory (Chagos Archipelago)</option><option value="British Virgin Islands">British Virgin Islands</option><option value="Brunei Darussalam">Brunei Darussalam</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Cape Verde">Cape Verde</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Congo">Congo</option><option value="Congo">Congo</option><option value="Cook Islands">Cook Islands</option><option value="Costa Rica">Costa Rica</option><option value="Cote d'Ivoire">Cote d'Ivoire</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Curaçao">Curaçao</option><option value="Cyprus">Cyprus</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option><option value="Faroe Islands">Faroe Islands</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern Territories">French Southern Territories</option><option value="Gabon">Gabon</option><option value="Gambia">Gambia</option><option value="Georgia">Georgia</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guernsey">Guernsey</option><option value="Guinea">Guinea</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option><option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Isle of Man">Isle of Man</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jersey">Jersey</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Korea">Korea</option><option value="Korea">Korea</option><option value="Kuwait">Kuwait</option><option value="Kyrgyz Republic">Kyrgyz Republic</option><option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macao">Macao</option><option value="Macedonia">Macedonia</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Micronesia">Micronesia</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="Netherlands Antilles">Netherlands Antilles</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestinian Territory">Palestinian Territory</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn Islands">Pitcairn Islands</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Reunion">Reunion</option><option value="Romania">Romania</option><option value="Russian Federation">Russian Federation</option><option value="Rwanda">Rwanda</option><option value="Saint Barthelemy">Saint Barthelemy</option><option value="Saint Helena">Saint Helena</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Martin">Saint Martin</option><option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Sint Maarten (Netherlands)">Sint Maarten (Netherlands)</option><option value="Slovakia (Slovak Republic)">Slovakia (Slovak Republic)</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Georgia &amp; S. Sandwich Islands">South Georgia &amp; S. Sandwich Islands</option><option value="Spain">Spain</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard &amp; Jan Mayen Islands">Svalbard &amp; Jan Mayen Islands</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syrian Arab Republic">Syrian Arab Republic</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="Timor-Leste">Timor-Leste</option><option value="Togo">Togo</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks and Caicos Islands">Turks and Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="U.S. Virgin Islands">U.S. Virgin Islands</option><option value="U.S. Minor Outlying Islands">U.S. Minor Outlying Islands</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Wallis and Futuna">Wallis and Futuna</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>City<span>*</span></label>
                                        <input type="text" required name="cityName" id="cityName" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Street Address<span>*</span></label>
                                        <input type="text" required name="cityAddress" id="cityAddress" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Postal Code<span>*</span></label>
                                        <input type="text" required name="postalCode" id="postalCode" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Telephone<span>*</span></label>
                                        <input type="text" required name="yourTele" id="yourTele" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Employment Status<span>*</span></label>
                                        <select required name="employStatus" id="employStatus" onChange={this.handleChange}>
                                        <option value="Select status">Select status</option>
                                            <option value="Employed">Employed</option>
                                            <option value="Self-Employed">Self-Employed</option>
                                            <option value="Student">Student</option>
                                            <option value="Retired">Retired</option>
                                            <option value="Unemployed">Unemployed</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Passport ID<span>*</span></label>
                                        <input type="text" required name="passportNum" id="passportNum" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Which Trading Platform Do You Want To Use?<span>*</span></label>
                                        <div className="checkbox-field">
                                            <label>
                                            <input type="radio" name="tradingChoose" id="tradingChoose1" onChange={this.handleChange} value="MetaTrader (MT4)"></input> MetaTrader (MT4)
                                            </label>
                                            <label>
                                            <input type="radio" name="tradingChoose" id="tradingChoose2" onChange={this.handleChange} value="MT5 (Minimum open account 10,000$)"></input>MT5 (Minimum open account 10,000$)
                                            </label>
                                            <label>
                                            <input type="radio" name="tradingChoose" id="tradingChoose3" onChange={this.handleChange} value="Sword TWS"></input> Sword TWS
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Your Agent Referral: (Optional) Your Referral Will Get 5$ Per 1 Lot.<span>*</span></label>
                                        <input type="text" name="agentReferrat" id="agentReferrat" onChange={this.handleChange}></input>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <h2>Investment Information</h2>
                            <div className="form-field">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label>Investment Amount (USD)<span>*</span></label>
                                        <select required name="investAmount" id="investAmount" onChange={this.handleChange}>
                                        <option value="Select option">Select option</option>
                                        <option value="100,000$-300,000$">100,000$-300,000$</option>
                                        <option value="300,001$-500,000$">300,001$-500,000$</option>
                                        <option value="500,001$-1,000,000$">500,001$-1,000,000$</option>
                                        <option value="1,000,000$-Unlimited">1,000,000$-Unlimited</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Your Total Income Per Month(Estimation)<span>*</span></label>
                                        <select required name="totalIncome" id="totalIncome" onChange={this.handleChange}>
                                        <option value="Select option">Select option</option>
                                        <option value="0$-999$">0$-999$</option>
                                            <option value="1000$-4,999$">1000$-4,999$</option>
                                            <option value="5,000$-9,999$">5,000$-9,999$</option>
                                            <option value="10,000$-Unlimited">10,000$-Unlimited</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Your Expectations For The Total Net Worth Per A Year<span>*</span></label>
                                        <select required name="totalNet" id="totalNet" onChange={this.handleChange}>
                                        <option value="Select option">Select option</option>
                                        <option value="Over than 500,000$">Over than 500,000$</option>
                                            <option value="500,000$-100,000$">500,000$-100,000$</option>
                                            <option value="100,000$-10,000$">100,000$-10,000$</option>
                                            <option value="Less then 10,000$">Less then 10,000$</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <h2>Education and Experience</h2>
                            <div className="form-field">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label>Level Of Education<span>*</span></label>
                                        <select required name="educationLevel" id="educationLevel" onChange={this.handleChange}>
                                        <option value="Select option">Select option</option>
                                            <option value="Secondry">Secondry</option>
                                            <option value="High School">High School</option>
                                            <option value="Diploma Degree">Diploma Degree</option>
                                            <option value="Bachelor's Degree">Bachelor's Degree</option>
                                            <option value="Master's Degree">Master's Degree</option>
                                            <option value="Doctora">Doctora</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>How Many Times Have You Personally Traded Shares And/Or Bonds Over The Past Five Years?<span>*</span></label>
                                        <input type="number" required name="tradeShare" id="tradeShare" onChange={this.handleChange} placeholder="10"></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Do You Have Work Experience In A Financial Institution?<span>*</span></label>
                                        <div className="checkbox-field">
                                            <label>
                                            <input type="radio" name="workExp" id="workExp1" onChange={this.handleChange} value="Yes"></input> Yes
                                            </label>
                                            <label>
                                            <input type="radio" name="workExp" id="workExp2" onChange={this.handleChange} value="No"></input> No
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Do You Have A Relevant Professional Qualification And/Or Education?<span>*</span></label>
                                        <div className="checkbox-field">
                                            <label>
                                            <input type="radio" name="releventQual" id="releventQual1" onChange={this.handleChange} value="Yes"></input> Yes
                                            </label>
                                            <label>
                                            <input type="radio" name="releventQual" id="releventQual2" onChange={this.handleChange} value="No"></input> No
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Do You Understand That There Is A Risk Of Loss When Trading In Leveraged Over-The-Counter Derivative Products And You Could Lose Your Entire Initial Deposit/Margin Payment?<span>*</span></label>
                                        <div className="checkbox-field">
                                            <label>
                                            <input type="radio" name="riskPayment" id="riskPayment1" onChange={this.handleChange} value="Yes, I understand the risk"></input> Yes, I understand the risk
                                            </label>
                                            <label>
                                            <input type="radio" name="riskPayment" id="riskPayment1" onChange={this.handleChange} value="No, I do not know the risk"></input> No, I do not know the risk
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <h2>Required Documents</h2>
                            <div className="form-field">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label>Proof Of Identity -Passport (Page 1 And 2) <span>*</span></label>
                                        <div className="upload-field">
                                        <input type="file" id="identityPassport" required name="identityPassport" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Proof Of Residency - Bill, Bank Statement Or Civil ID<span>*</span></label>
                                        <div className="upload-field">
                                        <input type="file" id="proofResidency" required name="proofResidency" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6">
                                        <label>Do You Need Sword MasterCard ? (DHL Maximum Shipping Fees 100$ )<span>*</span></label>
                                        <select name="swordMaster" id="swordMaster" onChange={this.handleChange} >
                                        <option value="Select option">Select option</option>
                                            <option value="No">No</option>
                                            <option value="Yes">Yes</option>
                                        </select>
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

export class VipAccount extends Component {
    state = {
        details: [],
        isLoader: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('https://www.sword-capital.com/wp-json/wp/v2/pages')
            .then(res => this.setState({
                details: res.data,
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
            agreeCheck: "",
            firstName: "",
            lastName: "",
            yourEmail: "",
            bDay: "",
            countryName: "",
            cityName: "",
            cityAddress: "",
            postalCode: "",
            yourTele: "",
            employStatus: "",
            passportNum: "",
            tradingChoose: "",
            agentReferrat: "",
            investAmount: "",
            totalIncome: "",
            totalNet: "",
            educationLevel: "",
            tradeShare: "",
            workExp: "",
            releventQual: "",
            riskPayment: "",
            identityPassport: "",
            proofResidency: "",
            swordMaster: "",
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
        if(id === 491) {
            formData = {
                'checkbox-118': this.state.agreeCheck,
                'ci_firstname': this.state.firstName,
                'ci_lastname': this.state.lastName,
                'ci_email': this.state.yourEmail,
                'ci_Bday': this.state.bDay,
                'ci_country': this.state.countryName,
                'ci_city': this.state.cityName,
                'ci_address': this.state.cityAddress,
                'ci_postalcode': this.state.postalCode,
                'ci_telephone': this.state.yourTele,
                'ci_company': this.state.employStatus,
                'ci_fax': this.state.passportNum,
                'so_platform': this.state.tradingChoose,
                'ci_state': this.state.agentReferrat,
                'ci_InvAmount': this.state.investAmount,
                'ci_income': this.state.totalIncome,
                'ci_NetWorth': this.state.totalNet,
                'ci_Education': this.state.educationLevel,
                'namber_01': this.state.tradeShare,
                'ra_WorkExperince': this.state.workExp,
                'ra_ProQualification': this.state.releventQual,
                'ra_risk': this.state.riskPayment,
                //'f_ppt': this.state.identityPassport,
                //'f_residency': this.state.proofResidency,
                //'f_license': this.state.companyLicense,
                'f_card': this.state.swordMaster,
                
            }
        }
        const form = new FormData();
        for (const field in formData) {
            form.append(field, formData[field]);
        }

         // preparing files
         var files_f_ppt = document.getElementById("identityPassport").files;
         var files_f_residency = document.getElementById("proofResidency").files;
 
         // residency
         if (files_f_ppt.length > 0) {
         form.append("f_ppt", files_f_ppt[0]);
         }
 
         // f_license
         if (files_f_residency.length > 0) {
         form.append("f_residency", files_f_residency[0]);
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

        const { isLoader } = this.state;

        if (isLoader) {

            let ShowError = (props) => {
                if(props.message.length > 0) {
                    if(props.successMsg === true) return <div className="alert alert-success"> {props.message} </div>;
                    else return <div className="alert alert-danger"> {props.message} </div>;
                }
                return '';
            }
    
            let hasError = '';
            if(this.state.errorMessage.length > 0) {
                hasError = <ShowError message={this.state.errorMessage} successMsg={this.state.error}/>;
            }
    
            let MessageBtn = (props) => {
                if(props.loading === false) return <input className="blue-btn" type="submit" value="Submit" name="send_message_btn" disabled={props.loading}/>;
                return <input className="blue-btn" type="button" value="Loading..." name="send_message_btn" disabled={props.loading}/>
            }
    
            let send_message_btn = <MessageBtn loading={this.state.isLoading}/>;
            document.title = `Sword Capital | VIP Account`;
        return (
            <>
                <InnerBanner title="VIP Account" />
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                            <h2>Online Open Account Form</h2>
                            <p>The Customer represents that the information contained in the Account Application is true and he have the experience in the markets trading and he will not use all his wealth in Forex investment.</p>
                            <p><strong>Note: Don’t fund your account before you get the account opening approval from Sword Capital.</strong></p>
                            <p>Minimum Account: 250,000$</p>
                            <h3>VIP Accounts benefit:</h3>
                            <ul className="inner-list">
                                <li>Free sword Card</li>
                                <li>Ipad2 gift or dell laptop</li>
                                <li>Get 2 free tickets to Europe every year (economic class on emirates airways)</li>
                                <li>Personal account manager and business consultant</li>
                                <li>Discount 50% on all sword markets training</li>
                                <li>0 commission – 1-2 pip spread</li>
                                <li>Free daily SMS services, news and signals</li>
                                <li>Free MasterCard &amp; Free <a href="my-prepaid-card/worldwide-airports-lounge">world airport lounge</a> by sword <a href="my-prepaid-card">card</a></li>
                            </ul>
                            <p>I read the client <a href="https://www.sword-capital.com/images/stock/termsSIC.pdf" target="_blank" rel="noopener noreferrer">agreement</a> and i know the market risk</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                            <form onSubmit={this.handleSubmit(491)} id="send-message">
                            <h2>Personal Information (Company's Owner)</h2>
                            <div className="form-field">
                                <div className="row">
                                    <div className="col-lg-12 agree-bk">
                                        <label><input type="checkbox" required name="agreeCheck" id="agreeCheck" onChange={this.handleChange} value="I Agree"></input>I Agree (For only GCC clients, Please Sign the contract and send the hard copy to Sword branch)</label>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>First Name<span>*</span></label>
                                        <input type="text" required name="firstName" id="firstName" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Last Name<span>*</span></label>
                                        <input type="text" required name="lastName" id="lastName" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Email<span>*</span></label>
                                        <input type="text" required name="yourEmail" id="yourEmail" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Date Of Birth<span>*</span></label>
                                        <input type="date" required name="bDay" id="bDay" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Resident Country<span>*</span></label>
                                        <select required name="countryName" id="countryName" onChange={this.handleChange}>
                                        <option value="Select country">Select country</option>
                                            <option value="Kuwait">Kuwait</option><option value="United States">United States</option><option value="Canada">Canada</option><option value="Mexico">Mexico</option><option value="United Kingdom">United Kingdom</option><option value="-----" disabled>-----</option><option value="Afghanistan">Afghanistan</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas">Bahamas</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bonaire">Bonaire</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Bouvet Island (Bouvetoya)">Bouvet Island (Bouvetoya)</option><option value="Brazil">Brazil</option><option value="British Indian Ocean Territory (Chagos Archipelago)">British Indian Ocean Territory (Chagos Archipelago)</option><option value="British Virgin Islands">British Virgin Islands</option><option value="Brunei Darussalam">Brunei Darussalam</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Cape Verde">Cape Verde</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Congo">Congo</option><option value="Congo">Congo</option><option value="Cook Islands">Cook Islands</option><option value="Costa Rica">Costa Rica</option><option value="Cote d'Ivoire">Cote d'Ivoire</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Curaçao">Curaçao</option><option value="Cyprus">Cyprus</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option><option value="Faroe Islands">Faroe Islands</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern Territories">French Southern Territories</option><option value="Gabon">Gabon</option><option value="Gambia">Gambia</option><option value="Georgia">Georgia</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guernsey">Guernsey</option><option value="Guinea">Guinea</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option><option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Isle of Man">Isle of Man</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jersey">Jersey</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Korea">Korea</option><option value="Korea">Korea</option><option value="Kuwait">Kuwait</option><option value="Kyrgyz Republic">Kyrgyz Republic</option><option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macao">Macao</option><option value="Macedonia">Macedonia</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Micronesia">Micronesia</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="Netherlands Antilles">Netherlands Antilles</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestinian Territory">Palestinian Territory</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn Islands">Pitcairn Islands</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Reunion">Reunion</option><option value="Romania">Romania</option><option value="Russian Federation">Russian Federation</option><option value="Rwanda">Rwanda</option><option value="Saint Barthelemy">Saint Barthelemy</option><option value="Saint Helena">Saint Helena</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Martin">Saint Martin</option><option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Sint Maarten (Netherlands)">Sint Maarten (Netherlands)</option><option value="Slovakia (Slovak Republic)">Slovakia (Slovak Republic)</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Georgia &amp; S. Sandwich Islands">South Georgia &amp; S. Sandwich Islands</option><option value="Spain">Spain</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard &amp; Jan Mayen Islands">Svalbard &amp; Jan Mayen Islands</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syrian Arab Republic">Syrian Arab Republic</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="Timor-Leste">Timor-Leste</option><option value="Togo">Togo</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks and Caicos Islands">Turks and Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="U.S. Virgin Islands">U.S. Virgin Islands</option><option value="U.S. Minor Outlying Islands">U.S. Minor Outlying Islands</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Wallis and Futuna">Wallis and Futuna</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>City<span>*</span></label>
                                        <input type="text" required name="cityName" id="cityName" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Street Address<span>*</span></label>
                                        <input type="text" required name="cityAddress" id="cityAddress" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Postal Code<span>*</span></label>
                                        <input type="text" required name="postalCode" id="postalCode" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Telephone<span>*</span></label>
                                        <input type="text" required name="yourTele" id="yourTele" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Employment Status<span>*</span></label>
                                        <select required name="employStatus" id="employStatus" onChange={this.handleChange}>
                                        <option value="Select status">Select status</option>
                                            <option value="Employed">Employed</option>
                                            <option value="Self-Employed">Self-Employed</option>
                                            <option value="Student">Student</option>
                                            <option value="Retired">Retired</option>
                                            <option value="Unemployed">Unemployed</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Passport ID<span>*</span></label>
                                        <input type="text" required name="passportNum" id="passportNum" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Which Trading Platform Do You Want To Use?<span>*</span></label>
                                        <div className="checkbox-field">
                                            <label>
                                            <input type="radio" name="tradingChoose" id="tradingChoose1" onChange={this.handleChange} value="MetaTrader (MT4)"></input> MetaTrader (MT4)
                                            </label>
                                            <label>
                                            <input type="radio" name="tradingChoose" id="tradingChoose2" onChange={this.handleChange} value="MT5 (Minimum open account 10,000$)"></input>MT5 (Minimum open account 10,000$)
                                            </label>
                                            <label>
                                            <input type="radio" name="tradingChoose" id="tradingChoose3" onChange={this.handleChange} value="Sword TWS"></input> Sword TWS
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Your Agent Referral: (Optional) Your Referral Will Get 5$ Per 1 Lot.<span>*</span></label>
                                        <input type="text" name="agentReferrat" id="agentReferrat" onChange={this.handleChange}></input>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <h2>Investment Information</h2>
                            <div className="form-field">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label>Investment Amount (USD)<span>*</span></label>
                                        <select required name="investAmount" id="investAmount" onChange={this.handleChange}>
                                        <option value="Select option">Select option</option>
                                        <option value="100,000$-300,000$">100,000$-300,000$</option>
                                        <option value="300,001$-500,000$">300,001$-500,000$</option>
                                        <option value="500,001$-1,000,000$">500,001$-1,000,000$</option>
                                        <option value="1,000,000$-Unlimited">1,000,000$-Unlimited</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Your Total Income Per Month(Estimation)<span>*</span></label>
                                        <select required name="totalIncome" id="totalIncome" onChange={this.handleChange}>
                                        <option value="Select option">Select option</option>
                                        <option value="0$-999$">0$-999$</option>
                                            <option value="1000$-4,999$">1000$-4,999$</option>
                                            <option value="5,000$-9,999$">5,000$-9,999$</option>
                                            <option value="10,000$-Unlimited">10,000$-Unlimited</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Your Expectations For The Total Net Worth Per A Year<span>*</span></label>
                                        <select required name="totalNet" id="totalNet" onChange={this.handleChange}>
                                        <option value="Select option">Select option</option>
                                        <option value="Over than 500,000$">Over than 500,000$</option>
                                            <option value="500,000$-100,000$">500,000$-100,000$</option>
                                            <option value="100,000$-10,000$">100,000$-10,000$</option>
                                            <option value="Less then 10,000$">Less then 10,000$</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <h2>Education and Experience</h2>
                            <div className="form-field">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label>Level Of Education<span>*</span></label>
                                        <select required name="educationLevel" id="educationLevel" onChange={this.handleChange}>
                                        <option value="Select option">Select option</option>
                                            <option value="Secondry">Secondry</option>
                                            <option value="High School">High School</option>
                                            <option value="Diploma Degree">Diploma Degree</option>
                                            <option value="Bachelor's Degree">Bachelor's Degree</option>
                                            <option value="Master's Degree">Master's Degree</option>
                                            <option value="Doctora">Doctora</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>How Many Times Have You Personally Traded Shares And/Or Bonds Over The Past Five Years?<span>*</span></label>
                                        <input type="number" required name="tradeShare" id="tradeShare" onChange={this.handleChange} placeholder="10"></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Do You Have Work Experience In A Financial Institution?<span>*</span></label>
                                        <div className="checkbox-field">
                                            <label>
                                            <input type="radio" name="workExp" id="workExp1" onChange={this.handleChange} value="Yes"></input> Yes
                                            </label>
                                            <label>
                                            <input type="radio" name="workExp" id="workExp2" onChange={this.handleChange} value="No"></input> No
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Do You Have A Relevant Professional Qualification And/Or Education?<span>*</span></label>
                                        <div className="checkbox-field">
                                            <label>
                                            <input type="radio" name="releventQual" id="releventQual1" onChange={this.handleChange} value="Yes"></input> Yes
                                            </label>
                                            <label>
                                            <input type="radio" name="releventQual" id="releventQual2" onChange={this.handleChange} value="No"></input> No
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Do You Understand That There Is A Risk Of Loss When Trading In Leveraged Over-The-Counter Derivative Products And You Could Lose Your Entire Initial Deposit/Margin Payment?<span>*</span></label>
                                        <div className="checkbox-field">
                                            <label>
                                            <input type="radio" name="riskPayment" id="riskPayment1" onChange={this.handleChange} value="Yes, I understand the risk"></input> Yes, I understand the risk
                                            </label>
                                            <label>
                                            <input type="radio" name="riskPayment" id="riskPayment1" onChange={this.handleChange} value="No, I do not know the risk"></input> No, I do not know the risk
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <h2>Required Documents</h2>
                            <div className="form-field">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label>Proof Of Identity -Passport (Page 1 And 2) <span>*</span></label>
                                        <div className="upload-field">
                                        <input type="file" id="identityPassport" required name="identityPassport" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Proof Of Residency - Bill, Bank Statement Or Civil ID<span>*</span></label>
                                        <div className="upload-field">
                                        <input type="file" id="proofResidency" required name="proofResidency" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6">
                                        <label>Do You Need Sword MasterCard ? (DHL Maximum Shipping Fees 100$ )<span>*</span></label>
                                        <select name="swordMaster" id="swordMaster" onChange={this.handleChange} >
                                        <option value="Select option">Select option</option>
                                            <option value="No">No</option>
                                            <option value="Yes">Yes</option>
                                        </select>
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

export class DemoAccount extends Component {
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
            
            document.title = `Sword Capital | Demo Accounts`;
        return (
            <>
                <InnerBanner title="Demo Accounts" />
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                            <p>Practice account from 10,000$, MT4/5 the best retail trading platform.</p>
                            <p><strong>You Can open demo account from the following platforms</strong></p>
                            <h3>Download MT4 and open demo account:</h3>
                            <div className="row justify-content-center">
                                <div className="col-md-4 col-sm-6">
                                    <div className="partner-box dm-bx">
                                        <h3>Download MT4 for PC</h3>
                                        <p>server name: sword-demo</p>
                                        <a className="theme-btn" href="https://download.mql5.com/cdn/web/sword.investment.capital/mt4/sword4setup.exe" target="_blank" rel="noreferrer">Download</a>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="partner-box dm-bx">
                                        <h3>Download MT4 for Iphone & Ipad</h3>
                                        <p>server name: sword-demo</p>
                                        <a className="theme-btn" href="https://download.mql5.com/cdn/mobile/mt4/ios?server=Sword-Demo,Sword-Live" target="_blank" rel="noreferrer">Download</a>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="partner-box dm-bx">
                                        <h3>Download MT4 for Android</h3>
                                        <p>server name: sword-demo</p>
                                        <a className="theme-btn" href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader4" target="_blank" rel="noreferrer">Download</a>
                                    </div>
                                </div>
                            </div>
                            <h3>Download MT5 and open demo account:</h3>
                            <div className="row justify-content-center">
                                <div className="col-md-4 col-sm-6">
                                    <div className="partner-box dm-bx">
                                        <h3>Download MT5 for PC</h3>
                                        <p>server name: sword-demo</p>
                                        <a className="theme-btn" href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/mt5setup.exe?utm_source=www.metatrader5.com&utm_campaign=download" target="_blank" rel="noreferrer">Download</a>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="partner-box dm-bx">
                                        <h3>Download MT5 for MAC</h3>
                                        <p>server name: sword-demo</p>
                                        <a className="theme-btn" href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.dmg?utm_source=support.metaquotes.net&utm_campaign=download.mt5.macos" target="_blank" rel="noreferrer">Download</a>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="partner-box dm-bx">
                                        <h3>Download MT5 for Iphone & Ipad</h3>
                                        <p>server name: sword-demo</p>
                                        <a className="theme-btn" href="https://itunes.apple.com/us/app/metatrader-5-forex-stocks/id413251709?mt=8" target="_blank" rel="noreferrer">Download</a>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="partner-box dm-bx">
                                        <h3>Download MT5 for Android</h3>
                                        <p>server name: sword-demo</p>
                                        <a className="theme-btn" href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5" target="_blank" rel="noreferrer">Download</a>
                                    </div>
                                </div>
                            </div>
                            <p>If you need help contact us or chat please.</p>
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
