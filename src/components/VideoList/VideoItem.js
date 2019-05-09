import React from "react";
import "./VideoList.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item">
      <img
        style={{ maxHeight: "231.19px" }}
        className="img-responsive"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <p className="">{video.snippet.title}</p>
    </div>
  );
};

export default VideoItem;
