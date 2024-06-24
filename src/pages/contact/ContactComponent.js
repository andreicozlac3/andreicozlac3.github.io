import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assests/images/${ContactData.profile_image_path}`)}
                  alt="Profile"
                />
              </div>
              <div className="contact-heading-text-div">
                <SocialMedia theme={theme} />
                <div className="address-heading-text-div">
                  <h1
                    className="address-heading-text"
                    style={{ color: theme.text }}
                  >
                    {addressSection.title}
                  </h1>
                  <p
                    className="contact-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    <a
                      href="https://maps.app.goo.gl/6MgMcvkPPBM69rcz9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {addressSection.subtitle}
                    </a>
                  </p>
                  <h1
                    className="address-heading-text"
                    style={{ color: theme.text }}
                  >
                    {phoneSection.title}
                  </h1>
                  <p
                    className="contact-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {phoneSection.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

Contact.propTypes = {
  theme: PropTypes.object.isRequired,
  onToggle: PropTypes.func,
};

export default Contact;
