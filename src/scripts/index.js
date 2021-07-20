import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}


import VanillaApp from './App/Vanilla/App.js';
import ReactApp from './App/React/App.js';


const vanillaApp = new VanillaApp("rootVanilla");
const reactApp = new ReactApp("rootReact");

window.vanillaApp = vanillaApp;
window.reactApp = reactApp;