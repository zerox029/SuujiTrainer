import React, { Component } from 'react';

import './Settings.styles.css';

export default class Settings extends Component {
  render() {
    return (
      <div className="settings">
        <div className="bounds">
          <p className="settingName">Bounds</p>
          <div>
            <label htmlFor="minimum">Minimum: </label>
            <input type="number" name="minimum" id="minimum" placeholder="0" onChange={(e) => this.props.handleSettingsChange(e)} />
          </div>
          <div>
            <label htmlFor="minimum">Maximum: </label>
            <input type="number" name="maximum" id="maximum" placeholder="1000" onChange={(e) => this.props.handleSettingsChange(e)} />
          </div>
        </div>
        <div className="speed">
          <p className="settingName">Speed</p>
          <input type="number" name="speed" id="speed" placeholder="1" onChange={(e) => this.props.handleSettingsChange(e)} />
        </div>
        <div className="miscelaneous">
          <p className="settingName">Miscelaneous</p>
          <div>
            <label htmlFor="autoplay">Autoplay</label>
            <input type="checkbox" name="autoplay" id="autoplay" onChange={(e) => this.props.handleSettingsChange(e)} defaultChecked/>
          </div>
          <div>
            <label htmlFor="gameType">Game Type</label>
            <select name="gameType" id="gameType">
              <option value="integers">Integers</option>
              <option value="decimals">Decimals</option>
              <option value="years">Years</option>
              <option value="mixed">Mixed</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}
