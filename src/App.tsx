import { letterBlip } from './letter-blip.js';
import './App.css';

function parallax() {
  document.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop * -0.5;
    const parallaxBg = document.getElementById('parallax-bg');
    parallaxBg?.style.setProperty('top', String(scrollTop) + 'px');
  });
}

function doAnimate() {
  letterBlip('.text-blob').animate();
}
function App() {
  requestAnimationFrame(() => {
    doAnimate();
    parallax();
  });

  return (
    <>
      <div
        className="App"
        id="parallax-bg"
        style={{
          // zIndex: -0,
          top: 0,
          left: 0,
          position: 'absolute',
          height: '120vh',
          width: '100vw',
          // overflow: 'scroll',
        }}></div>
      <h1
        className="text-blob"
        onClick={doAnimate}
        style={{ position: 'relative' }}>
        Jake Nelken
      </h1>
      <div
        style={{
          // position: 'relative',
          width: '100vw',
          display: 'absolute',
          bottom: '0px',
        }}>
        <p className="help" style={{ position: 'absolute' }}>
          Learn more
        </p>
      </div>
    </>
  );
}

export default App;
