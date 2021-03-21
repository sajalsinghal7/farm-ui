import React, { Component } from 'react';

class DegreeDay extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      region: 'austria',
      to: '',
      from: ''
    };
  }

  
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }


  handleSubmit = (event) => {
    alert('A form was submitted: ' + this.state);

    fetch('http://localhost:8080/api/v1/degreeDay/get', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state),
        config: {
          headers: {
              'Content-Type': 'application/json'
          }
      }
      }).then(function(response) {
        console.log(response)
        return response.json();
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
        </div>
    );
  }
}

export default DegreeDay;