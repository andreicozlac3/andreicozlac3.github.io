import React from "react";
import PropTypes from "prop-types";
import "./Offer.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Course from "../../containers/course/Course";

const Offer = ({ theme, onToggle }) => {
  return (
    <div className="courses-main">
      <Header theme={theme} />
      <div className="courses-container">
        <Course
          theme={theme}
          title="Sample Course 1"
          description="This is a sample course description."
        />
        <Course
          theme={theme}
          title="Sample Course 2"
          description="This is another sample course description."
        />
        <Course
          theme={theme}
          title="Sample Course 3"
          description="This is yet another sample course description."
        />
      </div>
      <Footer theme={theme} onToggle={onToggle} />
      <TopButton theme={theme} />
    </div>
  );
};

Offer.propTypes = {
  theme: PropTypes.object.isRequired,
  onToggle: PropTypes.func,
};

export default Offer;
