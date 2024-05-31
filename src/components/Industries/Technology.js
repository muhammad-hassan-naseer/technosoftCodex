import React from "react";
import Header from '../Header';
import HeaderBackground from "./HeaderBackground";
import Logo from "./Logo";
import Info from "./Info";
import VIewWork from "./VIewWork";
import Footer from "../LandingPage/Footer";
import PostHeader from "../MobileAppDevelopment/PostHeader";

const Tech = () => {

  const info={
    infoHead:"We have partnered with some of the leading education and financial institutions, and nonprofits to modernise the ways learning is accessed. Our online and ed-tech solutions are used by millions globally.",
    leader:"The right technical capability for your business",
    para:"For over a decade Arbisoft’s teams of dedicated engineers have developed software and provided technical support to some of the largest organizations and startups looking to scale big. With the help of enterprise solutions developed by us, companies have been able to deliver solutions and respond to customer demands in a more effective manner required in the evolving technology landscape.",
    softwareServiceHead:"Working with the data to accelerate your success",
    softwareServicePara:"We believe in creating value for our client, which comes through our innovation-driven approach and vision to prioritise people. Our work speaks of our dedication to solve real world problems and bring value to our clients’ businesses. Whether it’s educating millions online, developing applications for medical students and professionals, disrupting the travel industry or helping fintech companies predict stocks; Arbisoft has created a difference with our expertise in developing enterprise solutions. With 4 locations across the world and over 450 team members, Arbisoft is the perfect partner to meet the global demands of our clients.",
     faFirst: <i class="fas fa-award fa-5x text-primary text-center"></i>,
     faSecond:  <i class="fas fa-server fa-5x text-primary text-center"></i>
  }
    const postHeader={
      service:"Production",

      tagLine:"Technology Industry",
      para:"US consumers spend nearly a quarter of their day on their mobile phone – and 92% of that time is spent using apps. Your app needs to be brilliantly designed and intuitive to have a shot at getting anyone’s attention..",
      btn:<button type="button" class="btn btn-primary">Let's Discuss Your Project</button>,
      id:"tech"    
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

export default Tech;
