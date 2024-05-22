import React from "react";
import "./about.css";

function About() {
  return (
    <div className="div1">
      <div className="divc">
        <div className="container-fluid div2">
          <p className="title">About Us</p>
          <hr className="hrline" />
          {/* <br /> */}
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 col-md-4">
              <p className="text">
                Welcome to our Smart Home Solutions, where innovation meets
                convenience to create the perfect living environment. Our
                mission is to transform ordinary houses into intelligent homes
                that adapt to your lifestyle, providing unparalleled comfort,
                security, and energy efficiency. By integrating cutting-edge
                technology with user-friendly interfaces, we ensure that every
                aspect of your home is seamlessly connected and effortlessly
                controlled, allowing you to focus on what truly matters –
                enjoying your space..
              </p>
            </div>

            <div className="col-6 col-md-4">
              <div className="div-p">
                <h3 className="title1">Transform Your Living room</h3>
                <p className="para">
                  At Smart Home Solutions, we understand that each home and
                  family is unique. That's why we offer a wide range of
                  customizable products and services tailored to meet your
                  specific needs. From automated lighting and climate control to
                  advanced security systems and entertainment hubs, our
                  solutions are designed to enhance your daily routines and
                  provide peace of mind. Our team of experts works closely with
                  you to design and implement a smart home system that reflects
                  your preferences and lifestyle, ensuring a perfect fit for
                  your home.
                </p>
              </div>
            </div>

            <div className="col-6 col-md-4">
              <h3 className="title2">Tailored Smart Home Solutioins</h3>
              <p className="para">
                We are committed to excellence and innovation in every project
                we undertake. Our dedicated support team is always on hand to
                assist with any questions or concerns, ensuring a smooth and
                enjoyable experience from start to finish. With Smart Home
                Solutions, you are not just upgrading your home – you are
                investing in a smarter, more connected future. Join us on this
                journey towards smarter living, and discover how our solutions
                can make your home more efficient, secure, and comfortable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
