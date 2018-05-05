import React from "react";
import "./App.css";
// "import" allows you to include external component files
import Location from "./Location";
import Weather from "./Weather";

// Class name should be same as file name
class App extends React.Component {
  // Constructor sets up state and initialises any variables
    constructor(){
    super();
    this.state = {
        city: "",
        country: "",
        lat: "",
        lng: "",
        temperature: "",
        description: "",
        image: "",
        textbox: ""
    }
  }
   
  // componentDidMount will execute every time the app opens
  componentDidMount(){
    this.getWeather("Tokyo");
  }
    
  // Note this doesn't work when formatted like " setState(event){}
  // Requires binding of "this" from ES6 arrow function
    
  setCity = event => {
    this.setState({ textbox: event.target.value });
  }
  
  // ${} within backticks "`" denotes a variable
  // Use .json() to convert the response URL to json format
  
  getWeather = location => {
      const apiKey = `2b82c23cac4b047755e6cb97561de11e`;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
      return fetch(url)
        .then(res => res.json())
        .then(json => {
          this.setState({
            city: json.name,
            country: json.sys.country,
            lat: json.coord.lat,
            lng: json.coord.lon,
            temperature: Math.floor(json.main.temp),
            description: json.weather[0].description,
            image: json.weather[0].main
          });  
        });
  };
  
  handleSubmit = () => {
      this.getWeather(this.state.textbox);
  };
    
  // Always remember to include render for visibility on the page
    render (){
      return (
        <div className="weather-app__container">
          <div className="weather-app__searchbar">
            <input 
              className="weather-app__textbox"
              placeholder="Search a city"
              value={this.state.textbox}
              onChange={this.setCity}
            />
            <button
              className="weather-app__button"
              onClick={this.handleSubmit}>
              Find
            </button>
          </div>
          
          <Location
            city={this.state.city}
            country={this.state.country}
            lat={this.state.lat}
            lng={this.state.lng}
          />
          
          <Weather
            temperature={this.state.temperature}
            description={this.state.description}
            image={this.state.image}
          />
        </div>
      )
  }
}

export default App;

          // Note that React uses className instead of just class
          // className links the element to the CSS
          // Elements always need to be nested - usually within a div

          // Include components with brackets "<" and ">" to indicate HTML
          // Backticks "\" allow variables to be concatenated with strings

          // Note the difference between placeholder and value for input - value is not editable

          // If code needs comments, refactor it