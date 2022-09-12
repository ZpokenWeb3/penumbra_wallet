import React from 'react';
import ReactDOM from 'react-dom/client';
import './popup.css';

const App: React.FC<{}> = () => {
  return <div>asd</div>;
};

const div = document.createElement('div');
document.body.appendChild(div);
const root = ReactDOM.createRoot(div as HTMLElement);
root.render(<App />);
