import React from 'react';
import './index.css';


const WeatherForm = (props) =>
  <div className="row WeatherForm">
    <div className="col-md-12">
      <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="City..." />
        <input type="text" name="country" placeholder="Country..." />
        <input type="submit" value="Get Weather" />
      </form>
    </div>
  </div>

export default WeatherForm;
