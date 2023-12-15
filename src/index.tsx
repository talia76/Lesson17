/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-tag-spacing */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CityPage from './CityPage/CityPage';
import Counter from './Counter/Counter';
import Sandwich from './Sandwich/Sandwich';
import Consult from './Consult/Consult';
import Sandwiches from './Sandwiches/Sandwiches';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App/>
    <CityPage/>
    <Counter/>
    <Sandwich/>
    <Consult/>
    <Sandwiches/>
    </React.StrictMode>
);
