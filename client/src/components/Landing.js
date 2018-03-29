import React, { Component } from 'react';

import './Landing.css';


export default class Landing extends Component {
  render() {
    return (
      <div className="container body-container">

        <div className="row">
          <div className="col-3">
            <ul className="rest-list">
              <li>
                <p>Restaurant Name</p>
                <p>Restaurant Score</p>
                <p>Restaurant Address</p>
                <p>Link To Open Table</p>
              </li>
              <li>
                <p>Restaurant Name</p>
                <p>Restaurant Score</p>
                <p>Restaurant Address</p>
                <p>Link To Open Table</p>
              </li>
              <li>
                <p>Restaurant Name</p>
                <p>Restaurant Score</p>
                <p>Restaurant Address</p>
                <p>Link To Open Table</p>
              </li>
              <li>
                <p>Restaurant Name</p>
                <p>Restaurant Score</p>
                <p>Restaurant Address</p>
                <p>Link To Open Table</p>
              </li>
            </ul>
          </div>
          <div className="col-9 map-container">
          </div>
        </div>
      </div>
    );
  }
}
