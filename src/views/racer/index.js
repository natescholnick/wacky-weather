import React, {Component} from 'react';
import './index.css';
import RacerForm from '../../components/racerForm';
import RacerResultsTable from '../../components/racerResultsTable';


class Racer extends Component{
	constructor() {
		super();

		this.state = {
			data: undefined,
		}
	}

	getRaceResults = async(e) => {
		e.preventDefault();

		let season = e.target.elements.season.value;
		let round = e.target.elements.round.value;
		const URL = `http://ergast.com/api/f1/${season}/${round}/driverStandings.json`

		let response = await fetch(URL);
		let data = await response.json();
		this.setState({ data })
	}

  render() {
  	const targetData = this.state.data && this.state.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    return(
      <div className='row'>
      	<div className="col-md-8 offset-md-2">
	        <RacerForm getRaceResults={this.getRaceResults} />
	        {this.state.data && <RacerResultsTable data={targetData} />}
	      </div>
      </div>
    );
  }
}

export default Racer;
