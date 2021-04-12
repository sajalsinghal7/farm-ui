import React, { Component } from 'react';
class UploadEgg extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      path: "Example - E:\\workspace\\Farm Sample Data\\Input Data\\temperaturedata.csv",
      delimitter: ",",
      region: "austria".toUpperCase(),
      apiResponse : ""
    };
  }

  
  handleChange = (event) => {
    if(event.target.name === "region") {
      this.setState({[event.target.name]: event.target.value.toUpperCase()});
    } else {
      this.setState({[event.target.name]: event.target.value});
    }
    
  }

  
  handleSubmit = (event) => {


    fetch('http://localhost:8080/api/v1/eggModel/upload', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        // body: JSON.stringify(this.state),
        body: JSON.stringify({
          path: this.state.path,
          delimitter: this.state.delimitter,
          region: this.state.region
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function(response) {
        console.log(response)
        
        return response.json();
      }).then(body => {
        this.setState({apiResponse: "Upload Job Submitted"})
      }).catch(error => {
        this.setState({apiResponse: "Upload Job Failed"})
      });

    event.preventDefault();
}



  render() {
    return (
        <div>
          <h2>Egg File Upload</h2>
          <h1>
            File Format - YYYYMMDD, meanAirTemperature, vapourPressureDeficit, netRadiation, windSpeed
          </h1>
          <form onSubmit={this.handleSubmit}>
        <label>
          Path:-(Ex- E:\\workspace\\Farm Sample Data\\Input Data\\temperaturedata.csv)
          <br></br>
          <input type="text" value={this.state.path} name="path" onChange={this.handleChange} />
        </label>
        <br></br>
        <label>
            delimitter:-
            <input type="text" value={this.state.delimitter} name="delimitter" onChange={this.handleChange} />
          </label>
        <br></br>
          <label>
            Region:-
            <input type="text" value={this.state.region} name="region" onChange={this.handleChange} />
          </label>
          <br></br>
        <input type="submit" value="Submit" />
      </form>
      <div>
        {this.state.apiResponse}
      </div>
        </div>
    );
  }
}

export default UploadEgg;