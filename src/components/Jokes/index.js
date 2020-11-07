import React, { Component } from 'react';
import getJoke from '../../helpers/data/jokeData';

export default class Joke extends Component {
  // created a property for the state of the joke
  state = {
    jokeState: 'none',
  };

  // api call to get joke object on page load
  componentDidMount() {
    getJoke().then((resp) => {
      this.setState({
        joke: resp,
      });
    });
  }

  //  changes the state to setup
  getFirstJoke = () => {
    this.setState({
      jokeState: 'setup',
    });
  };

  //  changes the state to punchline
  getPunchline = () => {
    this.setState({
      jokeState: 'punchline',
    });
  };

  // makes new api call and changes state to setup
  getNewJoke = () => {
    getJoke().then((resp) => {
      this.setState({
        joke: resp,
        jokeState: 'setup',
      });
    });
  };

  render() {
    const { joke, jokeState } = this.state;
    let jokeComponent;

    switch (jokeState) {
      case 'none':
        jokeComponent = (
          <div className='jokeContainer'>
            <button className='btn btn-dark' onClick={this.getFirstJoke}>
              Get a Joke
            </button>
          </div>
        );
        break;
      case 'setup':
        jokeComponent = (
          <div className='jokeContainer'>
            <div className='setup'>{joke.setup}</div>
            <button className='btn btn-dark' onClick={this.getPunchline}>
              Get Punchline
            </button>
          </div>
        );
        break;
      case 'punchline':
        jokeComponent = (
          <div className='jokeContainer'>
            <div className='punchline'>{joke.punchline}</div>
            <button className='btn btn-dark' onClick={this.getNewJoke}>
              Get New Joke
            </button>
          </div>
        );
        break;
      default:
        console.warn('Joke not found.');
    }
    return (
      <div className='card'>
        <div className='card-header'>
          <img src='/REACT_JS.png' className='card-img-top' alt='...' />
        </div>
        <div className='card-body'>{jokeComponent}</div>
      </div>
    );
  }
}
