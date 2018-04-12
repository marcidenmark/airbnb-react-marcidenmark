import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';// makes css automatic update when coding
import App from './App';
// import Hello from './components/hello';
import registerServiceWorker from './registerServiceWorker';


// const root = <div>
//   <Hello firstName="Mister."lastName="Jens" />
//   <Hello firstName="Miss."lastName="Jens" />

// </div>;


ReactDOM.render(<App />, document.getElementById('root'));

//key(name) and value(Marci)



registerServiceWorker();
