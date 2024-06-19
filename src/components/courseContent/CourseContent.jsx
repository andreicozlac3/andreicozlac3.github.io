import React, { Component } from "react";
import "./CourseContent";

class CourseContent extends Component {
  render() {
    return (
      <div class="container">
        <div class="course-item">
          <img
            src="https://th.bing.com/th/id/OIP.xkJHbFx-4usyzMNWf37gTQAAAA?w=226&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
            alt="Course 1"
          />
          <div class="course-description">
            <h3>Title</h3>
            <p>Description</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseContent;
