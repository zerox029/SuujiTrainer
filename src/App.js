import React from 'react';
import Particles from 'react-particles-js';
import AnswerSection from './components/AnswerSection/AnswerSection.component';
import particlesOptions from './particles.json';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      synth: window.speechSynthesis,
      currentNumber: this.generateNumber(),
      score: 0
    }
  }

  generateNumber = () => {
    return Math.trunc(Math.random() * 1000);
  }

  utterNumber = () => {
    this.generateNumber();
    let numberUtterance = new SpeechSynthesisUtterance(this.state.currentNumber);
    
    this.state.synth.speak(numberUtterance);
  }

  validateNumber = (input) => {
    if(parseInt(input) === this.state.currentNumber)
    {
      let currentScore = this.state.score;
      this.setState({score: currentScore + 1, 
                    currentNumber: this.generateNumber()});
    }
  }

  render = () => {
    return (
      <div className="App">
        <Particles options={particlesOptions}/>
        
        <h1 className="title">数字トレーナー</h1>

        <div className="playArea">
          <h2>{this.state.score}</h2>
          <AnswerSection speak={() => this.utterNumber()} validate={(input) => this.validateNumber(input)} />
        </div>
      </div>
    );
  }
}
