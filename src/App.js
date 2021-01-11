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
      autoplay: true
    }
  }

  componentDidMount = () => {
    this.generateNumber();
    console.log("did mount")
  }

  generateNumber = () => {
    let {minimum, maximum} = this.state;
    
    minimum = Math.floor(parseFloat(minimum));
    maximum = Math.ceil(parseFloat(maximum));

    let finalNumber = Math.floor(Math.random() * ((maximum + 1) - minimum) + minimum);

    this.setState({currentNumber: finalNumber}, () => {
      if(this.state.autoplay) this.utterNumber();
    })
  }

  utterNumber = () => {
    let {speed} = this.state;

    let numberUtterance = new SpeechSynthesisUtterance(this.state.currentNumber);
    
    numberUtterance.rate = Math.max(0.1, Math.min(3.0, parseFloat(speed)));

    this.state.synth.speak(numberUtterance);
  }

  handleSettingsChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
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
        
        <h1 className="title jpText">数字トレーナー</h1>

        <div className="playArea">
          <h2 className="jpText">{this.state.score} 点</h2>
          <AnswerSection 
            speak={() => this.utterNumber()} 
            validate={(input) => this.validateNumber(input)}
            currentNumber={this.state.currentNumber}
            onValidAnswer={this.handleValidAnswer} />
          <Settings 
            handleSettingsChange={(e) => this.handleSettingsChange(e)} 
            visible={this.state.settingsVisible} />
          <p className="credits">© Étienne Plante 2021</p>
        </div>
      </div>
    );
  }
}
