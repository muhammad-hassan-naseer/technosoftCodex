import React from "react";
import Header from '../Header';
import HeaderBackground from "./HeaderBackground";
import Logo from "./Logo";
import Info from "./Info";
import VIewWork from "./VIewWork";
import Footer from "../LandingPage/Footer";
import PostHeader from "../MobileAppDevelopment/PostHeader";

const Finance = () => {

  const info={
    infoHead:"We have partnered with some of the leading education and financial institutions, and nonprofits to modernise the ways learning is accessed. Our online and ed-tech solutions are used by millions globally.",
    leader:"The right technical capability for your business",
    para:"Digitization has changed the finance industry and you need the right technology support to stay abreast with the developments. Whether its finance, insurance or stocks, our team of expert developers and data analysts have the domain expertise and technical capability to offer solutions customized to your business needs. This approach has helped clients stay ahead of their competition and resulted in long term partnerships with Arbisoft.",
    softwareServiceHead:"Working with the data to accelerate your success",
    softwareServicePara:"Our data experts have worked with clients with business spanning over a century; mining data and creating algorithms that make predictions about fluctuations in stocks. Similarly our web and mobile app teams have created apps that facilitate financial clients to gather, store and monitor large amounts of data for research purposes.",
     faFirst: <i class="fas fa-5x text-center text-primary fa-business-time"></i>,
     faSecond: <i class="fas fa-5x text-center text-primary fa-database"></i>
  }
    const postHeader={
      service:"Production",

      tagLine:"Finance Industry",
      para:"US consumers spend nearly a quarter of their day on their mobile phone – and 92% of that time is spent using apps. Your app needs to be brilliantly designed and intuitive to have a shot at getting anyone’s attention..",
      btn:<button type="button" class="btn btn-primary">Let's Discuss Your Project</button>,
      id:"finance"    
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

export default Finance;
