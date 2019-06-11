import React from 'react'
import Video from './Video'

const VideoList = (props) => {
    return(
        <div>
            {props.videos.map(video => <Video video={video} key={video.id.videoId} chooseVideo={props.chooseVideo}/>)}
        </div>
    )
}

export default VideoList