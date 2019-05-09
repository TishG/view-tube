import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const videoList = videos.map((video) => {
    return (
      <VideoItem
        key={video.snippet.thumbnails.medium.url}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });
  return <div>{videoList}</div>;
};

export default VideoList;
