import React from 'react';
import Particles from 'react-particles-js';
import AnswerSection from './components/AnswerSection/AnswerSection.component';
import Settings from './components/SettingsSection/Settings.component';

import particlesOptions from './particles.json';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      synth: window.speechSynthesis,
      currentNumber: 100,
      score: 0,
      minimum: 0,
      maximum: 1000,
      speed: 1.0,
      settingsVisible: false
    }
  }

  componentDidMount = () => {
    this.generateNumber();
    console.log("did mount")
  }

  generateNumber = () => {
    let {minimum, maximum} = this.state;
    
    minimum = Math.floor(minimum);
    maximum = Math.ceil(maximum);

    let finalNumber = Math.floor(Math.random() * ((maximum + 1) - minimum) + minimum);

    this.setState({currentNumber: finalNumber})
  }

  utterNumber = () => {
    let {speed} = this.state;

    let numberUtterance = new SpeechSynthesisUtterance(this.state.currentNumber);
    
    numberUtterance.rate = Math.max(0.1, Math.min(3.0, speed));

    this.state.synth.speak(numberUtterance);
  }

  handleSettingsChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: parseFloat(value) });
  }

  handleValidAnswer = () => {
    let currentScore = this.state.score;
    this.setState({score: currentScore + 1});
    this.generateNumber();
  }

  render = () => {
    return (
      <div className="App">
        <Particles options={particlesOptions}/>
        
        <h1 className="title">数字トレーナー</h1>

        <div className="playArea">
          <h2>{this.state.score} point{this.state.score !== 1 ? "s" : ""}</h2>
          <AnswerSection 
            speak={() => this.utterNumber()} 
            validate={(input) => this.validateNumber(input)}
            currentNumber={this.state.currentNumber}
            onValidAnswer={this.handleValidAnswer} />
          <Settings 
            handleSettingsChange={(e) => this.handleSettingsChange(e)} 
            visible={this.state.settingsVisible} 
            onMouseEnter={() => this.setState({settingsVisible: true})} 
            onMouseLeave={() => this.setState({settingsVisible: false})}  />
          <div className="settingsToggle" onMouseEnter={() => this.setState({settingsVisible: true})} onMouseLeave={() => this.setState({settingsVisible: false})}></div>
        </div>
      </div>
    );
  }
}
