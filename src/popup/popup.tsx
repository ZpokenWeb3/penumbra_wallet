import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { getCompactBlockRange } from '../utils/getCompactBlockRange';

const App: React.FC<{}> = () => {
  useEffect(() => {
    getCompactBlockRange();
  }, []);
  return <div>Popup Page</div>;
};

const div = document.createElement('div');
document.body.appendChild(div);
const root = ReactDOM.createRoot(div as HTMLElement);
root.render(<App />);
