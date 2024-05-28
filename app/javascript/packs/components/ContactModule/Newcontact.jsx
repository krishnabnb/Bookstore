import React from 'react';
import './contact.css';
import { FaMapLocationDot } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineWatchLater } from "react-icons/md";

export const Newcontact = (props) => {
  let formFields = {};

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = formFields.name.value;
    const email = formFields.email.value;
    const phone_number = formFields.phone_number.value
    const subject = formFields.subject.value;
    const massage = formFields.massage.value;

    props.handleFormSubmit(name, email, phone_number, subject, massage);
    e.target.reset();
  };

  return (
    <section className="contact-page-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <FaMapLocationDot></FaMapLocationDot>
                </div>
                <div className="contact-info-text">
                  <h2>address</h2>
                  <span>1215 Lorem Ipsum, Ch 176080 </span>
                  <span>Chandigarh , INDIA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <TfiEmail></TfiEmail>
                </div>
                <div className="contact-info-text"  style={{ marginLeft: '30px' }}>
                  <h2>E-mail</h2>
                  <span>info@LoremIpsum.com</span>
                  <span>yourmail@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MdOutlineWatchLater></MdOutlineWatchLater>
                </div>
                <div className="contact-info-text">
                  <h2>Shop time</h2>
                  <span>Mon - Thu  9:00 am - 4.00 pm</span>
                  <span>Thu - Mon  10.00 pm - 5.00 pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="contact-page-form">
            <h2>Get in Touch</h2>
              <form onSubmit={handleFormSubmit}>
                <div className="row-fild">
                  <div style={{display: 'flex' }}>
                    <div className="single-input-field">
                      <input type="text" id="name" ref={(input) => formFields.name = input} placeholder="Enter the name"/>
                    </div>
                    <div className="single-input-field" style={{ marginLeft: '70px' }}>
                      <input type="text" id="email" ref={(input) => formFields.email = input} placeholder="Enter the email" />
                    </div>
                  </div>
                  <div style={{display: 'flex' }}>
                    <div className="single-input-field">
                      <input type="text" id="phone_number" ref={(input) => formFields.phone_number = input} placeholder="Enter the phoneno" />
                    </div>
                    <div className="single-input-field" style={{ marginLeft: '70px' }}>
                      <input type="text" id="subject" ref={(input) => formFields.subject = input} placeholder="Enter the subject" />
                    </div>
                  </div>
                  <div className="col-md-12 message-input">
                    <div className="single-input-field">
                      <input type="text" id="massage" ref={(input) => formFields.massage = input} placeholder="Enter the massage" />
                    </div>
                  </div>
                  <div className="single-input-fieldsbtn">
                    <input type="submit" value="Send Now" />
                  </div>
                </div>
              </form>
            </div>
          <div className="contact-page-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109741.02912911311!2d76.69348873658222!3d30.73506264436677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1553497921355" width="100%" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen title="map"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};