import React from "react";
import { useLottie } from "lottie-react";
import animationData from "./lottie/69723-web-developer.json";


function Home() {
  const options = {
    animationData: animationData,
    loop: true
  };

  const { View } = useLottie(options);

  return (
    <>
      <div class="container card bg-transparent mt-3 p-5" id='home' style={{ border: "1px solid #ae493e", boxShadow: "rgb(217, 88, 74) 12px 8px 12px" }}>
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12" id="intro">
            <div class="header-text pt-2">
              <h2>Hello, I'm<br /><span> KAVIN</span> G</h2>
              <p>Full Stack Developer<span >(MERN)</span></p>
            </div>
            <div className="text-center" id="social-cont">
            <a target="_blank" href="https://mail.google.com/mail/u/0/?hl=en-GB&tf=cm&fs=1&to=gkavin77@gmail.com"><i class="fa-regular fa-envelope"></i></a>
          <a target="_blank" href="https://github.com/gkavin57"><i class="fa-brands fa-github"></i></a>
          <a target="_blank" href="https://www.linkedin.com/in/kavin-g-942205251/"><i class="fa-brands fa-linkedin"></i></a>
          <a target="_blank" href="https://wa.me/+917200364246"><i class="fa-brands fa-whatsapp"></i></a>
          
              <a href="#"><i class="fas fa-download"></i></a>
            </div>
          </div>
          <div class=" col-lg-6 col-md-5 col-sm-8 pt-5">
            {View}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home