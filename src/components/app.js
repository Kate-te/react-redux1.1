import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from './searchBar';
import VideoList from './videoList';
import VideoDetail from './videoDetail';

const API_KEY ='AIzaSyCuquztkNr-iQXzkCR_5DI20FMjTnAoAnU';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = { 
      videos: [],
    selectedVideo: null };

    this.videoSearch('music');

  }

   videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
      //setState({videos}) means {videos: videos}
    });
   }

  render() {
    const videoSearch =_.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div>
        <center>That is our App</center>
        <SearchBar onVideoSearch={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos}/>
      </div>
    );
  }
}
