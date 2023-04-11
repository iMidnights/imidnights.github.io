import { ChangeEvent, useEffect, useRef, useState } from 'react'
import Typed from 'typed.js';

import reactLogo from './assets/logo.png'
import './App.css'

import classes from './App.module.css'

function App() {
  const [count, setCount] = useState(0)

  const el = useRef(null);

  const fonts = ["Hanken Grotesk", "Open Sans", "Lato", "Raleway", "Source Sans Pro", "Nunito", "Montserrat", "Poppins"];

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        '<span class="red">test</span>', 
        '<span class="orange">asd</span>',
        '<span class="yellow">asdfasd</span>',
        '<span class="green">xvczw</span>',
        '<span class="blue">wdcsxc</span>',
        '<span class="indigo">wefqw</span>',
        '<span class="purple">zxbf</span>',
      ],
      typeSpeed: 50,
      smartBackspace: true, // Default value
      shuffle: false,
      backDelay: 1000,
      loop: true,

    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const font = localStorage.getItem("font");
    if (font) {
      document.body.style.fontFamily = font;
    }
  }, []);

  function handleFontChange(event: ChangeEvent<HTMLSelectElement>): void {
    const selectedFont = event.target.value;
    const bodyElement = document.body;
    bodyElement.style.fontFamily = selectedFont;

    // save font to local storage
    localStorage.setItem("font", selectedFont);
  }

  return (
    <div className="App">
      <a href="https://reactjs.org" target="_blank">
        <img src={reactLogo} className={`${classes.logo} react`} alt="React logo" />
      </a>
      <h1 className={classes.title}>iMidnight Portfolio</h1>
        <span className={classes.typer} ref={el}></span>
        <p>
          Select a font to try
        </p>
        <select
          onChange={handleFontChange}
            
        >
          {fonts.map((font) => (
            <option value={font}>{font}</option>
          ))}
        </select>
    </div>
  )
}

export default App
