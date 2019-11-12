import React, {Component} from 'react';
import './index.css';
import WeatherTitle from '../../components/weatherTitle';
import WeatherForm from '../../components/weatherForm';
import WeatherInfo from '../../components/weatherInfo';
import API_KEY from '../../config.js';


class Home extends Component {
  constructor() {
    super();

    this.state = {
      data : [],
      API_KEY : '',
    }
  }

  componentDidMount() {
    // if the name of the variable to be set is the same as the key inside of the state, you do not need to write out both. You can simply write out the single name.
    this.setState({ API_KEY });
  }

  getWeather = async(e) => {
    e.preventDefault();

    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;

    // TODO: query weather API with city and country
    // TODO 2: Turn response into JSON
    // TODO 3: Update state data with JSON response
  }

  render() {
    return(
      <div className='row'>
        <div className="col-md-4">
          <WeatherTitle />
        </div>
        <div className="col-md-8">
          <WeatherForm getWeather={this.getWeather} />
          <WeatherInfo />
        </div>
      </div>
    );
  }
}

export default Home;
