import React, { Component, useState  } from 'react';
import Logo from './assets/logo.png';
import Mail from './assets/env.png';
import Login from './assets/login.png';
import {Link} from "react-router-dom";
import axios from 'axios';
import CustomCookieHelper from './Helper';


export class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuToggle: true,
            selectedLang: CustomCookieHelper.HelperGetLang("selectLang")
        };
        this.MenuClick = this.MenuClick.bind(this);
        this.ChangeLang = this.ChangeLang.bind(this);
    }
    MenuClick () {
        this.setState(state => ({
            menuToggle: !state.menuToggle
        }));
    }
    ChangeLang (e) {
        this.setState({ selectedLang: e.target.value });
        CustomCookieHelper.HelperSetCookie('selectLang', e.target.value,30);
        // reload the page
        window.location.reload();
    }
    componentDidMount(){
        document.body.classList.add(this.state.selectedLang);
        window.addEventListener('scroll', () => {
           let activeClass = 'MenuFixed';
           if(window.scrollY < 400){
               activeClass = ' ';
           } else {
            activeClass = 'MenuFixed';
           }
           this.setState({ activeClass });
        });
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = false;
        s.innerHTML = "function googleTranslateElementInit() { new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');}";
        this.instance.appendChild(s);
        const sd = document.createElement('script');
        sd.type = 'text/javascript';
        sd.async = true;
        sd.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        this.instance.appendChild(sd);
    }

    render() {

        let MenuClass = 'sidemenu';
        let MenuBtnClass = 'menubtn';
        let MenuBg = 'menubg';
        if (this.state.menuToggle === false) {
            MenuClass += ' active';
            MenuBtnClass += ' active';
            MenuBg += ' active';
        }

        return (
            <>
            {(this.state.selectedLang === 'ar') ? <>
            <div ref={el => (this.instance = el)} />
              <header className={`header ${this.state.activeClass} ${this.state.selectedLang}`}>
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12">
                            <LogoDiv />
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-6 up hidden-md-down">
                            <div className="main-menu">
                            <div className="menu">
                            <ul className="main-nav">
                                        <li><Link to="/partners">شركاء</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/partners">مركز الشركاء</Link></li>
                                                <li><Link to="/partners/mt4-white-label">شركاء منصة MT5</Link></li>
                                                <li><Link to="/partners/ib-account">التعريف بالوسطاء</Link></li>
                                                <li><Link to="/partners/open-your-office">افتح مكتبك</Link></li>
                                                <li><Link to="/partners/franchises-brokerage">العلامة التجارية</Link></li>
                                                <li><Link to="/partners/apply-job">طلبات التوظيف</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/trading-platforms">التداول</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/trading-platforms">منصات التداول</Link></li>
                                                <li><Link to="/market-tools/apps">تطبيقات الهاتف الذكي</Link></li>
                                                <li><a href="http://sword-capital.com/member_dashboard/home">السحب والإيداع</a></li>
                                                <li><Link to="/products-condition">المنتجات والشروط</Link></li>
                                                <li><Link to="/open-accounts">فتح الحسابات</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/workshop">تعليم</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/gcc-seminar">ندوات دول مجلس التعاون الخليجي</Link></li>
                                                <li><Link to="/option-trading-workshop">ورشة تدوال الاختيارات</Link></li>
                                                <li><Link to="/mt5-training">ورشة عملMT5</Link></li>
                                                <li><Link to="/trading-signals">تعلم التوصيات الالكترونية</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/market-tools">أدوات</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/economic-calendar">الرزنامة الإقتصادية</Link></li>
                                                <li><Link to="/news">أخبار</Link></li>
                                                <li><Link to="/daily-report">التقرير اليومي</Link></li>
                                                <li><Link to="/trading-signals">توصيات التداول</Link></li>
                                                <li><Link to="/market-tools">رسومات بيانية</Link></li>
                                                <li><Link to="/market-tools/apps">تطبيقات الهاتف الذكي</Link></li>
                                                <li><Link to="/downloads">تحميل</Link></li>
                                                <li><a href="https://www.mql5.com/en/market" target="_blank" rel="noreferrer">متجر منصة MetaTrader</a></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/company">من نحن</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/company">عن سورد</Link></li>
                                                <li><Link to="/conditions-of-use">اللوائح والتنظيمات</Link></li>
                                                <li><Link to="/products-condition">المنتجات والشروط</Link></li>
                                                <li><Link to="/risk-disclosure">الإفصاح عن المخاطر</Link></li>
                                                <li><Link to="/privacy-policy">سياسة الخصوصية</Link></li>
                                                <li><Link to="/anti-money-laundering-policy">إجراءات مكافحة غسيل الأموال</Link></li>
                                                <li><a href="https://misc.clientam.com/cstools/contract_info/index.php?wlId=SWORDBRK" target="_blank" rel="noreferrer">البحث عن المنتجات</a></li>
                                                <li><Link to="/partners">الشركاء</Link></li>
                                                <li><Link to="/partners/apply-job">وظائف</Link></li>
                                                <li><a href="https://www.sword-capital.com/member_dashboard/" target="_blank" rel="noreferrer">تفاصيل التحويلات المصرفية</a></li>
                                                <li><Link to="/fees-limits">رسوم وحدود بطاقة سورد</Link></li>
                                                <li><Link to="/exchange-listings-usmarkets">قائمة البورصات</Link></li>
                                                <li><Link to="/swords-governance">حوكمة سورد</Link></li>
                                                <li><Link to="/the-board">أعضاء مجلس الإدارة</Link></li>
                                                <li><Link to="/complaints">الشكاوي</Link></li>
                                                <li><Link to="/investors-affairs">شؤون المستثمرين</Link></li>
                                                <li><Link to="/contact-us">اتصل بنا</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-7 col-sm-12">
                            <div className="menu-btn">
                                <a className="mail" href="mailto:info@sword-capital.com"><img src={Mail} alt="mail" /> info@sword-capital.com </a>
                                <LogDivAr />
                                <div class="lng-slct">
                                    <select value={this.state.selectedLang} name="lngSlct" id="lngSlct" onChange={this.ChangeLang}>
                                        <option value="en">en</option>
                                        <option value="ar">ar</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </header>
                <button onClick={this.MenuClick} className={MenuBtnClass}>
                    <span></span>
                </button>
                <div className={MenuBg} onClick={this.MenuClick}></div>
            <div className={MenuClass} >
            <div className="mb-nav" id="ResMenu">
                    <ul>
                        <li>
                            <div className="sn-lnk">
                            <Link to="/partners">شركاء</Link><span id="menu1" data-toggle="collapse" data-target="#menuOne" aria-expanded="true" aria-controls="menuOne" className="collapsed"></span>
                            </div>
                            <ul className="mb-sub-menu collapse" id="menuOne" aria-labelledby="menu1" data-parent="#ResMenu">
                                <li><Link to="/partners" onClick={this.MenuClick}>مركز الشركاء</Link></li>
                                <li><Link to="/partners/mt4-white-label" onClick={this.MenuClick}>شركاء منصة MT5</Link></li>
                                <li><Link to="/partners/ib-account" onClick={this.MenuClick}>التعريف بالوسطاء</Link></li>
                                <li><Link to="/partners/open-your-office" onClick={this.MenuClick}>افتح مكتبك</Link></li>
                                <li><Link to="/partners/franchises-brokerage" onClick={this.MenuClick}>العلامة التجارية</Link></li>
                                <li><Link to="/partners/apply-job" onClick={this.MenuClick}>طلبات التوظيف</Link></li>
                            </ul>
                        </li>
                        <li>
                            <div className="sn-lnk">
                            <Link to="/trading-platforms">التداول</Link><span id="menu2" data-toggle="collapse" data-target="#menuTwo" aria-expanded="false" aria-controls="menuTwo" className="collapsed"></span>
                            </div>
                            <ul className="mb-sub-menu collapse" id="menuTwo" aria-labelledby="menu2" data-parent="#ResMenu">
                                <li><Link to="/trading-platforms" onClick={this.MenuClick}>منصات التداول</Link></li>
                                <li><Link to="/market-tools/apps" onClick={this.MenuClick}>تطبيقات الهاتف الذكي</Link></li>
                                <li><a href="http://sword-capital.com/member_dashboard/home" onClick={this.MenuClick}>السحب والإيداع</a></li>
                                <li><Link to="/products-condition" onClick={this.MenuClick}>المنتجات والشروط</Link></li>
                                <li><Link to="/open-accounts" onClick={this.MenuClick}>فتح الحسابات</Link></li>
                            </ul>
                        </li>
                        <li>
                            <div className="sn-lnk">
                            <Link to="/gcc-seminar">تعليم</Link><span id="menu5" data-toggle="collapse" data-target="#menuFive" aria-expanded="false" aria-controls="menuFive" className="collapsed"></span>
                            </div>
                            <ul className="mb-sub-menu collapse" id="menuFive" aria-labelledby="menu5" data-parent="#ResMenu">
                                <li><Link to="/gcc-seminar" onClick={this.MenuClick}>ندوات دول مجلس التعاون الخليجي</Link></li>
                                <li><Link to="/option-trading-workshop" onClick={this.MenuClick}>ورشة تدوال الاختيارات</Link></li>
                                <li><Link to="/mt5-training" onClick={this.MenuClick}>ورشة عملMT5</Link></li>
                                <li><Link to="/trading-signals" onClick={this.MenuClick}>تعلم التوصيات الالكترونية</Link></li>
                            </ul>
                        </li>
                        <li>
                            <div className="sn-lnk">
                            <Link to="/market-tools">أدوات</Link><span id="menu3" data-toggle="collapse" data-target="#menuThre" aria-expanded="false" aria-controls="menuThree" className="collapsed"></span>
                            </div>
                            <ul className="mb-sub-menu collapse" id="menuThre" aria-labelledby="menu3" data-parent="#ResMenu">
                                <li><Link to="/economic-calendar" onClick={this.MenuClick}>الرزنامة الإقتصادية</Link></li>
                                <li><Link to="/news" onClick={this.MenuClick}>أخبار</Link></li>
                                <li><Link to="/daily-report" onClick={this.MenuClick}>التقرير اليومي</Link></li>
                                <li><Link to="/trading-signals" onClick={this.MenuClick}>توصيات التداول</Link></li>
                                <li><Link to="/market-tools" onClick={this.MenuClick}>رسومات بيانية</Link></li>
                                <li><Link to="/market-tools/apps" onClick={this.MenuClick}>تطبيقات الهاتف الذكي</Link></li>
                                <li><Link to="/downloads" onClick={this.MenuClick}>تحميل</Link></li>
                                <li><a href="https://www.mql5.com/en/market" target="_blank" rel="noreferrer" onClick={this.MenuClick}>متجر منصة MetaTrader</a></li>
                            </ul>
                        </li>
                        <li>
                            <div className="sn-lnk">
                            <Link to="/company">من نحن</Link><span id="menu4" data-toggle="collapse" data-target="#menuFour" aria-expanded="false" aria-controls="menuFour" className="collapsed"></span>
                            </div>
                            <ul className="mb-sub-menu collapse" id="menuFour" aria-labelledby="menu4" data-parent="#ResMenu">
                                <li><Link to="/company" onClick={this.MenuClick}>عن سورد</Link></li>
                                <li><Link to="/conditions-of-use" onClick={this.MenuClick}>اللوائح والتنظيمات</Link></li>
                                <li><Link to="/products-condition" onClick={this.MenuClick}>المنتجات والشروط</Link></li>
                                <li><Link to="/risk-disclosure" onClick={this.MenuClick}>الإفصاح عن المخاطر</Link></li>
                                <li><Link to="/privacy-policy" onClick={this.MenuClick}>سياسة الخصوصية</Link></li>
                                <li><Link to="/anti-money-laundering-policy" onClick={this.MenuClick}>إجراءات مكافحة غسيل الأموال</Link></li>
                                <li><a href="https://misc.clientam.com/cstools/contract_info/index.php?wlId=SWORDBRK" target="_blank" rel="noreferrer" onClick={this.MenuClick}>البحث عن المنتجات</a></li>
                                <li><Link to="/partners" onClick={this.MenuClick}>الشركاء</Link></li>
                                <li><Link to="/partners/apply-job" onClick={this.MenuClick}>وظائف</Link></li>
                                <li><a href="https://www.sword-capital.com/member_dashboard/" target="_blank" rel="noreferrer" onClick={this.MenuClick}>تفاصيل التحويلات المصرفية</a></li>
                                <li><Link to="/fees-limits" onClick={this.MenuClick}>رسوم وحدود بطاقة سورد</Link></li>
                                <li><Link to="/exchange-listings-usmarkets" onClick={this.MenuClick}>قائمة البورصات</Link></li>
                                <li><Link to="/swords-governance" onClick={this.MenuClick}>حوكمة سورد</Link></li>
                                <li><Link to="/the-board" onClick={this.MenuClick}>أعضاء مجلس الإدارة</Link></li>
                                <li><Link to="/complaints" onClick={this.MenuClick}>الشكاوي</Link></li>
                                <li><Link to="/investors-affairs" onClick={this.MenuClick}>شؤون المستثمرين</Link></li>
                                <li><Link to="/contact-us" onClick={this.MenuClick}>اتصل بنا</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            </> : <>
            <div ref={el => (this.instance = el)} />
              <header className={`header ${this.state.activeClass} ${this.state.selectedLang}`}>
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12">
                            <LogoDiv />
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-6 up hidden-md-down">
                            <div className="main-menu">
                                <div className="menu">
                                    <ul className="main-nav">
                                        <li><Link to="/partners">Partners</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/partners">Partners Center</Link></li>
                                                <li><Link to="/partners/mt4-white-label">MT5 White Label</Link></li>
                                                <li><Link to="/partners/ib-account">Introducing Brokers</Link></li>
                                                <li><Link to="/partners/open-your-office">Open Your Office</Link></li>
                                                <li><Link to="/partners/franchises-brokerage">Franchise Brokerage</Link></li>
                                                <li><Link to="/partners/apply-job">Job Applications</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/trading-platforms">Trading</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/trading-platforms">Trading Platforms</Link></li>
                                                <li><Link to="/market-tools/apps">Mobile Apps</Link></li>
                                                <li><a href="http://sword-capital.com/member_dashboard/home">Withdrawal & Deposit</a></li>
                                                <li><Link to="/products-condition">Products & Condition</Link></li>
                                                <li><Link to="/open-accounts">Open Accounts</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/workshop">Academy</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/gcc-seminar">GCC Seminar</Link></li>
                                                <li><Link to="/option-trading-workshop">Options Trading Workshop</Link></li>
                                                <li><Link to="/mt5-training">MT5 Workshop</Link></li>
                                                <li><Link to="/trading-signals">Learn Signals</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/market-tools">Tools</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/economic-calendar">Economic Calendar</Link></li>
                                                <li><Link to="/news">News</Link></li>
                                                <li><Link to="/daily-report">Daily Report</Link></li>
                                                <li><Link to="/trading-signals">Trading Signals</Link></li>
                                                <li><Link to="/market-tools">Charting</Link></li>
                                                <li><Link to="/market-tools/apps">Mobile Apps</Link></li>
                                                <li><Link to="/downloads">Downloads</Link></li>
                                                <li><a href="https://www.mql5.com/en/market" target="_blank" rel="noreferrer">MQL Market</a></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/company">About Us</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/company">About SWORD</Link></li>
                                                <li><Link to="/conditions-of-use">Regulation</Link></li>
                                                <li><Link to="/products-condition">Products & Condition</Link></li>
                                                <li><Link to="/risk-disclosure">Risk Disclosure</Link></li>
                                                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                                <li><Link to="/anti-money-laundering-policy">AML Procedure</Link></li>
                                                <li><a href="https://misc.clientam.com/cstools/contract_info/index.php?wlId=SWORDBRK" target="_blank" rel="noreferrer">Search Products</a></li>
                                                <li><Link to="/partners">Partners</Link></li>
                                                <li><Link to="/partners/apply-job">Careers</Link></li>
                                                <li><a href="https://www.sword-capital.com/member_dashboard/" target="_blank" rel="noreferrer">Banking Details</a></li>
                                                <li><Link to="/fees-limits">Sword Card Fees & Limits</Link></li>
                                                <li><Link to="/exchange-listings-usmarkets">Exchange Listings</Link></li>
                                                <li><Link to="/swords-governance">Governance</Link></li>
                                                <li><Link to="/the-board">Board of Directors</Link></li>
                                                <li><Link to="/complaints">Complaints</Link></li>
                                                <li><Link to="/investors-affairs">Investors Affairs</Link></li>
                                                <li><Link to="/contact-us">Contact us</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-4 col-md-7 col-sm-12">
                            <div className="menu-btn">
                                <a className="mail" href="mailto:info@sword-capital.com"><img src={Mail} alt="mail" /> info@sword-capital.com </a>
                                <LogDiv />
                                <div className="lng-slct">
                                    <select value={this.state.selectedLang} name="lngSlct" id="lngSlct" onChange={this.ChangeLang}>
                                        <option value="en">en</option>
                                        <option value="ar">ar</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </header>
                <button onClick={this.MenuClick} className={MenuBtnClass}>
                    <span></span>
                </button>
                <div className={MenuBg} onClick={this.MenuClick}></div>
            <div className={MenuClass} >
            <div className="mb-nav" id="ResMenu">
                    <ul>
                        <li>
                            <div className="sn-lnk">
                            <Link to="/partners">Partners</Link><span id="menu1" data-toggle="collapse" data-target="#menuOne" aria-expanded="true" aria-controls="menuOne" className="collapsed"></span>
                            </div>
                            <ul className="mb-sub-menu collapse" id="menuOne" aria-labelledby="menu1" data-parent="#ResMenu">
                                <li><Link to="/partners" onClick={this.MenuClick}>Partners Center</Link></li>
                                <li><Link to="/partners/mt4-white-label" onClick={this.MenuClick}>MT5 White Label</Link></li>
                                <li><Link to="/partners/ib-account" onClick={this.MenuClick}>Introducing Brokers</Link></li>
                                <li><Link to="/partners/open-your-office" onClick={this.MenuClick}>Open Your Office</Link></li>
                                <li><Link to="/partners/franchises-brokerage" onClick={this.MenuClick}>Franchise Brokerage</Link></li>
                                <li><Link to="/partners/apply-job" onClick={this.MenuClick}>Job Applications</Link></li>
                            </ul>
                        </li>
                        <li>
                            <div className="sn-lnk">
                            <Link to="/trading-platforms">Trading</Link><span id="menu2" data-toggle="collapse" data-target="#menuTwo" aria-expanded="false" aria-controls="menuTwo" className="collapsed"></span>
                            </div>
                            <ul className="mb-sub-menu collapse" id="menuTwo" aria-labelledby="menu2" data-parent="#ResMenu">
                                <li><Link to="/trading-platforms" onClick={this.MenuClick}>Trading Platforms</Link></li>
                                <li><Link to="/market-tools/apps" onClick={this.MenuClick}>Mobile Apps</Link></li>
                                <li><a href="http://sword-capital.com/member_dashboard/home" onClick={this.MenuClick}>Withdrawal & Deposit</a></li>
                                <li><Link to="/products-condition" onClick={this.MenuClick}>Products & Condition</Link></li>
                                <li><Link to="/open-accounts" onClick={this.MenuClick}>Open Accounts</Link></li>
                            </ul>
                        </li>
                        <li>
                            <div className="sn-lnk">
                            <Link to="/gcc-seminar">Academy</Link><span id="menu5" data-toggle="collapse" data-target="#menuFive" aria-expanded="false" aria-controls="menuFive" className="collapsed"></span>
                            </div>
                            <ul className="mb-sub-menu collapse" id="menuFive" aria-labelledby="menu5" data-parent="#ResMenu">
                                <li><Link to="/gcc-seminar" onClick={this.MenuClick}>GCC Seminar</Link></li>
                                <li><Link to="/option-trading-workshop" onClick={this.MenuClick}>Options Trading Workshop</Link></li>
                                <li><Link to="/mt5-training" onClick={this.MenuClick}>MT5 Workshop</Link></li>
                                <li><Link to="/trading-signals" onClick={this.MenuClick}>Learn Signals</Link></li>
                            </ul>
                        </li>
                        <li>
                            <div className="sn-lnk">
                            <Link to="/market-tools">Tools</Link><span id="menu3" data-toggle="collapse" data-target="#menuThre" aria-expanded="false" aria-controls="menuThree" className="collapsed"></span>
                            </div>
                            <ul className="mb-sub-menu collapse" id="menuThre" aria-labelledby="menu3" data-parent="#ResMenu">
                                <li><Link to="/economic-calendar" onClick={this.MenuClick}>Economic Calendar</Link></li>
                                <li><Link to="/news" onClick={this.MenuClick}>News</Link></li>
                                <li><Link to="/daily-report" onClick={this.MenuClick}>Daily Report</Link></li>
                                <li><Link to="/trading-signals" onClick={this.MenuClick}>Trading Signals</Link></li>
                                <li><Link to="/market-tools" onClick={this.MenuClick}>Charting</Link></li>
                                <li><Link to="/market-tools/apps" onClick={this.MenuClick}>Mobile Apps</Link></li>
                                <li><Link to="/downloads" onClick={this.MenuClick}>Downloads</Link></li>
                                <li><a href="https://www.mql5.com/en/market" target="_blank" rel="noreferrer" onClick={this.MenuClick}>MQL Market</a></li>
                            </ul>
                        </li>
                        <li>
                            <div className="sn-lnk">
                            <Link to="/company">About Us</Link><span id="menu4" data-toggle="collapse" data-target="#menuFour" aria-expanded="false" aria-controls="menuFour" className="collapsed"></span>
                            </div>
                            <ul className="mb-sub-menu collapse" id="menuFour" aria-labelledby="menu4" data-parent="#ResMenu">
                                <li><Link to="/company" onClick={this.MenuClick}>About SWORD</Link></li>
                                <li><Link to="/conditions-of-use" onClick={this.MenuClick}>Regulation</Link></li>
                                <li><Link to="/products-condition" onClick={this.MenuClick}>Products & Condition</Link></li>
                                <li><Link to="/risk-disclosure" onClick={this.MenuClick}>Risk Disclosure</Link></li>
                                <li><Link to="/privacy-policy" onClick={this.MenuClick}>Privacy Policy</Link></li>
                                <li><Link to="/anti-money-laundering-policy" onClick={this.MenuClick}>AML Procedure</Link></li>
                                <li><a href="https://misc.clientam.com/cstools/contract_info/index.php?wlId=SWORDBRK" target="_blank" rel="noreferrer" onClick={this.MenuClick}>Search Products</a></li>
                                <li><Link to="/partners" onClick={this.MenuClick}>Partners</Link></li>
                                <li><Link to="/partners/apply-job" onClick={this.MenuClick}>Careers</Link></li>
                                <li><a href="https://www.sword-capital.com/member_dashboard/" target="_blank" rel="noreferrer" onClick={this.MenuClick}>Banking Details</a></li>
                                <li><Link to="/fees-limits" onClick={this.MenuClick}>Sword Card Fees & Limits</Link></li>
                                <li><Link to="/exchange-listings-usmarkets" onClick={this.MenuClick}>Exchange Listings</Link></li>
                                <li><Link to="/swords-governance" onClick={this.MenuClick}>Governance</Link></li>
                                <li><Link to="/the-board" onClick={this.MenuClick}>Board of Directors</Link></li>
                                <li><Link to="/complaints" onClick={this.MenuClick}>Complaints</Link></li>
                                <li><Link to="/investors-affairs" onClick={this.MenuClick}>Investors Affairs</Link></li>
                                <li><Link to="/contact-us" onClick={this.MenuClick}>Contact us</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            </> }
            </>
        )
    }
}

