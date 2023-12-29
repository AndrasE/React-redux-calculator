import React, { useState } from "react";
import uselocalStorage from "use-local-storage";
import { Counter } from "./components/Counter";
import Buttons from "./components/Buttons";
import History from "./components/History";
import Chuck from "./components/Chuck";
import About from "./components/About";
import MoreAbout from "./components/MoreAbout";
import useSound from "use-sound";
import click from "./sounds/click.mp3";
import "./index.css";

function App() {
  const [theme, setTheme] = uselocalStorage("theme" ? "dark" : "light");
  const [soundIcon, setSoundIcon] = uselocalStorage("soundIcon" ? "normal" : "silent");
  const [soundVolume, setSoundVolume] = uselocalStorage(0.8 ? 0 : 0.8)

  const [showHistory, setShowHistory] = useState(false);
  const [showChuck, setShowChuck] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showMoreAbout, setShowMoreAbout] = useState(false);
 
  

  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  
  const [playSound] = useSound(click, { volume: soundVolume});

  const switchSoundIcon = () => {
    const newSoundIcon = soundIcon === "normal" ? "silent" : "normal";
    setSoundIcon(newSoundIcon);
    const newSoundVolume = soundVolume === 0.8 ? 0 : 0.8;
    setSoundVolume(newSoundVolume)
  };

  function toggleShowHistory() {
    setShowHistory((prevState) => !prevState);
  }

  function toggleShowChuck() {
    setShowChuck((prevState) => !prevState);
  }

  function toggleShowAbout() {
    setShowAbout((prevState) => !prevState);
  }

  function toggleShowMoreAbout() {
    setShowMoreAbout((prevState) => !prevState);
  }

  return (
    <div className="App" data-theme={theme}>
      <Buttons
        changeTheme={switchTheme}
        theme={theme}
        toggleShowChuck={toggleShowChuck}
        toggleShowAbout={toggleShowAbout}
        changeSoundIcon={switchSoundIcon}
        soundIcon={soundIcon}
        playSound={playSound}
      />
      <Counter toggleShowHistory={toggleShowHistory} playSound={playSound} />
      <History
        showHistory={showHistory}
        toggleShowHistory={toggleShowHistory}
        playSound={playSound}
      />
      <Chuck
        showChuck={showChuck}
        toggleShowChuck={toggleShowChuck}
        playSound={playSound}
      />
      <About
        showAbout={showAbout}
        toggleShowAbout={toggleShowAbout}
        toggleShowMoreAbout={toggleShowMoreAbout}
        playSound={playSound}
      />
      <MoreAbout
        showMoreAbout={showMoreAbout}
        toggleShowMoreAbout={toggleShowMoreAbout}
        playSound={playSound}
      />
    </div>
  );
}

export default App;
