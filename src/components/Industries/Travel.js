import React from "react";
import Header from '../Header';
import HeaderBackground from "./HeaderBackground";
import Logo from "./Logo";
import Info from "./Info";
import VIewWork from "./VIewWork";
import Footer from "../LandingPage/Footer";
import PostHeader from "../MobileAppDevelopment/PostHeader";

const Travel = () => {

  const info={
    infoHead:"We have partnered with some of the leading education and financial institutions, and nonprofits to modernise the ways learning is accessed. Our online and ed-tech solutions are used by millions globally.",
    leader:"Building the world’s leading search engine",
    para:"We teamed up with KAYAK in 2008 to build fully integrated iOS and Android apps that helped extend and enhance their web-based experience for users on the go. While our Machine Learning engineers use Natural Language Processing to augment KAYAK’s data, our dedicated team of QA makes sure all functional software is error free and runs smoothly. The app has been downloaded over 50 million times from 30 countries across the globe.",
    softwareServiceHead:"Using technology to leverage clients’ business",
    softwareServicePara:"Our technology expertise in the travel industry has helped clients to expand their business across continents and won numerous industry awards. We have worked with Travelliance to keep its web portal up and running so that their database of over 7 million users function smoothly. Thanks to these optimisations, Travelliance expanded services to 5 continents.",
     faFirst: <i class="fas fa-search fa-5x text-primary text-center"></i>,
     faSecond: <i class="fas fa-memory fa-5x text-primary text-center"></i>
  }
    const postHeader={
      service:"Production",

      tagLine:"Travel Industry",
      para:"US consumers spend nearly a quarter of their day on their mobile phone – and 92% of that time is spent using apps. Your app needs to be brilliantly designed and intuitive to have a shot at getting anyone’s attention..",
      btn:<button type="button" class="btn btn-primary">Let's Discuss Your Project</button>,
      id:"travel"    
    }
  
  return (
    <>
    <Header />
    <PostHeader postHeader={postHeader}/>

    <Logo />

    <Info info={info}/>
    <VIewWork />
    <Footer />

    </>
  );
};

export default Travel;
