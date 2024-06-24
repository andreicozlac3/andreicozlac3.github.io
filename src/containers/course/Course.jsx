import React from "react";
import PropTypes from "prop-types";
import "./Course.css";
import { Fade } from "react-reveal";
import CourseContent from "../../components/courseContent/CourseContent";

const Course = ({ theme, title, description }) => {
  return (
    <div
      className="course-rectangle"
      style={{ backgroundColor: theme.background }}
    >
      <Fade bottom duration={2000} distance="20px">
        <CourseContent title={title} description={description} />
      </Fade>
    </div>
  );
};

Course.propTypes = {
  theme: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Course;
