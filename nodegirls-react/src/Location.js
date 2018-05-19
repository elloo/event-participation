// This is a stateless component - streamlined, easier-to-read and faster to execute

import React from "react";

// Class name should be same as file name
 const Location = props => (
  <div className="location__container">
    <div className="location__city">{props.city}</div>           
    <div className="location__country">{props.country}</div>
    <div className="location__lnglat">
      LAT: {props.lat} / LNG: {props.lng} 
    </div>
  </div>
);

// "export default" needs to use file name too
// It then needs to be imported into app.js
export default Location;

          // Note that React uses className instead of just class 
          // Elements always need to be nested - usually within a div

          // JSX allows you to include JS in curly braces within HTML

          // Don't include comments within return or they will render on the page