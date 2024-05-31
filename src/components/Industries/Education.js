import React from "react";
import Header from '../Header';
import HeaderBackground from "./HeaderBackground";
import Logo from "./Logo";
import Info from "./Info";
import VIewWork from "./VIewWork";
import Footer from "../LandingPage/Footer";
import PostHeader from "../MobileAppDevelopment/PostHeader";

const Education = () => {

  const info={
    infoHead:"We have partnered with some of the leading education and financial institutions, and nonprofits to modernise the ways learning is accessed. Our online and ed-tech solutions are used by millions globally.",
    leader:"Over a decade of experience working with industry leaders",
    para:"Technology has revolutionized the education industry, where most development has been influenced by open source and web 2.0 solutions. There have been significant changes in the learning and teaching ways as more and more Institutions are adopting online learning solutions. Arbisoft has a legacy of developing learning solutions and applications for industry leaders. Working closely with edX, we have empowered top global universities, nonprofits and corporate companies to educate their students, employees and the public.",
    softwareServiceHead:"Complete range of software development services",
    softwareServicePara:"We are a full-service software development partner. Our ed-tech solutions are completely bespoke and cater to the unique idea every client brings to the table. From developing anatomy 3D apps for Stanford University’s medical students to creating intuitive and robust online Mooc platform for edX; Arbisoft has been fully committed to its mission to make learning accessible to everyone.",
     faFirst: <i class="fas fa-book-reader fa-5x text-primary text-center"></i>,
     faSecond:  <i class="fas fa-server fa-5x text-primary text-center"></i>
  }
    const postHeader={
      service:"Production",

      tagLine:"Education Industry",
      para:"US consumers spend nearly a quarter of their day on their mobile phone – and 92% of that time is spent using apps. Your app needs to be brilliantly designed and intuitive to have a shot at getting anyone’s attention..",
      btn:<button type="button" class="btn btn-primary">Let's Discuss Your Project</button>,
      id:"education"    
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

export default Education;
