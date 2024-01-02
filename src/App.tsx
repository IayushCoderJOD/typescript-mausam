import './App.css';

function App() {
  const main_app_wali_img = "https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?cs=srgb&dl=pexels-pixabay-209831.jpg&fm=jpg";
  const sabse_peeche_wali_img="https://png.pngtree.com/thumb_back/fh260/back_pic/00/05/33/86562656f65b38e.png";

  return (
    <div className='relative w-screen h-screen bg-gray-700 '    >
      <div className='absolute z-50 text-gray-800 rounded-3xl shadow-2xl h-[500px] w-[400px] p-16 pt-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' style={{ backgroundImage: `url(${main_app_wali_img})`, backgroundSize: 'cover' }}>
        <p className='font-semibold font-serif text-gray-900 text-3xl pl-[12%]'>Mausam App</p>
        <div className='mt-6  flex' >
        <input className='rounded-full p-2 border text-xl shadow-2xl border-gray-950 w-[90%] ' type="text" placeholder='Search the city'/> 
        <button   className='text-2xl p-1 m-1 bg-gray-100 border hover:bg-gray-300 border-black rounded-full shadow-2xl' >🔍</button>
        </div>
        <div className='flex flex-col justify-center items-center' >
        <h1 className='text-white font-semibold text-7xl mt-7  ' >23* C</h1>
        <h1 className='text-white font-serif font-medium text-4xl  mt-14 ' >London</h1>
        </div>
        <div className='flex justify-center items-center' >
        <ul className='flex text-white mt-20 '>
          <li  className='bg-black p-2 m-2 shadow-2xl rounded-2xl bg-opacity-85 '   >Humidity</li>
          <li className='bg-black p-2 m-2 shadow-2xl rounded-2xl bg-opacity-85 '  >Wind Speed</li>
        </ul>
        </div>

      </div>
    </div>
  );
}

export default App;
