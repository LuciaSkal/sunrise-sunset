import { Sunrise } from '../Sunrise';

export const Main = () => {
  const main = document.createElement('main');
  main.classList.add('container');
  main.appendChild(Sunrise({ city: 'Praze', lat: 50.083333, lon: 14.416667 }));
  main.appendChild(Sunrise({ city: 'Brně', lat: 49.195278, lon: 16.608333 }));
  main.appendChild(Sunrise({ city: 'Ostravě', lat: 49.820923, lon: 18.262524 }));
  main.appendChild(Sunrise({ city: 'Kladně', lat: 50.147018, lon: 14.103270 }));
  main.appendChild(Sunrise({ city: 'Plzni', lat: 49.746840, lon: 13.376990 }));

  return main;
}