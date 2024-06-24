import React from "react";
import ReactPlayer from "react-player";

function VideoComponent() {
  return (
    <div>
      <ReactPlayer url="https://www.youtube.com/watch?v=TNlv8BkaSow" controls />
    </div>
  );
}

export default VideoComponent;
