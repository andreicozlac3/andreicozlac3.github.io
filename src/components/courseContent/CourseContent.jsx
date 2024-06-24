import React from "react";
import PropTypes from "prop-types";
import "./CourseContent.css";

const CourseContent = ({ title, description }) => {
  return (
    <div className="course-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

CourseContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CourseContent;
