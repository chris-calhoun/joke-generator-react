import React, { Component } from 'react';
import getJoke from '../../helpers/data/jokeData';

export default class Joke extends Component {
  state = {
    joke: [],
    isActive: false,
  };

  componentDidMount() {
    getJoke().then((resp) => {
      this.setState({
        joke: resp,
      });
    });
  }

  showElement = () => {
    this.setState({
      isActive: true,
    });
    console.warn('show');
  };

  render() {
    const { joke } = this.state;

    return (
      <div className='card'>
        <div className='card-header'>
          <img src='/REACT_JS.png' className='card-img-top' alt='...' />
        </div>
        <div className='card-body'>
        {this.state.isActive ? <button className='btn btn-dark'>
                  Get Punchline
                </button> : <button className='btn btn-dark' onClick={this.showElement}>
            Get a Joke
          </button>}
          {this.state.isActive ? <p>Setup: {joke[2]}</p> : null}

          {/* <button className='btn btn-dark'>
                  Get Punchline
                </button>
          <p>Punchline: {joke[3]}</p>
          <button className='btn btn-dark'>
                  Get a New Joke
                </button> */}
        </div>
      </div>
    );
  }
}
