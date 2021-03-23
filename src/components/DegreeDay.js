import React, { Component } from 'react';
import MaterialTable from 'material-table'
class DegreeDay extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      region: 'austria',
      to: new Date(),
      from: new Date(),
      degreeDayFrom: '',
      degreeDayTo: '',
      accumulatedDegreeDay: 0,
      apiResponse: []
    };
  }

  
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  calculateAccumulatedDegreeDay = (event) => {
    this.setState({[event.target.name]: event.target.value});
    var from = this.state.degreeDayFrom;
    var to = this.state.degreeDayTo;
    if(from !== '') {
      from = from.replace('-', '').replace('-', '');
      from = parseInt(from)
    }
    if(to !== '') {
      to = to.replace('-', '').replace('-', '');
      to = parseInt(to)
    }
    if(from !== '' && to !== '') {
      var accumulatedResult = 0;
      this.state.apiResponse.map(item => {
        if(item.date >= from && item.date <= to) {
          accumulatedResult += item.degreeDay;
        }
        return accumulatedResult;
      });
      this.setState({accumulatedDegreeDay: accumulatedResult});
    }
    event.preventDefault();
  }

  handleSubmit = (event) => {


    fetch('http://localhost:8080/api/v1/degreeDay/get', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        // body: JSON.stringify(this.state),
        body: JSON.stringify({
          from: this.state.from,
          to: this.state.to,
          region: this.state.region
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function(response) {
        console.log(response)
        
        return response.json();
      }).then(body => {
        this.setState({
          apiResponse: body
        });


      });

    event.preventDefault();
}



  render() {
    return (
        <div>
          <h2>Degree Day</h2>
          <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.region} name="regionOfAnalysis" onChange={this.handleChange} />
        </label>

        <input type="submit" value="Submit" />
      </form>

      <form onSubmit={this.calculateAccumulatedDegreeDay}>
        <div>
          <label>
            From Date:
            <input type="Date" value={this.state.degreeDayFrom} name="degreeDayFrom" onChange={this.calculateAccumulatedDegreeDay} />
          </label>
          <label>
            to Date:
            <input type="Date" value={this.state.degreeDayTo} name="degreeDayTo" onChange={this.calculateAccumulatedDegreeDay} />
          </label>
          
        <input type="submit" value="Calculate Accumulated Degree Day" />
        </div>
      </form>
      <div>
        {this.state.accumulatedDegreeDay}
      </div>

      <div style={{ maxWidth: '90%' }}>
        <MaterialTable
          columns={[
            { title: 'Id', field: 'id' },
            { title: 'Date', field: 'date' },
            { title: 'Region', field: 'region' },
            { title: 'T Max', field: 'tMax' },
            { title: 'T Min', field: 'tMin' },
            { title: 'tMedium', field: 'tMedium' },
            { title: 'Precipitation', field: 'precipitation' },
            { title: 'degreeDay', field: 'degreeDay' }
          ]}
          data={this.state.apiResponse}
          title="Degree Day Table"
        />
      </div>
        </div>
    );
  }
}

export default DegreeDay;