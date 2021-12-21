import './App.css';
import './ArabicApp.css';
import {Header, InnerHeader} from './components/Header';
import HomePage from './components/HomePage';
import Partner from './components/inner_pages/Partner';
import ErrorPage from './components/inner_pages/ErrorPage';
import Footer from './components/Footer';
import {Switch, Route } from "react-router-dom";
import Mt5white from './components/inner_pages/Mt5white';
import TwsWhite from './components/inner_pages/TwsWhite';
import {CorpAccount, DemoAccount, IbAccount, LowAccount, PersonalAccount, PremAccount, VipAccount} from './components/inner_pages/IbAccount';
import IbOffice from './components/inner_pages/IbOffice';
import FranchiseBrok from './components/inner_pages/FranchiseBrok';
import ApplyJob from './components/inner_pages/ApplyJob';
import TradingPlatform from './components/inner_pages/TradingPlatform';
import MobileApps from './components/inner_pages/MobileApps';
import ProductCondition from './components/inner_pages/ProductCondition';
import {ExchangeListUs, ExchangeListEu, ExchangeListAsia, ExchangeListAfrica} from './components/inner_pages/ExchangeListUs';
import OpenAccount from './components/inner_pages/OpenAccount';
import { Accademy, Mt5Workshop, OptTrading, TradeSignal, TwsWorkshop } from './components/inner_pages/Accademy';
import EcnomicCalender from './components/inner_pages/EcnomicCalender';
import {News, DailyReport, Charting} from './components/inner_pages/News';
import { About, AmlMoney, Complaint, FeeLimit, PrivacyPolicy, Regulation, RiskDisclose, SwordGover, TheBoard } from './components/inner_pages/About';
import Corporation from './components/inner_pages/Corporation';
import {Download, MetaTrader5, TwsPlatform} from './components/inner_pages/Download';
import Test from './components/inner_pages/Test';
import ContactUs from './components/inner_pages/ContactUs';
import Refferal from './components/inner_pages/Refferal';
import Downloads from './components/inner_pages/Downloads';
import BankingDetails from './components/inner_pages/BankingDetails';
import Workshop from './components/inner_pages/Workshop';
import { InvestAffairs, AnnualReports, AssemblyMeetings, DisclosuresRegistry, FinancialStatements } from './components/inner_pages/InvestAffairs';
import InvestDetails from './components/inner_pages/InvestDetails';

