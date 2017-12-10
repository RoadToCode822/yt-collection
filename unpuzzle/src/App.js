import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const video = {
  id: 'videoid',
  src: 'http://techslides.com/demos/sample-videos/small.mp4', // link to the video
  poster: '', // link to the image
};

export default class VideoPlayer extends Component {
  constructor(p) {
    super(p)
    this.state = {
      player: null,
    };
  }
  componentDidMount() {
    this.state.player = videojs(video.id);
  }

  componentWillUnmount() {
    this.state.player.dispose();
  }

  render() {
    const {id, src, poster} = video;
    const videoHtml = `
      <video id="${id}" class="video-js vjs-default-skin" controls
       preload="auto" poster="${poster}"
      >
        <source src="${src}" type="video/mp4" />
        <p class="vjs-no-js">
          To view this video please enable JavaScript
        </p>
      </video>
    `
    return (
      <div dangerouslySetInnerHTML={{__html: videoHtml}}></div>
    )
  }
}
