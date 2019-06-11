import React from 'react'
const embedUrl = (videoId) => `https://www.youtube.com/embed/${videoId}`

const Video = (props) => {
    return(
        <div id={props.video.id.videoId}>
            <iframe title={props.video.id.videoId} src={embedUrl(props.video.id.videoId)} onClick={props.chooseVideo}/><br></br>
            <a onClick={props.chooseVideo}>{props.video.snippet.title}</a>
            <p>{props.video.snippet.channelTitle}</p>
        </div>
    )
}

export default Video