function App() {
  return (
    <>
        <Switch>
          <Route exact path="/">
            <Header />
            <HomePage />
          </Route>
          <Route exact path="/partners">
            <InnerHeader />
            <Partner />
          </Route>
          <Route exact path="/partners/mt4-white-label">
            <InnerHeader />
            <Mt5white />
          </Route>
          <Route exact path="/partners/tws-trader">
            <InnerHeader />
            <TwsWhite />
          </Route>
          <Route exact path="/partners/ib-account">
            <InnerHeader />
            <IbAccount />
          </Route>
          <Route exact path="/partners/corporation-with-us">
            <InnerHeader />
            <Corporation />
          </Route>
          <Route exact path="/partners/open-your-office">
            <InnerHeader />
            <IbOffice />
          </Route>
          <Route exact path="/partners/franchises-brokerage">
            <InnerHeader />
            <FranchiseBrok />
          </Route>
          <Route exact path="/partners/apply-job">
            <InnerHeader />
            <ApplyJob />
          </Route>
          <Route exact path="/trading-platforms">
            <InnerHeader />
            <TradingPlatform />
          </Route>
          <Route exact path="/market-tools/apps">
            <InnerHeader />
            <MobileApps />
          </Route>
          <Route exact path="/products-condition">
            <InnerHeader />
            <ProductCondition />
          </Route>
          <Route exact path="/exchange-listings-usmarkets">
            <InnerHeader />
            <ExchangeListUs />
          </Route>
          <Route exact path="/exchange-listings-eumarkets">
            <InnerHeader />
            <ExchangeListEu />
          </Route>
          <Route exact path="/exchange-listing-asiamarkets">
            <InnerHeader />
            <ExchangeListAsia />
          </Route>
          <Route exact path="/exchange-listing-africamarkets">
            <InnerHeader />
            <ExchangeListAfrica />
          </Route>
          <Route exact path="/open-accounts">
            <InnerHeader />
            <OpenAccount />
          </Route>
          <Route exact path="/open-accounts/personal-account">
            <InnerHeader />
            <PersonalAccount />
          </Route>
          <Route exact path="/open-accounts/corporate-acc">
            <InnerHeader />
            <CorpAccount />
          </Route>
          <Route exact path="/open-accounts/bank-institution-account">
            <InnerHeader />
            <IbAccount />
          </Route>
          <Route exact path="/open-accounts/low-spread-account">
            <InnerHeader />
            <LowAccount />
          </Route>
          <Route exact path="/open-accounts/premium-account">
            <InnerHeader />
            <PremAccount />
          </Route>
          <Route exact path="/open-accounts/vip-account">
            <InnerHeader />
            <VipAccount />
          </Route>
          <Route exact path="/open-accounts/demo-account">
            <InnerHeader />
            <DemoAccount />
          </Route>
          <Route exact path="/gcc-seminar">
            <InnerHeader />
            <Accademy />
          </Route>
          <Route exact path="/option-trading-workshop">
            <InnerHeader />
            <OptTrading />
          </Route>
          <Route exact path="/mt5-training">
            <InnerHeader />
            <Mt5Workshop />
          </Route>
          <Route exact path="/tws-training">
            <InnerHeader />
            <TwsWorkshop />
          </Route>
          <Route exact path="/trading-signals">
            <InnerHeader />
            <TradeSignal />
          </Route>
          <Route exact path="/economic-calendar">
            <InnerHeader />
            <EcnomicCalender />
          </Route>
          <Route exact path="/news">
            <InnerHeader />
            <News />
          </Route>
          <Route exact path="/daily-report">
            <InnerHeader />
            <DailyReport />
          </Route>
          <Route exact path="/market-tools">
            <InnerHeader />
            <Charting />
          </Route>
          <Route exact path="/company">
            <InnerHeader />
            <About />
          </Route>
          <Route exact path="/conditions-of-use">
            <InnerHeader />
            <Regulation />
          </Route>
          <Route exact path="/risk-disclosure">
            <InnerHeader />
            <RiskDisclose />
          </Route>
          <Route exact path="/privacy-policy">
            <InnerHeader />
            <PrivacyPolicy />
          </Route>
          <Route exact path="/anti-money-laundering-policy">
            <InnerHeader />
            <AmlMoney />
          </Route>
          <Route exact path="/fees-limits">
            <InnerHeader />
            <FeeLimit />
          </Route>
          <Route exact path="/swords-governance">
            <InnerHeader />
            <SwordGover />
          </Route>
          <Route exact path="/the-board">
            <InnerHeader />
            <TheBoard />
          </Route>
          <Route exact path="/complaints">
            <InnerHeader />
            <Complaint />
          </Route>
          <Route exact path="/downloads/metatrader4">
            <InnerHeader />
            <Download />
          </Route>
          <Route exact path="/downloads/metatrader5">
            <InnerHeader />
            <MetaTrader5 />
          </Route>
          <Route exact path="/downloads/tws-platform">
            <InnerHeader />
            <TwsPlatform />
          </Route>
          <Route exact path="/test">
            <InnerHeader />
            <Test />
          </Route>
          <Route exact path="/contact-us">
            <InnerHeader />
            <ContactUs />
          </Route>
          <Route exact path="/referral">
            <InnerHeader />
            <Refferal />
          </Route>
          <Route exact path="/downloads">
            <InnerHeader />
            <Downloads />
          </Route>
          <Route exact path="/banking-details">
            <InnerHeader />
            <BankingDetails />
          </Route>
          <Route exact path="/workshop">
            <InnerHeader />
            <Workshop />
          </Route>
          <Route exact path="/investors-affairs">
            <InnerHeader />
            <InvestAffairs />
          </Route>
          <Route path="/investors_affairs/">
            <InnerHeader />
            <InvestDetails />
          </Route>
          <Route path="/investors-affairs/annual-reports/">
            <InnerHeader />
            <AnnualReports />
          </Route>
          <Route path="/investors-affairs/MOMs/">
            <InnerHeader />
            <AssemblyMeetings />
          </Route>
          <Route path="/investors-affairs/disclosures-registry/">
            <InnerHeader />
            <DisclosuresRegistry />
          </Route>
          <Route path="/investors-affairs/statements-reports/">
            <InnerHeader />
            <FinancialStatements />
          </Route>
          <Route>
            <InnerHeader />
            <ErrorPage />
          </Route>
        </Switch>
      <Footer />
    </>
  );
}

export default App;