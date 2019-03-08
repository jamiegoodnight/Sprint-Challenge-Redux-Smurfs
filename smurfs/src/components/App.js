import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { fetchSmurfsStart } from '../actions/index'

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
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
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>
        </div>
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
    fetchSmurfsStart
  }
)(App);
