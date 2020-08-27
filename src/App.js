import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from "./components/Game.js"
import Squirrelpic from "./images/squirrel.png"
import Bunnypic from "./images/bunny.png"
import Houndpic from "./images/hound.png"
import Raccoonpic from "./images/raccoon.png"


function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: Raccoonpic
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: Squirrelpic
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: Bunnypic
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: Houndpic
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}

export default App;