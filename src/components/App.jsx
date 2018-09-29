import React, { Component } from 'react';
import imgData from '../imgData';
import carouselData from '../carouselData';
import ImgPresentation from './ImgPresentation';
import Carousel from './Carousel';
import '../css/App.css';

/* NOTES:
    - Could lazyload images, but not worth in this case with only three.
    - shouldComponentUpdate is handled by PureComponent.
*/

class App extends Component {
  constructor() {
    super();
    this.state = {
      imgData: {},
      moviesArray: {},
    };
  }

  componentDidMount() {
    // I'm importing all data from a json file to emulate real-world use cases.
    this.setState({ imgData, moviesArray });
  }

  render() {
    // TODO: Carousel
    const { one, two, three } = this.state.imgData;
    const { moviesArray } = this.state.moviesArray;
    return (
      <div className="App">
        <section className="carousel">
          <Carousel moviesArray />
        </section>
        <section className="white">
          <ImgPresentation title={one.title} content={one.content} image={one.image} dir="left" />
        </section>
        <section className="gradient">
          <ImgPresentation title={two.title} content={two.content} image={two.image} dir="right" />
          <ImgPresentation title={three.title} content={three.content} image={three.image} dir="left" />
        </section>
      </div>
    );
  }
}

export default App;
