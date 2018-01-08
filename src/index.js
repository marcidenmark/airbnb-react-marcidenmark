import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './components/hello';
import registerServiceWorker from './registerServiceWorker';


const root = <div>
  <Hello firstName="Mister."lastName="Jens" />
  <Hello firstName="Miss."lastName="Jens" />

</div>;


ReactDOM.render(root, document.getElementById('root'));

//key(name) and value(Marci)



registerServiceWorker();
