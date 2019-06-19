import React from "react";
import he from "he";

import "./VideoList.css";

const VideoItem = ({ video, onVideoSelect }) => {
  console.log(he);
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item">
      <img
        /* style={{ maxHeight: "231.19px" }} */
        style={{width: "300px"}}
        className="img-responsive"
        src={video.snippet.thumbnails.medium.url}
        alt={he.decode(video.snippet.title)}
      />
      <p>{he.decode(video.snippet.title)}</p>
    </div>
  );
};

export default VideoItem;
