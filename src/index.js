import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Progress from './components/Progress';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
const multibtn = () => {
  var output =[];
  for (let i = 0; i < 5; i++) 
    output.push(<button>我是{i}號按鈕</button>)
    return output;
};

function Btn(props){
  return(
    <button>{props.children}</button>
    );
}
const printMessage = ()=>{
  document.getElementById('show-area').innerHTML = "clicked";
}

ReactDOM.render(<div><Btn>加上一些字</Btn><div id="show-area"></div><Progress /></div>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