export class InnerHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuToggle: true,
            selectedLang: CustomCookieHelper.HelperGetLang("selectLang")
        };
        this.MenuClick = this.MenuClick.bind(this);
        this.ChangeLang = this.ChangeLang.bind(this);
    }
    MenuClick () {
        this.setState(state => ({
            menuToggle: !state.menuToggle
        }));
    }
    ChangeLang (e) {
        this.setState({ selectedLang: e.target.value });
        CustomCookieHelper.HelperSetCookie('selectLang', e.target.value,30);

        // reload the page
        window.location.reload();
    }

    componentDidMount(){
        document.body.classList.add(this.state.selectedLang);
        window.addEventListener('scroll', () => {
           let activeClass = 'MenuFixed';
           if(window.scrollY < 400){
               activeClass = ' ';
           } else {
            activeClass = 'MenuFixed';
           }
           this.setState({ activeClass });
        });
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = false;
        s.innerHTML = "function googleTranslateElementInit() { new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');}";
        this.instance.appendChild(s);
        const sd = document.createElement('script');
        sd.type = 'text/javascript';
        sd.async = true;
        sd.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        this.instance.appendChild(sd);
    }

    render() {

        let MenuClass = 'sidemenu';
        let MenuBtnClass = 'menubtn';
        let MenuBg = 'menubg';
        if (this.state.menuToggle === false) {
            MenuClass += ' active';
            MenuBtnClass += ' active';
            MenuBg += ' active';
        }

       

        return (
            <>
            {(this.state.selectedLang === 'ar') ? <>
            
            <div ref={el => (this.instance = el)} />
              <header className={`header inner-header ${this.state.activeClass}`}>
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12">
                            <LogoDiv />
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-6 up hidden-md-down">
                            <div className="main-menu">
                            <div className="menu">
                            <ul className="main-nav">
                                        <li><Link to="/partners">شركاء</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/partners">مركز الشركاء</Link></li>
                                                <li><Link to="/partners/mt4-white-label">شركاء منصة MT5</Link></li>
                                                <li><Link to="/partners/ib-account">التعريف بالوسطاء</Link></li>
                                                <li><Link to="/partners/open-your-office">افتح مكتبك</Link></li>
                                                <li><Link to="/partners/franchises-brokerage">العلامة التجارية</Link></li>
                                                <li><Link to="/partners/apply-job">طلبات التوظيف</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/trading-platforms">التداول</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/trading-platforms">منصات التداول</Link></li>
                                                <li><Link to="/market-tools/apps">تطبيقات الهاتف الذكي</Link></li>
                                                <li><a href="http://sword-capital.com/member_dashboard/home">السحب والإيداع</a></li>
                                                <li><Link to="/products-condition">المنتجات والشروط</Link></li>
                                                <li><Link to="/open-accounts">فتح الحسابات</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/workshop">تعليم</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/gcc-seminar">ندوات دول مجلس التعاون الخليجي</Link></li>
                                                <li><Link to="/option-trading-workshop">ورشة تدوال الاختيارات</Link></li>
                                                <li><Link to="/mt5-training">ورشة عملMT5</Link></li>
                                                <li><Link to="/trading-signals">تعلم التوصيات الالكترونية</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/market-tools">أدوات</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/economic-calendar">الرزنامة الإقتصادية</Link></li>
                                                <li><Link to="/news">أخبار</Link></li>
                                                <li><Link to="/daily-report">التقرير اليومي</Link></li>
                                                <li><Link to="/trading-signals">توصيات التداول</Link></li>
                                                <li><Link to="/market-tools">رسومات بيانية</Link></li>
                                                <li><Link to="/market-tools/apps">تطبيقات الهاتف الذكي</Link></li>
                                                <li><Link to="/downloads">تحميل</Link></li>
                                                <li><a href="https://www.mql5.com/en/market" target="_blank" rel="noreferrer">متجر منصة MetaTrader</a></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/company">من نحن</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/company">عن سورد</Link></li>
                                                <li><Link to="/conditions-of-use">اللوائح والتنظيمات</Link></li>
                                                <li><Link to="/products-condition">المنتجات والشروط</Link></li>
                                                <li><Link to="/risk-disclosure">الإفصاح عن المخاطر</Link></li>
                                                <li><Link to="/privacy-policy">سياسة الخصوصية</Link></li>
                                                <li><Link to="/anti-money-laundering-policy">إجراءات مكافحة غسيل الأموال</Link></li>
                                                <li><a href="https://misc.clientam.com/cstools/contract_info/index.php?wlId=SWORDBRK" target="_blank" rel="noreferrer">البحث عن المنتجات</a></li>
                                                <li><Link to="/partners">الشركاء</Link></li>
                                                <li><Link to="/partners/apply-job">وظائف</Link></li>
                                                <li><a href="https://www.sword-capital.com/member_dashboard/" target="_blank" rel="noreferrer">تفاصيل التحويلات المصرفية</a></li>
                                                <li><Link to="/fees-limits">رسوم وحدود بطاقة سورد</Link></li>
                                                <li><Link to="/exchange-listings-usmarkets">قائمة البورصات</Link></li>
                                                <li><Link to="/swords-governance">حوكمة سورد</Link></li>
                                                <li><Link to="/the-board">أعضاء مجلس الإدارة</Link></li>
                                                <li><Link to="/complaints">الشكاوي</Link></li>
                                                <li><Link to="/investors-affairs">شؤون المستثمرين</Link></li>
                                                <li><Link to="/contact-us">اتصل بنا</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-7 col-sm-12">
                            <div className="menu-btn">
                                <a className="mail" href="mailto:info@sword-capital.com"><img src={Mail} alt="mail" /> info@sword-capital.com </a>
                                <LogDivAr />
                                <div class="lng-slct">
                                    <select value={this.state.selectedLang} name="lngSlct" id="lngSlct" onChange={this.ChangeLang}>
                                        <option value="en">en</option>
                                        <option value="ar">ar</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </header>
                <button onClick={this.MenuClick} className={MenuBtnClass}>
                    <span></span>
                </button>
                <div className={MenuBg} onClick={this.MenuClick}></div>
                <div className={MenuClass} >
            <div className="mb-nav" id="ResMenu">
                    <ul>
                        <li>
                            <div className="sn-lnk">
                            <Link to="/partners">شركاء</Link><span id="menu1" data-toggle="collapse" data-target="#menuOne" aria-expanded="true" aria-controls="menuOne" className="collapsed"></span>
                            </div>
                            <ul className="mb-sub-menu collapse" id="menuOne" aria-labelledby="menu1" data-parent="#ResMenu">
                                <li><Link to="/partners" onClick={this.MenuClick}>مركز الشركاء</Link></li>
                                <li><Link to="/partners/mt4-white-label" onClick={this.MenuClick}>شركاء منصة MT5</Link></li>
                                <li><Link to="/partners/ib-account" onClick={this.MenuClick}>التعريف بالوسطاء</Link></li>
                                <li><Link to="/partners/open-your-office" onClick={this.MenuClick}>افتح مكتبك</Link></li>
                                <li><Link to="/partners/franchises-brokerage" onClick={this.MenuClick}>العلامة التجارية</Link></li>
                                <li><Link to="/partners/apply-job" onClick={this.MenuClick}>طلبات التوظيف</Link></li>
                            </ul>
                        </li>
                        <li>
                            <div className="sn-lnk">
                            <Link to="/trading-platforms">التداول</Link><span id="menu2" data-toggle="collapse" data-target="#menuTwo" aria-expanded="false" aria-controls="menuTwo" className="collapsed"></span>
                            </div>
                            <ul className="mb-sub-menu collapse" id="menuTwo" aria-labelledby="menu2" data-parent="#ResMenu">
                                <li><Link to="/trading-platforms" onClick={this.MenuClick}>منصات التداول</Link></li>
                                <li><Link to="/market-tools/apps" onClick={this.MenuClick}>تطبيقات الهاتف الذكي</Link></li>
                                <li><a href="http://sword-capital.com/member_dashboard/home" onClick={this.MenuClick}>السحب والإيداع</a></li>
                                <li><Link to="/products-condition" onClick={this.MenuClick}>المنتجات والشروط</Link></li>
                                <li><Link to="/open-accounts" onClick={this.MenuClick}>فتح الحسابات</Link></li>
                            </ul>
                        </li>
                        <li>
                            <div className="sn-lnk">
                            <Link to="/gcc-seminar">تعليم</Link><span id="menu5" data-toggle="collapse" data-target="#menuFive" aria-expanded="false" aria-controls="menuFive" className="collapsed"></span>
                            </div>
                            <ul className="mb-sub-menu collapse" id="menuFive" aria-labelledby="menu5" data-parent="#ResMenu">
                                <li><Link to="/gcc-seminar" onClick={this.MenuClick}>ندوات دول مجلس التعاون الخليجي</Link></li>
                                <li><Link to="/option-trading-workshop" onClick={this.MenuClick}>ورشة تدوال الاختيارات</Link></li>
                                <li><Link to="/mt5-training" onClick={this.MenuClick}>ورشة عملMT5</Link></li>
                                <li><Link to="/trading-signals" onClick={this.MenuClick}>تعلم التوصيات الالكترونية</Link></li>
                            </ul>
                        </li>
                        <li>
                            <div className="sn-lnk">
                            <Link to="/market-tools">أدوات</Link><span id="menu3" data-toggle="collapse" data-target="#menuThre" aria-expanded="false" aria-controls="menuThree" className="collapsed"></span>
                            </div>
                            <ul className="mb-sub-menu collapse" id="menuThre" aria-labelledby="menu3" data-parent="#ResMenu">
                                <li><Link to="/economic-calendar" onClick={this.MenuClick}>الرزنامة الإقتصادية</Link></li>
                                <li><Link to="/news" onClick={this.MenuClick}>أخبار</Link></li>
                                <li><Link to="/daily-report" onClick={this.MenuClick}>التقرير اليومي</Link></li>
                                <li><Link to="/trading-signals" onClick={this.MenuClick}>توصيات التداول</Link></li>
                                <li><Link to="/market-tools" onClick={this.MenuClick}>رسومات بيانية</Link></li>
                                <li><Link to="/market-tools/apps" onClick={this.MenuClick}>تطبيقات الهاتف الذكي</Link></li>
                                <li><Link to="/downloads" onClick={this.MenuClick}>تحميل</Link></li>
                                <li><a href="https://www.mql5.com/en/market" target="_blank" rel="noreferrer" onClick={this.MenuClick}>متجر منصة MetaTrader</a></li>
                            </ul>
                        </li>
                        <li>
                            <div className="sn-lnk">
                            <Link to="/company">من نحن</Link><span id="menu4" data-toggle="collapse" data-target="#menuFour" aria-expanded="false" aria-controls="menuFour" className="collapsed"></span>
                            </div>
                            <ul className="mb-sub-menu collapse" id="menuFour" aria-labelledby="menu4" data-parent="#ResMenu">
                                <li><Link to="/company" onClick={this.MenuClick}>عن سورد</Link></li>
                                <li><Link to="/conditions-of-use" onClick={this.MenuClick}>اللوائح والتنظيمات</Link></li>
                                <li><Link to="/products-condition" onClick={this.MenuClick}>المنتجات والشروط</Link></li>
                                <li><Link to="/risk-disclosure" onClick={this.MenuClick}>الإفصاح عن المخاطر</Link></li>
                                <li><Link to="/privacy-policy" onClick={this.MenuClick}>سياسة الخصوصية</Link></li>
                                <li><Link to="/anti-money-laundering-policy" onClick={this.MenuClick}>إجراءات مكافحة غسيل الأموال</Link></li>
                                <li><a href="https://misc.clientam.com/cstools/contract_info/index.php?wlId=SWORDBRK" target="_blank" rel="noreferrer" onClick={this.MenuClick}>البحث عن المنتجات</a></li>
                                <li><Link to="/partners" onClick={this.MenuClick}>الشركاء</Link></li>
                                <li><Link to="/partners/apply-job" onClick={this.MenuClick}>وظائف</Link></li>
                                <li><a href="https://www.sword-capital.com/member_dashboard/" target="_blank" rel="noreferrer" onClick={this.MenuClick}>تفاصيل التحويلات المصرفية</a></li>
                                <li><Link to="/fees-limits" onClick={this.MenuClick}>رسوم وحدود بطاقة سورد</Link></li>
                                <li><Link to="/exchange-listings-usmarkets" onClick={this.MenuClick}>قائمة البورصات</Link></li>
                                <li><Link to="/swords-governance" onClick={this.MenuClick}>حوكمة سورد</Link></li>
                                <li><Link to="/the-board" onClick={this.MenuClick}>أعضاء مجلس الإدارة</Link></li>
                                <li><Link to="/complaints" onClick={this.MenuClick}>الشكاوي</Link></li>
                                <li><Link to="/investors-affairs" onClick={this.MenuClick}>شؤون المستثمرين</Link></li>
                                <li><Link to="/contact-us" onClick={this.MenuClick}>اتصل بنا</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            
            </> : <>
            
            <div ref={el => (this.instance = el)} />
              <header className={`header inner-header ${this.state.activeClass}`}>
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12">
                            <LogoDiv />
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-6 up hidden-md-down">
                            <div className="main-menu">
                            <div className="menu">
                            <ul className="main-nav">
                                        <li><Link to="/partners">Partners</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/partners">Partners Center</Link></li>
                                                <li><Link to="/partners/mt4-white-label">MT5 White Label</Link></li>
                                                <li><Link to="/partners/ib-account">Introducing Brokers</Link></li>
                                                <li><Link to="/partners/open-your-office">Open Your Office</Link></li>
                                                <li><Link to="/partners/franchises-brokerage">Franchise Brokerage</Link></li>
                                                <li><Link to="/partners/apply-job">Job Applications</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/trading-platforms">Trading</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/trading-platforms">Trading Platforms</Link></li>
                                                <li><Link to="/market-tools/apps">Mobile Apps</Link></li>
                                                <li><a href="http://sword-capital.com/member_dashboard/home">Withdrawal & Deposit</a></li>
                                                <li><Link to="/products-condition">Products & Condition</Link></li>
                                                <li><Link to="/open-accounts">Open Accounts</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/workshop">Academy</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/gcc-seminar">GCC Seminar</Link></li>
                                                <li><Link to="/option-trading-workshop">Options Trading Workshop</Link></li>
                                                <li><Link to="/mt5-training">MT5 Workshop</Link></li>
                                                <li><Link to="/trading-signals">Learn Signals</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/market-tools">Tools</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/economic-calendar">Economic Calendar</Link></li>
                                                <li><Link to="/news">News</Link></li>
                                                <li><Link to="/daily-report">Daily Report</Link></li>
                                                <li><Link to="/trading-signals">Trading Signals</Link></li>
                                                <li><Link to="/market-tools">Charting</Link></li>
                                                <li><Link to="/market-tools/apps">Mobile Apps</Link></li>
                                                <li><Link to="/downloads">Downloads</Link></li>
                                                <li><a href="https://www.mql5.com/en/market" target="_blank" rel="noreferrer">MQL Market</a></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/company">About Us</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/company">About SWORD</Link></li>
                                                <li><Link to="/conditions-of-use">Regulation</Link></li>
                                                <li><Link to="/products-condition">Products & Condition</Link></li>
                                                <li><Link to="/risk-disclosure">Risk Disclosure</Link></li>
                                                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                                <li><Link to="/anti-money-laundering-policy">AML Procedure</Link></li>
                                                <li><a href="https://misc.clientam.com/cstools/contract_info/index.php?wlId=SWORDBRK" target="_blank" rel="noreferrer">Search Products</a></li>
                                                <li><Link to="/partners">Partners</Link></li>
                                                <li><Link to="/partners/apply-job">Careers</Link></li>
                                                <li><a href="https://www.sword-capital.com/member_dashboard/" target="_blank" rel="noreferrer">Banking Details</a></li>
                                                <li><Link to="/fees-limits">Sword Card Fees & Limits</Link></li>
                                                <li><Link to="/exchange-listings-usmarkets">Exchange Listings</Link></li>
                                                <li><Link to="/swords-governance">Governance</Link></li>
                                                <li><Link to="/the-board">Board of Directors</Link></li>
                                                <li><Link to="/complaints">Complaints</Link></li>
                                                <li><Link to="/investors-affairs">Investors Affairs</Link></li>
                                                <li><Link to="/contact-us">Contact us</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-4 col-md-7 col-sm-12">
                            <div className="menu-btn">
                                <a className="mail" href="mailto:info@sword-capital.com"><img src={Mail} alt="mail" /> info@sword-capital.com </a>
                                <LogDiv />
                                <div class="lng-slct">
                                    <select value={this.state.selectedLang} name="lngSlct" id="lngSlct" onChange={this.ChangeLang}>
                                        <option value="en">en</option>
                                        <option value="ar">ar</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </header>
                <button onClick={this.MenuClick} className={MenuBtnClass}>
                    <span></span>
                </button>
                <div className={MenuBg} onClick={this.MenuClick}></div>
            <div className={MenuClass} >
            <div className="mb-nav" id="ResMenu">
            <ul>
                        <li>
                            <div className="sn-lnk">
                            <Link to="/partners">Partners</Link><span id="menu1" data-toggle="collapse" data-target="#menuOne" aria-expanded="true" aria-controls="menuOne" className="collapsed"></span>
                            </div>
                            <ul className="mb-sub-menu collapse" id="menuOne" aria-labelledby="menu1" data-parent="#ResMenu">
                                <li><Link to="/partners" onClick={this.MenuClick}>Partners Center</Link></li>
                                <li><Link to="/partners/mt4-white-label" onClick={this.MenuClick}>MT5 White Label</Link></li>
                                <li><Link to="/partners/ib-account" onClick={this.MenuClick}>Introducing Brokers</Link></li>
                                <li><Link to="/partners/open-your-office" onClick={this.MenuClick}>Open Your Office</Link></li>
                                <li><Link to="/partners/franchises-brokerage" onClick={this.MenuClick}>Franchise Brokerage</Link></li>
                                <li><Link to="/partners/apply-job" onClick={this.MenuClick}>Job Applications</Link></li>
                            </ul>
                        </li>
                        <li>
                            <div className="sn-lnk">
                            <Link to="/trading-platforms">Trading</Link><span id="menu2" data-toggle="collapse" data-target="#menuTwo" aria-expanded="false" aria-controls="menuTwo" className="collapsed"></span>
                            </div>
                            <ul className="mb-sub-menu collapse" id="menuTwo" aria-labelledby="menu2" data-parent="#ResMenu">
                                <li><Link to="/trading-platforms" onClick={this.MenuClick}>Trading Platforms</Link></li>
                                <li><Link to="/market-tools/apps" onClick={this.MenuClick}>Mobile Apps</Link></li>
                                <li><a href="http://sword-capital.com/member_dashboard/home" onClick={this.MenuClick}>Withdrawal & Deposit</a></li>
                                <li><Link to="/products-condition" onClick={this.MenuClick}>Products & Condition</Link></li>
                                <li><Link to="/open-accounts" onClick={this.MenuClick}>Open Accounts</Link></li>
                            </ul>
                        </li>
                        <li>
                            <div className="sn-lnk">
                            <Link to="/gcc-seminar">Academy</Link><span id="menu5" data-toggle="collapse" data-target="#menuFive" aria-expanded="false" aria-controls="menuFive" className="collapsed"></span>
                            </div>
                            <ul className="mb-sub-menu collapse" id="menuFive" aria-labelledby="menu5" data-parent="#ResMenu">
                                <li><Link to="/gcc-seminar" onClick={this.MenuClick}>GCC Seminar</Link></li>
                                <li><Link to="/option-trading-workshop" onClick={this.MenuClick}>Options Trading Workshop</Link></li>
                                <li><Link to="/mt5-training" onClick={this.MenuClick}>MT5 Workshop</Link></li>
                                <li><Link to="/trading-signals" onClick={this.MenuClick}>Learn Signals</Link></li>
                            </ul>
                        </li>
                        <li>
                            <div className="sn-lnk">
                            <Link to="/market-tools">Tools</Link><span id="menu3" data-toggle="collapse" data-target="#menuThre" aria-expanded="false" aria-controls="menuThree" className="collapsed"></span>
                            </div>
                            <ul className="mb-sub-menu collapse" id="menuThre" aria-labelledby="menu3" data-parent="#ResMenu">
                                <li><Link to="/economic-calendar" onClick={this.MenuClick}>Economic Calendar</Link></li>
                                <li><Link to="/news" onClick={this.MenuClick}>News</Link></li>
                                <li><Link to="/daily-report" onClick={this.MenuClick}>Daily Report</Link></li>
                                <li><Link to="/trading-signals" onClick={this.MenuClick}>Trading Signals</Link></li>
                                <li><Link to="/market-tools" onClick={this.MenuClick}>Charting</Link></li>
                                <li><Link to="/market-tools/apps" onClick={this.MenuClick}>Mobile Apps</Link></li>
                                <li><Link to="/downloads" onClick={this.MenuClick}>Downloads</Link></li>
                                <li><a href="https://www.mql5.com/en/market" target="_blank" rel="noreferrer" onClick={this.MenuClick}>MQL Market</a></li>
                            </ul>
                        </li>
                        <li>
                            <div className="sn-lnk">
                            <Link to="/company">About Us</Link><span id="menu4" data-toggle="collapse" data-target="#menuFour" aria-expanded="false" aria-controls="menuFour" className="collapsed"></span>
                            </div>
                            <ul className="mb-sub-menu collapse" id="menuFour" aria-labelledby="menu4" data-parent="#ResMenu">
                                <li><Link to="/company" onClick={this.MenuClick}>About SWORD</Link></li>
                                <li><Link to="/conditions-of-use" onClick={this.MenuClick}>Regulation</Link></li>
                                <li><Link to="/products-condition" onClick={this.MenuClick}>Products & Condition</Link></li>
                                <li><Link to="/risk-disclosure" onClick={this.MenuClick}>Risk Disclosure</Link></li>
                                <li><Link to="/privacy-policy" onClick={this.MenuClick}>Privacy Policy</Link></li>
                                <li><Link to="/anti-money-laundering-policy" onClick={this.MenuClick}>AML Procedure</Link></li>
                                <li><a href="https://misc.clientam.com/cstools/contract_info/index.php?wlId=SWORDBRK" target="_blank" rel="noreferrer" onClick={this.MenuClick}>Search Products</a></li>
                                <li><Link to="/partners" onClick={this.MenuClick}>Partners</Link></li>
                                <li><Link to="/partners/apply-job" onClick={this.MenuClick}>Careers</Link></li>
                                <li><a href="https://www.sword-capital.com/member_dashboard/" target="_blank" rel="noreferrer" onClick={this.MenuClick}>Banking Details</a></li>
                                <li><Link to="/fees-limits" onClick={this.MenuClick}>Sword Card Fees & Limits</Link></li>
                                <li><Link to="/exchange-listings-usmarkets" onClick={this.MenuClick}>Exchange Listings</Link></li>
                                <li><Link to="/swords-governance" onClick={this.MenuClick}>Governance</Link></li>
                                <li><Link to="/the-board" onClick={this.MenuClick}>Board of Directors</Link></li>
                                <li><Link to="/complaints" onClick={this.MenuClick}>Complaints</Link></li>
                                <li><Link to="/investors-affairs" onClick={this.MenuClick}>Investors Affairs</Link></li>
                                <li><Link to="/contact-us" onClick={this.MenuClick}>Contact us</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            </> }
              
            </>
        )
    }
}

