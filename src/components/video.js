import React from "react";
import styles from "./video.module.css"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
    <div className={ styles.videoWrapper }>
        <iframe
          src={videoSrcURL}
          title={videoTitle}
          width="950"
          height="400"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      </div>
)

export default Video
