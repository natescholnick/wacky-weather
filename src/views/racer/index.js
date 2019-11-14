import React, {Component} from 'react';
import './index.css';
import RacerForm from '../../components/racerForm';
import RacerResultsTable from '../../components/racerResultsTable';


class Racer extends Component{
	constructor() {
		super();

		this.state = {
			standings: undefined,
		}
	}

	getRaceResults = async(e) => {
		e.preventDefault();

		let season = e.target.elements.season.value;
		let round = e.target.elements.round.value;
		const URL = `https://ergast.com/api/f1/${season}/${round}/driverStandings.json`

		fetch(URL)
			.then(res => res.json())
			.then(data => this.setState({ standings: data.MRData.StandingsTable.StandingsLists[0].DriverStandings }))
			.catch(err => {
				console.log(err);
			});
	}

render() {
	console.log(this.standings)
	  return(
	    <div className='row'>
	    	<div className="col-md-8 offset-md-2">
	        <RacerForm getRaceResults={this.getRaceResults} />
	        <RacerResultsTable standings={this.standings} />
	      </div>
	    </div>
    );
  }
}

export default Racer;
