import React, { Component } from 'react';
import DATA from '../data';
import ImgPresentation from './ImgPresentation';
import '../css/App.css';

class App extends Component {
  // TODO: Two sections, top one white with just one img, bottom one gradient black to white with two.
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
    // For reusability I'm importing all data from a json file. I could do it from an API or something asynchronously instead.
    this.setState(DATA);
  }

  render() {
    // TODO: Refactor imgpresentation to a carosel.
    const { one, two, three } = this.state;
    return (
      <div className="App">
        <section className="white">
          <ImgPresentation title={one.title} content={one.content} image={one.image} />
        </section>
        <section className="gradient">
          <ImgPresentation title={two.title} content={two.content} image={two.image} />
          <ImgPresentation title={three.title} content={three.content} image={three.image} />
        </section>
      </div>
    );
  }
}

export default App;
