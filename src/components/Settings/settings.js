import React from 'react'
import Button from '../Button/button'

const Settings = ({ visible,
                    toggleSettingsVisibility,
                    pomoLength,
                    setPomoLength,
                    shortLength,
                    setShortLength,
                    longLength,
                    setLongLength,
                    fontPref,
                    setFontPref,
                    accentColor,
                    setAccentColor,
                    closeSettings,
                    setSecondsLeft,
                    timerMode,
                  }) => {

  const colors = {
    default: '#F87070',
    blue:   '#70F3F8',
    purple: '#D881F8',
  }

  const fonts = {
    kumbh: `'Kumbh Sans', sans-serif`,
    roboto: `'Roboto Slab', serif`,
    space: `'Space Mono', monospace`,
  }

  const styles = document.documentElement.style

  const applySettings = (event) => {
    event.preventDefault()

    setPomoLength(event.target.pomodoro.value)
    setShortLength(event.target.shortBreak.value)
    setLongLength(event.target.longBreak.value)
    closeSettings()

    switch(timerMode) {
      case 'short':
        setSecondsLeft(event.target.shortBreak.value * 60)
        break
      case 'long':
        setSecondsLeft(event.target.longBreak.value * 60)
        break
      default:
        setSecondsLeft(event.target.pomodoro.value * 60)
    }
  }

  if (visible) {
    return (
      <div className="preferences preferences--visible">
      <div className="preferences__pane">
        <Button type="close" buttonText="×" toggleVisibility={toggleSettingsVisibility} />
        <h2>Settings</h2>
        <form onSubmit={applySettings}>
          <div className="pane__time-settings">
            <h3>Time (Minutes)</h3>
            <div action="" className="time-settings__form">
              <label htmlFor="pomodoro">pomodoro</label>
              <input type="number" name="pomodoro" id="pomodoro" min="5" max="90" defaultValue={pomoLength} />
              <label htmlFor="short-break">short break</label>
              <input type="number" name="shortBreak" id="short-break" min="1" max="14" defaultValue={shortLength} />
              <label htmlFor="long-break">long break</label>
              <input type="number" name="longBreak" id="long-break" min="15" max="30" defaultValue={longLength} />
            </div>
          </div>
          <Button type="apply" buttonText="Apply" />
        </form>
      </div>
    </div>
    )
  }
  
  return(null)
}

export default Settings