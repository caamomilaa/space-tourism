//titulo de la pagina > 01 Pick your destination

import { v4 } from 'uuid';

// cada uno de los destinos:

//IMG planeta
//taps

//titulo
//texto

//km
//dias

const MOON = {
  id: v4(),
  images: '/assets/images/destination/image-moon.png',
  title: 'MOON',
  text: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
  distance: '384,400 KM',
  days: '3 DAYS'
};
const MARS = {
  id: v4(),
  images: '/assets/images/destination/image-mars.png',
  title: 'MARS',
  text: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
  distance: '225 MIL. KM',
  days: '9 MONTHS'
};
const EUROPA = {
  id: v4(),
  images: '/assets/images/destination/image-europa.png',
  title: 'EUROPA',
  text: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
  distance: '628 MIL. KM',
  days: '3 YEARS'
};
const TITAN = {
  id: v4(),
  images: '/assets/images/destination/image-titan.png',
  title: 'TITAN',
  text: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
  distance: '1.6 BIL. KM',
  days: '7 YEARS'
};

export const DESTINATIONS_INFO = {
  MOON: MOON,
  MARS: MARS,
  EUROPA: EUROPA,
  TITAN: TITAN
};

//0,1,2,3
