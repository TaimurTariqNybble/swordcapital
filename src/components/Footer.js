import React, { Component } from 'react';
import Logo from './assets/logo.png';
import CallImg from './assets/call-icon.png';
import MailImg from './assets/mail-icon.png';
import LocImg from './assets/location-icon.png';
import SocialImg1 from './assets/f.b-icon.png';
import SocialImg3 from './assets/insta-icon.png';
import SocialImg4 from './assets/link-icon.png';
/** import PayIcon1 from './assets/logo1.png';
import PayIcon2 from './assets/logo2.png';
import PayIcon3 from './assets/logo3.png';
import PayIcon4 from './assets/logo4.png';
import PayIcon5 from './assets/logo5.png';
import PayIcon6 from './assets/logo6.png';**/
import {Link} from "react-router-dom";
import CustomCookieHelper from './Helper';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLang: CustomCookieHelper.HelperGetLang("selectLang")
        };
    }
    render() {
        return (
            <>
                {/*<section class="clients">
                    <div class="container">
                        <div class="row text-center">
                        <div class="col-lg-12">
                            <div class="clients-head">
                                <h2> Loved and trusted by the industry leaders </h2>
                            </div>
                        </div>
                        </div>
                        <div class="row justify-content-center">
                        <div class="col-lg-2 col-md-2 col-sm-4">
                            <div class="client-img">
                                <img src={PayIcon1} alt=""/>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-4">
                            <div class="client-img">
                                <img src={PayIcon2} alt=""/>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-4">
                            <div class="client-img">
                                <img src={PayIcon3} alt=""/>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-4">
                            <div class="client-img">
                                <img src={PayIcon4} alt=""/>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-4">
                            <div class="client-img">
                                <img src={PayIcon5} alt=""/>
                            </div>
                        </div>
                        </div>
                        <div class="row justify-content-center">
                        <div class="col-lg-2 col-md-2 col-sm-4">
                            <div class="client-img">
                                <img src={PayIcon6} alt=""/>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-4">
                            <div class="client-img">
                                <img src={PayIcon1} alt=""/>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-4">
                            <div class="client-img">
                                <img src={PayIcon2} alt=""/>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-4">
                            <div class="client-img">
                                <img src={PayIcon3} alt=""/>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-4">
                            <div class="client-img">
                                <img src={PayIcon4} alt=""/>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>*/}
                {(this.state.selectedLang === 'ar') ? <>
                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-12">
                            <div className="Footer-box">
                                <div className="footer-logo">
                                    <a href="/"> <img src={Logo} alt=""/></a>
                                </div>
                                <div className="footer-box-text">
                                    <p>سورد كابيتال هي علامة تجارية مسجلة ومحفوظة لشركات سورد كابيتال في جميع أنحاء العالم ، وتعمل في مجال الوساطة المالية الدولية. كما تخدم عملائها من الأفراد والمؤسسات المالية في آسيا وإفريقيا وأوروبا وأستراليا وأمريكا الجنوبية.</p>
                                </div>
                                <ul className="footer-box-list">
                                    <li><span><img src={CallImg} alt=""/></span><a className="clr" href="tel:+96522468817">+965-2246-8817 </a></li>
                                    <li><span><img src={CallImg} alt=""/></span><a className="clr" href="tel:+96522468813">+965-22468813</a></li>
                                    <li><span><img src={MailImg} alt=""/></span><a className="clr" href="mailto:contact@sword-capital.com">contact@sword-capital.com</a></li>
                                    <li><span><img src={LocImg} alt=""/></span>Kuwait Sharq Blk7 Tower44 Floor 19-18</li>
                                </ul>
                                <div className="social-icons">
                                    <span className="fb"><a href="https://www.facebook.com/swordcapital" target="_blank" rel="noreferrer"><img src={SocialImg1} alt=""/></a></span>
                                    <span><a href="https://instagram.com/swordcapital" target="_blank" rel="noreferrer"><img src={SocialImg3} alt=""/></a></span>
                                    <span><a href="https://www.linkedin.com/in/sword-capital-91b904a2?trk=hp-identity-name" target="_blank" rel="noreferrer"><img src={SocialImg4} alt=""/></a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-6 col-md-3">
                            <div className="footer-navbar">
                                <h3>الأدوات</h3>
                                <ul className="footer-list">
                                    <li><Link to="/downloads/metatrader5">تسجيل الدخول حساب MT5</Link></li>
                                    <li><Link to="/downloads/metatrader4">تسجيل الدخول حساب MT4</Link></li>
                                    <li><Link to="/market-tools/apps">تطبيقات الموبايل</Link></li>
                                    <li><Link to="/trading-signals">توصيات التداول</Link></li>
                                    <li><Link to="/open-accounts">فتح الحسابات</Link></li>
                                    <li><Link to="/downloads">تنزيل</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-3">
                            <div className="footer-navbar">
                                <h3>الحسابات</h3>
                                <ul className="footer-list">
                                    <li><Link to="/open-accounts/demo-account">فتح حساب تجريبي</Link></li>
                                    <li><Link to="/open-accounts/personal-account/">فتح حساب شخصي</Link></li>
                                    <li><Link to="/open-accounts/bank-institution-account">فتح حساب وسيط</Link></li>
                                    <li><a href="https://www.sword-capital.com/member_dashboard/?error=1" rel="noreferrer">السحب والإيداع</a></li>
                                    <li><Link to="/partners">الشركاء</Link></li>
                                    <li><Link to="/trading-platforms">منصات التداول</Link></li>
                                    <li><Link to="/products-condition">المنتجات والشروط</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-3">
                            <div className="footer-navbar">
                                <h3>المنتجات</h3>
                                <ul className="footer-list">
                                    <li><Link to="/market-tools">أدوات السوق</Link></li>
                                    <li><Link to="/news">أخبار</Link></li>
                                    <li><Link to="/daily-report">التقرير اليومي</Link></li>
                                    <li><Link to="/trading-signals">توصيات التداول</Link></li>
                                    <li><Link to="/workshop">ورش العمل</Link></li>
                                    <li><Link to="/partners/apply-job">وظائف</Link></li>
                                    <li><Link to="/products-condition">المنتجات والشروط</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-3">
                            <div className="footer-navbar">
                                <h3>الأدوات</h3>
                                <ul className="footer-list">
                                    <li><a href="https://sword-capital.com/member_dashboard/">تسجيل الدخول حساب MT4</a></li>
                                    <li><a href="https://www.sword-capital.com/members/?mwlc">تسجيل الدخول حساب MT5</a></li>
                                    <li><Link to="/company">تنظيم الشركة</Link></li>
                                    <li><Link to="/anti-money-laundering-policy">سياسة مكافحة غسل األموال</Link></li>
                                    <li><Link to="/contact-us">إرسال شكوى</Link></li>
                                    <li><Link to="/contact-us">اتصل بنا</Link></li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </footer>
                <footer className="footer-bottom">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-8 col-md-8">
                            <div className="terms-conditions">
                                <ul>
                                    <li><Link to="/conditions-of-use">شروط الاستخدام</Link></li>
                                    |
                                    <li><Link to="/risk-disclosure">الإفصاح عن المخاطر</Link></li>
                                    |
                                    <li><Link to="/products-condition">شروط التداول</Link></li>
                                    |
                                    <li><Link to="/privacy-policy">سياسة الخصوصية</Link></li>
                                    |
                                    <li><Link to="/contact-us">اتصل بنا</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-12 ft-txt text-center">
                            <p>سورد كابيتال هي علامة تجارية مسجلة ومحفوظة عالمياً لشركات سورد كابيتال حول العالم وتعمل في مجال الوساطة المالية العالمية كما تخدم عملاءها من الافراد والشركات في آسيا، افريقيا، أوروبا، استراليا واميركا الجنوبية</p>
                            <p>Sword Capital (Kuwait) is regulated by <a href="https://www.cma.gov.kw/en/" target="_blank" rel="noreferrer">CMA</a> License No AP/20019/0002 (Prime Brokerage)</p>
                            <p>سورد كابيتال تمتلك هذا الموقع الرسمي وتصرح لشركات سورد كابيتال استخدامه وفق صلاحية وترخيص كل شركة من هيئة الرقابة المالية المرخص منها. بالنسبة لمكاتب سورد كابيتال التمثيلية فهي لا تمارس النشاط، انما تتلقي شكاوى العملاء فقط</p>
                            <p>علامة سورد كابيتال محفوظة عالمياً ولا تستخدم الا من قبل شركات سورد كابيتال المعتمدة من قبل سورد كابيتال الكويت واي استخدام غير قانوني يعرض للمساءلة في اي بلد بالعالم</p>
                            <p>سورد كابيتال لا تقدم خدماتها للمقيمين في بعض الدول مثل الولايات المتحدة الأمريكية وإيران وكوبا والسودان وسوريا وكوريا الشمالية.</p>
                            <p>تحذير المخاطر: ينطوي التداول بالبورصات العالمية على مخاطر كبيرة على رأس المال المستثمر. يرجى قراءة وتأكيد فهمك الكامل لمخاطر الإفصاح.</p>
                            <p>جميع حقوق موقع سورد الإلكتروني مملوك للشركة سورد كابيتال كويت ولأي شكوى أو تعامل من خلال أي من مكاتب سورد حول العالم يتم من خلال هذا الموقع فقط</p>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="cop-text">
                                <p>حقوق الطبع والنشر © 2021 سورد كابيتال | كل الحقوق محفوظة</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </footer>
                </> : <>
                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-12">
                            <div className="Footer-box">
                                <div className="footer-logo">
                                    <a href="/"> <img src={Logo} alt=""/></a>
                                </div>
                                <div className="footer-box-text">
                                    <p>Sword Capital is a registered and reserved Trademark for Sword Capital Companies worldwide, working in the field of International Financial Brokerage. It also serves its clients from individuals and financial institutions in Asia, Africa, Europe, Australia, South America.</p>
                                </div>
                                <ul className="footer-box-list">
                                    <li><span><img src={CallImg} alt=""/></span><a className="clr" href="tel:+96522468817">+965-2246-8817 </a></li>
                                    <li><span><img src={CallImg} alt=""/></span><a className="clr" href="tel:+96522468813">+965-22468813</a></li>
                                    <li><span><img src={MailImg} alt=""/></span><a className="clr" href="mailto:contact@sword-capital.com">contact@sword-capital.com</a></li>
                                    <li><span><img src={LocImg} alt=""/></span>Kuwait Sharq Blk7 Tower44 Floor 19-18</li>
                                </ul>
                                <div className="social-icons">
                                    <span className="fb"><a href="https://www.facebook.com/swordcapital" target="_blank" rel="noreferrer"><img src={SocialImg1} alt=""/></a></span>
                                    <span><a href="https://instagram.com/swordcapital" target="_blank" rel="noreferrer"><img src={SocialImg3} alt=""/></a></span>
                                    <span><a href="https://www.linkedin.com/in/sword-capital-91b904a2?trk=hp-identity-name" target="_blank" rel="noreferrer"><img src={SocialImg4} alt=""/></a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-6 col-md-3">
                            <div className="footer-navbar">
                                <h3>Trading</h3>
                                <ul className="footer-list">
                                    <li><Link to="/downloads/metatrader5">MT5 Platform</Link></li>
                                    <li><Link to="/downloads/metatrader4">MT4 Platform</Link></li>
                                    <li><Link to="/market-tools/apps">Sword Mobile App</Link></li>
                                    <li><Link to="/market-tools/apps">Mobile Apps</Link></li>
                                    <li><Link to="/trading-signals">Trading Signals</Link></li>
                                    <li><Link to="/open-accounts">Open Accounts</Link></li>
                                    <li><Link to="/downloads">Downloads</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-3">
                            <div className="footer-navbar">
                                <h3>Accounts</h3>
                                <ul className="footer-list">
                                    <li><Link to="/open-accounts/demo-account">Open Demo Account</Link></li>
                                    <li><Link to="/open-accounts/personal-account/">Open Personal Account</Link></li>
                                    <li><Link to="/open-accounts/bank-institution-account">Open IB Account</Link></li>
                                    <li><a href="https://www.sword-capital.com/member_dashboard/?error=1" rel="noreferrer">Withdrawal & Deposit</a></li>
                                    <li><Link to="/partners">Partners</Link></li>
                                    <li><Link to="/trading-platforms">Trading Platforms</Link></li>
                                    <li><Link to="/products-condition">Products & Condition</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-3">
                            <div className="footer-navbar">
                                <h3>Products</h3>
                                <ul className="footer-list">
                                    <li><Link to="/market-tools">Market Tools</Link></li>
                                    <li><Link to="/news">News</Link></li>
                                    <li><Link to="/daily-report">Daily Report</Link></li>
                                    <li><Link to="/trading-signals">Trading Signals</Link></li>
                                    <li><Link to="/workshop">Workshop</Link></li>
                                    <li><Link to="/partners/apply-job">Careers</Link></li>
                                    <li><Link to="/products-condition">Products & Condition</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-3">
                            <div className="footer-navbar">
                                <h3>Tools</h3>
                                <ul className="footer-list">
                                    <li><a href="https://sword-capital.com/member_dashboard/">Login MT4 Account</a></li>
                                    <li><a href="https://www.sword-capital.com/members/?mwlc">Login MT5 Account</a></li>
                                    <li><Link to="/company">Company Regulations</Link></li>
                                    <li><Link to="/anti-money-laundering-policy">AML Policy</Link></li>
                                    <li><Link to="/contact-us">Submit Complaint</Link></li>
                                    <li><Link to="/contact-us">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </footer>
                <footer className="footer-bottom">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-8 col-md-8">
                            <div className="terms-conditions">
                                <ul>
                                    <li><Link to="/conditions-of-use">Condition of Use </Link></li>
                                    |
                                    <li><Link to="/risk-disclosure">Risk Disclosure</Link></li>
                                    |
                                    <li><Link to="/products-condition">Products Condition</Link></li>
                                    |
                                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                    |
                                    <li><Link to="/contact-us">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-12 ft-txt text-center">
                            <p>Sword Capital is a registered and reserved Trademark for Sword Capital Companies worldwide, working in the field of International Financial Brokerage. It also serves its clients from individuals and financial institutions in Asia, Africa, Europe, Australia, South America.</p>
                            <p>Sword Capital (Kuwait) is regulated by <a href="https://www.cma.gov.kw/en/" target="_blank" rel="noreferrer">CMA</a> License No AP/20019/0002 (Prime Brokerage)</p>
                            <p>This is the official Sword Capital Global (<a href="https://www.sword-capital.com/">www.sword-capital.com</a>) website and authorizes Sword Capital Companies to use it in accordance with the Authority and Licenses of each Company which has been Authorized by Financial Control Authority. As for Sword Capital representative offices, they do not engage the activity but only receive client complaints.</p>
                            <p>Sword Capital provides trading in more than 100 Markets Worldwide, our clients can trade Forex, Options, Stocks, CFDs, Futures, ETFs and Bonds from one terminal TWS® a trademark or service mark of Interactive Brokers LLC.</p>
                            <p>Sword Capital Trademark is reserved worldwide and is only used by Sword Capital companies, which are accredited by Sword Capital Kuwait and any illegal use is held accountable in any country in the world.</p>
                            <p>Sword Capital does not offer its services to residents of certain jurisdictions such as USA, Iran, Cuba, Sudan, Syria, North Korea or any country restricted by <a href="https://www.fatf-gafi.org/" target="_blank" rel="noreferrer">FATF</a></p>
                            <p>Risk Warning: Global Securities Trading involves significant risk to your invested capital. Please read and ensure you fully understand our Risk Disclosure.</p>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="cop-text">
                                <p>Copyright© 2021 SWORD CAPITAL | All Rights Reserved</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </footer>
                </> }
            </>
        )
    }
}
