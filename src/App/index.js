import { Header } from '../Header'
import { Main } from '../Main'


export const App = () => {
  const container = document.createElement('div');
  container.classList.add('container');

  container.appendChild(Header());
  container.appendChild(Main());


  return container;
}

