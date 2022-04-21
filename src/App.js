import logo from './logo.svg';
import './App.css';
import ReactAnime from 'react-animejs'
const { Anime, stagger } = ReactAnime

function App() {
  let colors = ['blue', 'green', 'red'];
  return (
    <div className="flex justify-center items-center my-10">
      <div className='w-[300px] h-[600px] bg-[#6149F9]'>

        <Anime
          initial={[
            {
              targets: '#header',
              translateX: 100,
              easing: 'easeOutExpo',
              opacity: 1,
              duration: 1000
            }, {
              targets: '#logo',
              translateX: 100,
              opacity: 1,
              easing: 'easeOutExpo',
              duration: 750
            },
            {
              targets: '#content',
              translateX: 50,
              opacity: 1,
              easing: 'easeOutExpo',
              duration: 750
            }, {
              targets: "#cta",
              translateX: 50,
              opacity: 1,
              easing: 'easeOutExpo',
              duration: 1000
            }
          ]}
        >
          <h1 id="header" className='text-3xl font-bold text-white opacity-0 my-8'>Hurdl</h1>
        </Anime>
        <img id="logo" src={logo} className="h-[200px] w-[200px] opacity-0 relative right-[50px]" alt="logo" />
        <p id="content" className='text-3xl font-bold text-white opacity-0'>Start growing<br />
          your business<br />
          starting at<br />
          $7.99/mo.</p>
        <button id="cta" className='h-[40px] w-[150px] bg-white px-[10px] opacity-0 my-8'>Learn more</button>
      </div>
    </div>
  );
}

export default App;
