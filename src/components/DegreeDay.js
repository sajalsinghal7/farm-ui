import React, { Component } from 'react';
import MaterialTable from 'material-table'
class DegreeDay extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      region: 'austria',
      to: '',
      from: '',
      apiResponse: []
    };
  }

  
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }


  handleSubmit = (event) => {
    // alert('A form was submitted: ' + this.state);

    // fetch('http://localhost:8080/api/v1/degreeDay/get', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(this.state)
    // }).then(function(response) {
    //     console.log(response)
    //     return response.json();
    //   });


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
        // var temp = [];
        // body.map(x => {
        //   temp.push(x)
        // });

        // this.state.apiResponse = temp;
        // this.setState({
        //   apiResponse: temp.map(resp => resp)})
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
        <label>
          From Date:
          <input type="Date" value={this.state.from} name="startDate" onChange={this.handleChange} />
        </label>
        <label>
          to Date:
          <input type="Date" value={this.state.to} name="endDate" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>
        {/* {JSON.stringify(this.state.apiResponse)} */}
      </div>
      {/* <div>
        <table style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
          {this.state.apiResponse.map((item =>
          <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.date}</td>
          <td>{item.region}</td>
          <td>{item.tMin}</td>
          <td>{item.tMax}</td>
          <td>{item.tMedium}</td>
          <td>{item.precipitation}</td>
          <td>{item.degreeDay}</td></tr>
          ))}
        </table>
      </div> */}
      <div style={{ maxWidth: '100%' }}>
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
          title="DegreeDay"
        />
      </div>
        </div>
    );
  }
}

export default DegreeDay;