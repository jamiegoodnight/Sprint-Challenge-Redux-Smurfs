import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { fetchSmurfsStart } from '../actions/index'
import { smurfSmurf } from '../actions/index'

class App extends Component {
  state={
    smurf: {
      name: '',
      age: '',
      height: '',
    }
  }
  componentDidMount(){
    this.props.fetchSmurfsStart()
  }
  handleChange = e => {
    e.preventDefault()
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value,
      }
    })
  }
  smurfSmurf = e => {
    this.props.smurfSmurf(this.state.smurf)
    this.setState({
      smurf: {
        name: '',
        age: '',
        height: '',
      }
    })
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
          {this.props.smurfs.map((x, i) => (
            <div  className="smurfs" key={x.name}>
              <h4>{x.name}</h4>
              <p>{x.age}</p>
              <p>{x.height}</p>
            </div>
          ))}
            <form onSubmit={this.smurfSmurf}>
              <input 
              type="string"
              name="name"
              value={this.state.smurf.name}
              placeholder="ex, 'Papa Smurf'"
              onChange={this.handleChange}
              />
              <input 
              type="number"
              name="age"
              value={this.state.smurf.age}
              placeholder="ex, '100'"
              onChange={this.handleChange}
              />
              <input 
              type="string"
              name="height"
              value={this.state.smurf.height}
              placeholder="ex, '8cm'"
              onChange={this.handleChange}
              />
              <button>Smurf a Smurf</button>
            </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
})

export default connect(
  mapStateToProps,
  {
    fetchSmurfsStart,
    smurfSmurf,
  }
)(App);


