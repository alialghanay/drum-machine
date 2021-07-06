import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import AudioButtom from './audio-buttom';

class App extends Component {
  render() {
    return ( 
      <div className="container">
      <div id="drum-machine">
        <div id="display">
          <AudioButtom />
          <p>{this.props.id}</p>
        </div>
      </div>
    </div>
     );
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.id
  }
}

export default connect(mapStateToProps)(App);

/*
  constructor(props) {
    super(props);
    this.state = {

     }
  }
*/