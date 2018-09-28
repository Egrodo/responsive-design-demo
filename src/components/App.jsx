import React, { Component } from 'react';
import DATA from '../data';
import ImgPresentation from './ImgPresentation';
import '../css/App.css';

class App extends Component {
  // TODO: js-css.
  constructor() {
    super();
    this.state = {
      one: {},
      two: {},
      three: {},
    };
  }

  componentDidMount() {
    // I'm importing all data from a json file that way it'd be usable in real-world cases.
    this.setState(DATA);
  }

  render() {
    // TODO: Refactor ImgPresentation to a carosel.
    const { one, two, three } = this.state;
    return (
      <div className="App">
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
