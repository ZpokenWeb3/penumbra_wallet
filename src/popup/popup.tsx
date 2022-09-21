import React from 'react';
import ReactDOM from 'react-dom/client';

const App: React.FC<{}> = () => {
  return <div>Popup Page</div>;
};

const div = document.createElement('div');
document.body.appendChild(div);
const root = ReactDOM.createRoot(div as HTMLElement);
root.render(<App />);
