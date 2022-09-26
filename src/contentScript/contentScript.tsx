// const s = document.createElement('script');
// s.src = chrome.runtime.getURL('injectStart.js');
// s.onload = function () {
//   (this as any).remove();
// };
// (document.head || document.documentElement).appendChild(s);

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { getCompactBlockRange } from '../utils/getCompactBlockRange';

const App: React.FC<{}> = () => {
  useEffect(() => {
    console.log('asasd');
    
    getCompactBlockRange();
  }, []);

  return null;
};
const div = document.createElement('div');
document.body.appendChild(div);
const root = ReactDOM.createRoot(div as HTMLElement);
root.render(<App />);