const LogDiv = () => {
    
    const [ showLog, setShowLog ] = useState('hide');

    const clickLog = () => {
        if(showLog === 'hide') {
            setShowLog('active');
        } else {
            setShowLog('hide');
        }
    }
    
    return(
        <div className="loginB">
            <button onClick={clickLog} className="login-btn"><img src={Login} alt="login" />LOGIN</button>
            <div className={`loglist ${showLog}`}>
                <a href="https://www.sword-capital.com/member_dashboard/?mwlc" target="_blank" rel="noreferrer">Login MT4 E-Wallet</a>
                <a href="https://www.sword-capital.com/members/?mwlc" target="_blank" rel="noreferrer">Login MT5 E-Wallet</a>
                <a href="https://clients.sword-capital.com/" target="_blank" rel="noreferrer">New Client Dashboard (Preview)</a>
            </div>
        </div>
    )
}


const LogDivAr = () => {
    
    const [ showLog, setShowLog ] = useState('hide');

    const clickLog = () => {
        if(showLog === 'hide') {
            setShowLog('active');
        } else {
            setShowLog('hide');
        }
    }
    
    return(
        <div className="loginB">
            <button onClick={clickLog} className="login-btn"><img src={Login} alt="login" />تسجيل الدخول </button>
            <div className={`loglist ${showLog}`}>
                <a href="https://www.sword-capital.com/member_dashboard/?mwlc" target="_blank" rel="noreferrer">Login MT4 E-Wallet</a>
                <a href="https://www.sword-capital.com/members/?mwlc" target="_blank" rel="noreferrer">Login MT5 E-Wallet</a>
                <a href="https://clients.sword-capital.com/" target="_blank" rel="noreferrer">New Client Dashboard (Preview)</a>
            </div>
        </div>
    )
}

export class LogoDiv extends Component {
    state = {
        details: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get('https://sword-capital.com/dev/wp/wp-json/wp/v2/pages?slug=home')
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
                <div className="logo">
                    <Link to="/"><img src={details[0].acf.logo} className="img-fluid" alt="logo"/></Link>
                </div>
            </>
        )
    }
    return (
        <>
            
        </>
    )
    }
}