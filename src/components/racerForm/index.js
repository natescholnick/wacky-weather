import React from 'react';
import './index.css';

const RacerForm = (props) =>
  <div className="row RacerForm">
    <div className="col-md-12">
      <form onSubmit={props.getRaceResults}>
        <input type="text" name="season" placeholder="Season..." />
        <input type="text" name="round" placeholder="Round..." />
        <input type="submit" value="Get Standings" />
      </form>
    </div>
  </div>

export default RacerForm;
