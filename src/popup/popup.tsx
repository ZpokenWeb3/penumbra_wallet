import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { fetchOpenDataWeather } from '../utils/api';
import './popup.css';
import { setStoredCities, getStoredCities } from '../utils/storage';
import { getCompactBlockRange } from '../utils/getCompactBlockRange';

const App: React.FC<{}> = () => {
  const [cities, setCities] = useState<string[]>([]);

  const [cityInput, setCityInput] = useState<string>('');

  useEffect(() => {
    getStoredCities().then((cities) => setCities(cities ?? []));
  }, []);

  useEffect(() => {
    fetchOpenDataWeather('Kiev').then((data) => console.log(data));
  }, []);

  // useEffect(() => {
  //   getCompactBlockRange();
  // }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCityInput(e.target.value);

  const handleButton = () => {
    setCities((state) => [...state, cityInput]);
    setStoredCities([...cities, cityInput]);
  };

  console.log({ cities });

  return (
    <div>
      <div>
        <input type="text" value={cityInput} onChange={handleInputChange} />
        <button onClick={handleButton}>Add city</button>
      </div>
      {cities.map((city, index) => (
        <p key={index}>{city}</p>
      ))}
    </div>
  );
};

const div = document.createElement('div');
document.body.appendChild(div);
const root = ReactDOM.createRoot(div as HTMLElement);
root.render(<App />);
