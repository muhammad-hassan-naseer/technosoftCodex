import React from "react";
import Header from '../Header';
import HeaderBackground from "./HeaderBackground";
import Logo from "./Logo";
import Info from "./Info";
import VIewWork from "./VIewWork";
import Footer from "../LandingPage/Footer";
import PostHeader from "../MobileAppDevelopment/PostHeader";

const ECommerce = () => {

  const info={
    infoHead:"We have partnered with some of the leading education and financial institutions, and nonprofits to modernise the ways learning is accessed. Our online and ed-tech solutions are used by millions globally.",
    leader:"Custom software for your business",
    para:"With the rise of new business models, trends and proliferation of e-commerce websites, it is important for organizations to build an e-commerce platform that is more agile, flexible, resilient and unique. We build custom software platforms that offer more control to you and utility to customers to meet their demands in the way they want it.Once created, your software adds value to your business and stands out in the marketplace — as you scale, evolve and expand, your software harmoniously fits in with your business requirements and with what it has to offer.",
    softwareServiceHead:"E-commerce solutions for businesses of all shapes and sizes",
    softwareServicePara:"Regardless of your industry or whether you want to target B2B or B2C customers, the software we create for you promises to benefit your business in every step of its operations and delivery.We pride ourselves on creating fully functional, responsive and advanced online solutions which offer a unique experience and is custom made for your brand. Our software supports multiple languages, currencies and features to offer a smooth customer experience",
     faFirst: <i class="fab fa-5x text-primary text-center fa-uncharted"></i>,
     faSecond:  <i class="fas fa-5x text-primary text-center fa-vector-square"></i>
  }
    const postHeader={
      service:"Production",
      tagLine:"E-Commerce Industry",
      para:"US consumers spend nearly a quarter of their day on their mobile phone – and 92% of that time is spent using apps. Your app needs to be brilliantly designed and intuitive to have a shot at getting anyone’s attention..",
      btn:<button type="button" class="btn btn-primary">Let's Discuss Your Project</button>,
      id:"commerce"    
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

export default ECommerce;
