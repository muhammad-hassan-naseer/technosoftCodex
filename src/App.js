import {Route} from 'react-router-dom'
import { BrowserRouter } from "react-router-dom"
import Landing from './components/LandingPage/Landing';
import WhyTechnosoft from './components/WhyTechnosoft/WhyTechnosoft';
import WebAppDevelopment from './components/WebAppDevelopment/WebAppDevelopment';
import MobileAppDevelopment from './components/MobileAppDevelopment/MobileAppDevelopment';
import DevOps from './components/DevOps/DevOps';
import TeamExtension from './components/TeamExtension/Teamxtension'
import UX from './components/UI/UI'
import QualityAssurance from './components/QualityAssurance/QualityAssurance'
import ThreeDApp from './components/3DApp/3DApp'
import EnterpriseSoftwareDev from './components/EnterpriseSoftwareDev/EnterpriseSoftwareDev';
import OpenEdx from './components/OpenEdx/OpenEdx';
import WebScraping from './components/WebScraping/WebScraping';
import Careers from './components/Careers/Careers';
import Clients from './components/Clients/Clients';
import Education from './components/Industries/Education';
import Travel from './components/Industries/Travel';
import HealthCare from './components/Industries/HealthCare';
import Finance from './components/Industries/Finance';
import Technology from './components/Industries/Technology';
import ECommerce from './components/Industries/E-Commerce';
import FreshGradHiring from './components/Careers/FreshGradHiring';
import Contact from './components/Contact/Contact';
import jobDetail from './components/Careers/jobDetail';
import JobApp from './components/Careers/JobApp';
import ReactNative from './components/MobileAppDevelopment/ReactNative';
import BlockChain from './components/BlockChain/BlockChain';
import Ecommerce from './components/Ecommerce/Ecommerce';
import SEO from './components/SEO/SEO'
function App() {
  return (
    <div >
        <BrowserRouter>
   <Route exact path='/' component={Landing}/>
   <Route exact path='/whytech' component={WhyTechnosoft}/>
   <Route exact path='/web-app-development' component={WebAppDevelopment}/>
   <Route exact path='/mobile-app-development' component={MobileAppDevelopment}/>
   <Route exact path='/devops-service' component={DevOps}/>
   <Route exact path='/dedicated-software-development-team' component={TeamExtension}/>
   <Route exact path='/ui-ux-design' component={UX}/>
   <Route exact path='/quality-assurance' component={QualityAssurance}/>
   <Route exact path='/3d-app-development' component={ThreeDApp}/>
   <Route exact path='/enterprise-software-dev' component={EnterpriseSoftwareDev}/>
   <Route exact path='/open-edx' component={OpenEdx}/>
   <Route exact path='/web-scraping' component={WebScraping}/>
   <Route exact path='/careers' component={Careers}/>
   <Route exact path='/clients' component={Clients}/>
   <Route exact path='/industry-education' component={Education}/>
   <Route exact path='/industry-travel' component={Travel}/>
   <Route exact path='/industry-healthcare' component={HealthCare}/>
   <Route exact path='/industry-finance' component={Finance}/>
   <Route exact path='/industry-technology' component={Technology}/>
   <Route exact path='/industry-e-commerce' component={ECommerce}/>
   <Route exact path='/fresh-grad-hiring' component={FreshGradHiring}/>
   <Route exact path='/contact' component={Contact}/>
   <Route exact path='/job-description-detail/:id' component={jobDetail}/>
   <Route exact path='/job-application' component={JobApp}/>
   <Route exact path='/react-native-app-development' component={ReactNative}/>
   <Route exact path='/ecommerce-dev-service' component={Ecommerce}/>
   <Route exact path='/block-chain-dev-service' component={BlockChain}/>
   <Route exact path='/search-engine-optimization-service' component={SEO}/>



   </BrowserRouter>
    </div>
  );
}

export default App;
