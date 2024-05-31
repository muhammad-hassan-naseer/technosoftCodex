import React from "react";
import Header from '../Header';
import HeaderBackground from "./HeaderBackground";
import Logo from "./Logo";
import Info from "./Info";
import VIewWork from "./VIewWork";
import Footer from "../LandingPage/Footer";
import PostHeader from "../MobileAppDevelopment/PostHeader";

const Health = () => {

  const info={
    infoHead:"We have partnered with some of the leading education and financial institutions, and nonprofits to modernise the ways learning is accessed. Our online and ed-tech solutions are used by millions globally.",
    leader:"A journey from traditional to modern technology",
    para:"Arbisoft has worked with clients stuck with traditional paper-based health records and help them adopt digital solutions. We developed patient management system for smart patient appointment scheduling. The solution helps physicians or frontdesk staff to accurately predict if the patient will visit the clinic or miss appointments, and schedule patients’ appointments based on their past behaviour. Our scheduling optimization product will make practices lean and efficient and improve care coordination and patient engagement.",
    softwareServiceHead:"Bringing healthIT startups on the digital map",
    softwareServicePara:"Healthcare is one of the fastest developing sectors with numerous innovations, while healthIT solutions and devices have been on a rise to facilitate the growth of the industry. Working with various clients Arbisoft has developed mobile and web apps that digitally monitor patients’ vital signs, maintain data and create smart alerts based patient’s history. Our engineers have developed 3D apps for human anatomy, which is used by leading medical schools to teach students.",
     faFirst:<i class="fab fa-5x text-primary text-center fa-modx"></i>,
     faSecond: <i class="fas fa-5x text-primary text-center fa-x-ray"></i>
  }
    const postHeader={
      service:"Production",

      tagLine:"HealthCare Industry",
      para:"US consumers spend nearly a quarter of their day on their mobile phone – and 92% of that time is spent using apps. Your app needs to be brilliantly designed and intuitive to have a shot at getting anyone’s attention..",
      btn:<button type="button" class="btn btn-primary">Let's Discuss Your Project</button>,
      id:"health"    
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

export default Health;
