import React from 'react';
import ReactDOM from 'react-dom/client';
import './options.css';

const test = <img src="icon.png" alt="icon" />;

const div = document.createElement('div');
document.body.appendChild(div);
const root = ReactDOM.createRoot(div as HTMLElement);
root.render(test);
