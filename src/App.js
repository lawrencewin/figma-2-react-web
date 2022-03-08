import {useState} from 'react';
import './App.css';
import logo from './assets/convergent-logo.png';
import demo_day from './assets/demo_day_1.jpeg';
import kickoff from './assets/kickoff_1.jpeg';
import officers from './assets/officers2.jpeg';

function Slideshow (props) {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((index + 1) % props.images.length)
  }

  const handlePrev = () => {
    setIndex((index - 1) % props.images.length)
  }

  return (
    <div className="slideshow">
      <button className="slideshowButton" onClick={handlePrev}>❮</button>
      <div className="slideshowImages">
        { props.images.map((imageUrl, idx) => {
          return <img style={{ opacity: Math.abs(index) === idx ? 1 : 0 }} src={imageUrl}/>
        })}
      </div>
      <button className="slideshowButton" onClick={handleNext}>❯</button>
    </div>
  )
}

function App() {

  return (
    <div className="app">
      <img className="logo" src={logo} alt="Texas Convergent Logo" />
      <h1 className="title">Texas <span className="blue">Convergent</span></h1>
      <div className="subtitle">Enabling innovation at the intersection of technology, business, and design.</div>
      <div className="linkButtonContainer">
        <a className="linkButton blue" href="https://www.txconvergent.org/join">Join Convergent</a>
        <a className="linkButton" href="https://www.txconvergent.org/buildteams">Learn More About Build Teams</a>
        <a className="linkButton" href="https://www.txconvergent.org/">Learn More About Forge</a>
      </div>
      <Slideshow images={[demo_day, kickoff, officers]} />
    </div>
  );
}

export default App;
