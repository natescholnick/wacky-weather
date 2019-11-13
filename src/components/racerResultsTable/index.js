import React from 'react';
import { NavLink } from 'react-router-dom';

const RacerResultsTable = (props) =>
	<div className="row RacerResultsTable">
		<div className="col-md-12">
			<table className="table table-striped table-dark">
			{console.log(props.data)}
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
			    {props.data.map(({
			    	Constructors,
			    	Driver,
			    	points,
			    	position
			    }) =>
			  		<tr key={position}>
			  			<td>{position}</td>
			  			<td><NavLink to={Driver.url}>{Driver.givenName} {Driver.familyName}</NavLink></td>
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