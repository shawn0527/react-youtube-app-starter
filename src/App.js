import React, { Component } from "react";
import SearchForm from './SearchForm'
import CurrentVideo from './CurrentVideo'
import VideoList from './VideoList'
import api_key from './keys'

class App extends Component {
  constructor() {
    super()
    this.state = {
      videos:[],
      currentVideo: {
        id:{
          videoId: ''   
        },
        snippet:{
          title:'',
          channleTitle: ''
        }
      },
      searchTerm: ''
    }
  }

  componentDidMount() {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${api_key.API_KEY}&q=${this.state.searchTerm}&type=video`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        videos: data.items,
        currentVideo: data.items[0]
      })
    })
  }

  search = (e) => {
    e.preventDefault()
    this.setState({
      searchTerm:e.target.children[0].value
    })

    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${api_key.API_KEY}&q=${e.target.children[0].value}&type=video`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        videos: data.items,
        currentVideo: data.items[0]
      })
    })
  }


  chooseVideo = (e) => {
    e.preventDefault()
    let video = this.state.videos.find(video => video.id.videoId === e.target.parentElement.id)
    this.setState({
      currentVideo: video
    })
  }

  render() {
    return(
      <div>
        <SearchForm search={this.search}/>
        <CurrentVideo currentVideo={this.state.currentVideo}/>
        <VideoList videos={this.state.videos} chooseVideo={this.chooseVideo}/>
      </div>
    )
  }
}

export default App;
