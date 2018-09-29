/*
  Movie data for the carousel, array because the ordering doesn't
  matter *as* much and I want to render these iteratively.
*/

import movieImg1 from './img/movieImg1.jpg';
import movieImg2 from './img/movieImg2.jpg';
import movieImg3 from './img/movieImg3.jpg';

export default [
  {
    title: 'The Grand Budapest Hotel',
    blurb: 'The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka between the first and second World Wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.',
    image: movieImg1,
  },
  {
    title: 'Isle of Dogs',
    blurb: 'When, by executive decree, all the canine pets of Megasaki City are exiled to a vast garbage-dump called Trash Island, 12-year-old Atari sets off alone in a miniature Junior-Turbo Prop and flies across the river in search of his bodyguard-dog, Spots.',
    image: movieImg2,
  },
  {
    title: 'Moonrise Kingdom',
    blurb: 'A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.',
    image: movieImg3,
  },
];
