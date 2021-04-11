import React, { Component } from 'react';
import MaterialTable from 'material-table'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
class Egg extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      region: 'austria'.toUpperCase(),
      to: '',
      from: '',
      exponent: 1,
      computedEgg: [],
      apiResponse: []
    };
  }

  
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {


    fetch('http://localhost:8080/api/v1/eggModel/get/' + this.state.region, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function(response) {
        console.log(response)
        
        return response.json();
      }).then(body => {
        body.sort(function(a, b) {
          return a.date - b.date;
        });
        this.setState({
          apiResponse: body
        });


      });

    event.preventDefault();
}

calculateEggForRange = (event) => {
  this.setState({[event.target.name]: event.target.value});
  var from = this.state.from;
  var to = this.state.to;
  if(from !== '') {
    from = from.replace('-', '').replace('-', '');
    from = parseInt(from)
  }
  if(to !== '') {
    to = to.replace('-', '').replace('-', '');
    to = parseInt(to)
  }
  if(from !== '' && to !== '') {
    var a = 5.1;
    var b = 21.1;
    var c = 32.2;
    var tempComputedData = [];
    this.state.apiResponse.map(item => {
      if(item.date >= from && item.date<= to) {
        tempComputedData.push({
          id: item.id,
          date: item.date,
          meanAirTemperature: item.meanAirTemperature,
          vapourPressureDeficit: item.vapourPressureDeficit,
          netRadiation: item.netRadiation,
          windSpeed: item.windSpeed,
          eggs: a*(Math.pow(this.state.exponent,((-1) * b * item.meanAirTemperature))) * Math.pow(item.vapourPressureDeficit, c)
        });
      }
    });
    this.setState({computedEgg: tempComputedData});
  }
  event.preventDefault();
}

  render() {
    return (
        <div>
          <h2>Egg Hatching</h2>
          <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.region} name="region" onChange={this.handleChange} />
        </label>

        <input type="submit" value="Submit" />
      </form>

      <form onSubmit={this.calculateEggForRange}>
        <div>
          <label>
            From Date:
            <input type="Date" value={this.state.from} name="from" onChange={this.calculateEggForRange} />
          </label>
          <label>
            to Date:
            <input type="Date" value={this.state.to} name="to" onChange={this.calculateEggForRange} />
          </label>
          <label>
            Exponent:
            <input type="text" value={this.state.exponent} name="exponent" onChange={this.calculateEggForRange} />
          </label>
        <input type="submit" value="Calculate Egg for Range" />
        </div>
      </form>
        <br></br>
      <br></br>
        
        <LineChart
          width={1500}
          height={600}
          data={this.state.computedEgg}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis/>
          <Tooltip />
          <Legend />
          <Line type="meanAirTemperature" dataKey="meanAirTemperature" stroke="#DC143C" activeDot={{ r: 8 }} />
          <Line type="vapourPressureDeficit" dataKey="vapourPressureDeficit" stroke="#FF8C00" activeDot={{ r: 8 }} />
          <Line type="netRadiation" dataKey="netRadiation" stroke="#7CFC00" activeDot={{ r: 8 }} />
          <Line type="windSpeed" dataKey="windSpeed" stroke="#800080" activeDot={{ r: 8 }} />
        </LineChart>

        <LineChart
          width={1500}
          height={600}
          data={this.state.computedEgg}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="eggs" stroke="#DC143C" activeDot={{ r: 8 }} />
        </LineChart>



      <div style={{ maxWidth: '95%' }}>
        <MaterialTable
          columns={[
            { title: 'Id', field: 'id' },
            { title: 'Date', field: 'date' },
            { title: 'Mean Air Temperature', field: 'meanAirTemperature' },
            { title: 'Vapour PressureDeficit', field: 'vapourPressureDeficit' },
            { title: 'Net Radiation', field: 'netRadiation' },
            { title: 'Wind Speed', field: 'windSpeed' },
            { title: 'Eggs', field: 'eggs' }
          ]}
          data={this.state.computedEgg}
          title="Egg Table"
        />
      </div>
     
        </div>
    );
  }
}

export default Egg;