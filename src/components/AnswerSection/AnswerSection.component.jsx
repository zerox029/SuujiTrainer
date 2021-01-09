import React from 'react'
import {ReactComponent as PlayBtn} from '../../assets/play-solid.svg';

import './AnswerSection.styles.css';

export default class AnswerSection extends React.Component {
  render() {
    return (
      <div className="answerSection">
        <button className="playBtn" onClick={this.props.speak}>Play <PlayBtn className="playBtnSvg" /></button>
        <input type="number" name="answer" id="answer" onChange={(e) => this.props.validate(e.target.value)}/>
      </div>
    )
  }
}
