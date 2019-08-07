import React, { Component } from 'react'
import Bomb from './Bomb'

class ImageSlider extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentSlideIndex: 0
    }
  }

  render() {
      return <h1>I am on slide {this.state.currentSlideIndex}</h1>
  }


}

export default ImageSlider;
