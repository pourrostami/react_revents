import React from 'react';
import ReactDOM from 'react-dom';

import './app/layout/style.css';

import App from './app/layout/App.jsx';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const rootEL= document.getElementById('root');

// function render(){
//   ReactDOM.render(<App/>,rootEL);
// };

// if(module.hot){
//   module.hot.accept('./App',function(){
//     setTimeout(render);
//   });
// };

// render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
