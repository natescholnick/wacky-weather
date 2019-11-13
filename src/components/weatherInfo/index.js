import React from 'react';
import './index.css';

const WeatherInfo = (props) =>
  <div className="row WeatherInfo">
    <div className="col-md-12">
      {
        props.data.name &&
          <div className="card">
            <h3>City: {props.data.name}</h3>
            <h3>Country: {props.data.sys.country}</h3>
            <h3>Temperature: {props.data.main.temp.toFixed(0)}&deg;</h3>
            <h3>Humidity: {props.data.main.humidity}%</h3>
            <h3>Description: {props.data.weather[0].description}</h3>
          </div>
      }

      {
        props.data.cod === '404' &&
          <h3>Error: {props.data.message}</h3>
      }
    </div>
  </div>

export default WeatherInfo;


// Alternatively done like this before stateless functional components existed:

// class WeatherInfo extends Component{
//   render() {
//     return(
//       <div className="row WeatherInfo">
//         <div className="col-md-12">
//           {
//             this.props.data.name &&
//               <div className="card">
//                 <h3>City: {this.props.data.name}</h3>
//                 <h3>Country: {this.props.data.sys.country}</h3>
//                 <h3>Temperature: {this.props.data.main.temp.toFixed(0)}&deg;</h3>
//                 <h3>Humidity: {this.props.data.main.humidity}%</h3>
//                 <h3>Description: {this.props.data.weather[0].description}</h3>
//               </div>
//           }

//           {
//             this.props.data.cod === '404' &&
//               <h3>Error: {this.props.data.message}</h3>
//           }
//         </div>
//       </div>
//     );
//   }
// }