import React from "react";

// Class name should be same as file name
const Weather = props => (   
  <div>
    <img src={`/${props.image}.svg`} alt="weather condition" />
    <div className="weather__description">{props.description}</div>
    <div className="weather__temperature-container">
      <div className="weather__temperature">{props.temperature}</div>
      <div className="weather__celsius">{'\u00B0c'}</div>
    </div>
  </div>
)

// "export default" needs to use file name too
// It then needs to be imported into app.js

export default Weather;

          // Note that React uses className instead of just class
          // className links the element to the CSS
          // Elements always need to be nested - usually within a div

          // Include components with brackets "<" and ">" to indicate HTML
          // Backticks "\" allow variables to be concatenated with strings
            // "${VARIABLE}" indicates a variable
        // Note you do not need constructor to pass in props - just pass them in App.js