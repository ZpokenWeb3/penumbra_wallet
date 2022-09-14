const OPEN_WEATHER_API_KEY = '3daadbb78fa3fb35632f1454e5a4ab0c';
const URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function fetchOpenDataWeather(city: string): Promise<any> {
  try {
    const res = await fetch(
      `${URL}?units=metric&q=${city}&appid=${OPEN_WEATHER_API_KEY}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('fetchData:', error);
  }
}
