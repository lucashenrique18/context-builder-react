import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Context from './context/Context'
import App from './app/App'
import './public/fonts/Pacifico-Regular.ttf'
import './public/fonts/OpenSans-Regular.ttf'
import './index.css'

const Index = () =>  (
  <Context>
    <App />
  </Context>
)

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);