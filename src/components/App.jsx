import React from 'react';
import imgData from '../imgData';
import carouselData from '../carouselData';
import ImgPresentation from './ImgPresentation';
import CarouselContainer from './CarouselContainer';
import bgImg from '../img/background1.jpg';
import '../css/App.css';

const App = () => {
  // In a real world example data would likely be coming from an API,
  // so I'd have a class component and set it to the state in componentDidMount.
  const { one, two, three } = imgData;
  return (
    <div className="App">
      <section className="carousel">
        <img className="bgImg" src={bgImg} alt="background" />
        <CarouselContainer moviesArray={carouselData} />
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
};

export default App;
