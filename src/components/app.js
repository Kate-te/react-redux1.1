import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from './searchBar';
import VideoList from './videoList';

const API_KEY ='AIzaSyCuquztkNr-iQXzkCR_5DI20FMjTnAoAnU';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'music'}, (videos) => {
      this.setState({ videos });
      //what means {videos: videos}
    });
  }

  render() {
    return (
      <div>
        <center>That is our App</center>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}
