import React, { Component } from 'react';
import MaterialTable from 'material-table'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
class Stress extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      region: 'austria'.toUpperCase(),
      to: '',
      from: '',
      computedStress: [],
      apiResponse: []
      };
  }

  
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {


    fetch('http://localhost:8080/api/v1/stressModel/get/' + this.state.region, {
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

calculateStressForRange = (event) => {
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
    var tempComputedData = [];
    this.state.apiResponse.map(item => {
      if(item.date >= from && item.date<= to) {
        tempComputedData.push({
          id: item.id,
          date: item.date,
          eto: item.eto,
          eta: item.eta,
          etc: item.etc,
          stressRatio: (item.etc !== 0) ? item.eta / item.etc : 0,
          stressGrade: this.getStressGrade((item.etc !== 0) ? item.eta / item.etc : 0)
        });
      }
    });
    this.setState({computedStress: tempComputedData});
  }
  event.preventDefault();
}

getStressGrade = (stressRatio) => {
  if(stressRatio < 0.2) return "EXTREMELY_DRY";
  if(stressRatio >= 0.2 && stressRatio <0.4) return "DRY_STRESS";
  if(stressRatio >=0.4 && stressRatio < 1) return "NO_STRESS";
  return "WET_STRESS";
}
  render() {
    return (
        <div>
          <h2>Stress</h2>
          <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.region} name="region" onChange={this.handleChange} />
        </label>

        <input type="submit" value="Submit" />
      </form>

      <form onSubmit={this.calculateStressForRange}>
        <div>
          <label>
            From Date:
            <input type="Date" value={this.state.from} name="from" onChange={this.calculateStressForRange} />
          </label>
          <label>
            to Date:
            <input type="Date" value={this.state.to} name="to" onChange={this.calculateStressForRange} />
          </label>
          
        <input type="submit" value="Calculate Stress for Range" />
        </div>
      </form>
        <br></br>
      <br></br>
        
        <LineChart
          width={1500}
          height={600}
          data={this.state.computedStress}
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
          <Line type="monotone" dataKey="eto" stroke="#DC143C" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="etc" stroke="#FF8C00" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="eta" stroke="#7CFC00" activeDot={{ r: 8 }} />
        </LineChart>


        <LineChart
          width={1500}
          height={600}
          data={this.state.computedStress}
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
          <Line type="monotone" dataKey="eto" stroke="#DC143C" activeDot={{ r: 8 }} />
        </LineChart>



      <div style={{ maxWidth: '95%' }}>
        <MaterialTable
          columns={[
            { title: 'Id', field: 'id' },
            { title: 'Date', field: 'date' },
            { title: 'ETO', field: 'eto' },
            { title: 'ETA', field: 'eta' },
            { title: 'ETC', field: 'etc' },
            { title: 'Stress Ratio', field: 'stressRatio' },
            { title: 'Stress Grade', field: 'stressGrade' }
          ]}
          data={this.state.computedStress}
          title="Stress Table"
        />
      </div>
     
        </div>
    );
  }
}

export default Stress;