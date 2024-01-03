import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const cityName = useRef<HTMLInputElement>(null);
  const [city, setCity] = useState<string>('Ghaziabad');
  const [temp, setTemp] = useState<number>(12);
  const [humid, setHumid] = useState<number>(12);
  const [wind, setWind] = useState<number>(12);

  const handleSearch = () => {
    const enteredCity = cityName.current?.value ?? '';
    setCity(enteredCity);
  };

  const giveCityData = async () => {
    try {
      const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=02bf1c04bdf227db1507f9ddefb20b63&units=metric`);
      const json = await data.json();
      console.log(json)
      const temp = Math.round(json.main.temp);
      const humid = Math.round(json.main.humidity);
      const wind = json.wind.speed;
      setTemp(temp);
      setWind(wind);
      setHumid(humid);
      console.log(temp);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    giveCityData(); // Fetch data when component mounts
  }, []); // Empty dependency array means it runs once when component mounts

  useEffect(() => {
    giveCityData(); // Fetch data when 'city' state changes
  }, [city]);

  const main_app_wali_img = "https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?cs=srgb&dl=pexels-pixabay-209831.jpg&fm=jpg";

  return (
    <div className='relative w-screen h-screen bg-gray-700 '    >
      <div className='absolute z-50 text-gray-800 rounded-3xl shadow-2xl h-[500px] w-[400px] p-16 pt-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' style={{ backgroundImage: `url(${main_app_wali_img})`, backgroundSize: 'cover' }}>
        <p className='font-semibold font-serif text-gray-900 text-3xl pl-[12%]'>Mausam App</p>
        <div className='mt-6  flex' >
          <input
            className='rounded-full p-2 border text-xl shadow-2xl border-gray-950 w-[90%]'
            ref={cityName}
            type="text"
            placeholder='Search the city'
          />
          <button
            onClick={handleSearch}
            className='text-2xl p-1 m-1 bg-gray-100 border hover:bg-gray-300 border-black rounded-full shadow-2xl'
          >
            🔍
          </button>
        </div>
        <div className='flex flex-col justify-center items-center' >
          <h1 className='text-white font-semibold text-7xl mt-9 ' >{temp}° C</h1>
          <h1 className='text-white font-serif font-medium text-4xl  mt-14 ' >{city}</h1>
        </div>
        <div className='flex justify-center items-center' >
          <ul className='flex text-white mt-20 '>
            <li className='bg-black p-2 m-2 shadow-2xl rounded-2xl bg-opacity-85 '><span className='ml-4'>{humid}% </span><br /> <span>Humidity</span> </li>
            <li className='bg-black p-2 m-2 shadow-2xl rounded-2xl bg-opacity-85 '><span className='ml-4'>{wind} km/h </span><br /> <span>Wind Speed</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
