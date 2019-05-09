import React from "react";

const VideoDetail = ({ video }) => {
  //if video is null
  if (!video) {
    return (
      <div className="text-white">
        Loading
        <span className="ml-1 fas fa-spinner fa-pulse" />
      </div>
    );
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="mt-2 col-11 col-lg-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          src={videoSrc}
          title={video.snippet.title}
          className="embed-responsive-item"
          allowFullScreen
        />
      </div>
      <div className="mt-2 card">
        <div className="card-body">
          <h4 className="card-title">{video.snippet.title}</h4>
          <p className="card-text">
            {video.snippet.description
              ? video.snippet.description
              : "No Description"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
