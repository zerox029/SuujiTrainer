import React, { Component } from 'react';

import './Settings.styles.css';

export default class Settings extends Component {
  render() {
    return (
      <div className={`settings ${this.props.visible ? "" : "hidden"}`} onMouseEnter={() => this.props.onMouseEnter()} onMouseLeave={() => this.props.onMouseLeave()}>
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
      </div>
    )
  }
}
