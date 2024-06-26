import React from "react";
import pose1 from "../../assests/images/pose1.jpg";

const styles = {
  roundedShadow: {
    width: "80%",
    height: "auto",
    borderRadius: "10px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
};

function SkillImage(props) {
  return (
    <div>
      <img
        src={pose1}
        alt="Vinyasa Yoga"
        style={{ ...styles["roundedShadow"] }}
      />
    </div>
  );
}

export default SkillImage;
