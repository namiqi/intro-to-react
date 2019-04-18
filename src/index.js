import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import { red } from 'ansi-colors';


function Hi() {
    var i = 0;
    var myStyle ={
        fontsize:100,
        color:'#dd0000',
    }
    return (
      <div className="App">
        <h1  style={myStyle}>Hello React</h1>
        <h2 data-myattribute="myattr" style={myStyle}>I am coming for you {i-1 == -1 ? 'True' :'False'}</h2>
         {
             //single line comment
         }
        {/*Multi line comment...*/}
      </div>
    );
  }
  

ReactDOM.render(<Hi />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
