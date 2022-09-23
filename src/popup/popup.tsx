import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { getCompactBlockRange } from '../utils/getCompactBlockRange';
import './popup.css';

const App: React.FC<{}> = () => {
  useEffect(() => {
    getCompactBlockRange();
  }, []);
  return <div className="body">Popup Page</div>;
};

const div = document.createElement('div');
document.body.appendChild(div);
const root = ReactDOM.createRoot(div as HTMLElement);
root.render(<App />);
