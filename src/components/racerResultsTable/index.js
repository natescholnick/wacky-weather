import React from 'react';
import './index.css';

const RacerResultsTable = (props) =>
	<div className="row RacerResultsTable">
		<div className="col-md-12">
			<table className="table table-striped table-dark">
			  <thead>
			    <tr>
			      <th>Position</th>
			      <th>Name</th>
			      <th>Nationality</th>
			      <th>Sponsor</th>
			      <th>Points</th>
			    </tr>
			  </thead>
			  <tbody>
			    {props.standings.map(({
			    	Constructors,
			    	Driver,
			    	points,
			    	position
			    }) =>
			  		<tr key={position}>
			  			<td>{position}</td>
			  			<td><a target="_blank" rel="noopener noreferrer" href={Driver.url}>{Driver.givenName} {Driver.familyName}</a></td>
			  			<td>{Driver.nationality}</td>
			  			<td>{Constructors[0].name}</td>
			  			<td>{points}</td>
			    	</tr>
			  		)}
			  </tbody>
			</table>
		</div>
	</div>

export default RacerResultsTable;
