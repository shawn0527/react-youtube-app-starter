import React from 'react'
const embedUrl = (videoId) => `https://www.youtube.com/embed/${videoId}`

const VideoList = (props) => {
    return(
        <div>
            <iframe title={props.currentVideo.id.videoId} src={embedUrl(props.currentVideo.id.videoId)} />
            <p>{props.currentVideo.snippet.title}</p>
            <p>{props.currentVideo.snippet.channelTitle}</p>
        </div>
    )
}

export default VideoList