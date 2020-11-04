import React, { Component } from 'react';
import getJoke from '../../helpers/data/jokeData';

export default class Joke extends Component {
  state = {
    joke: [],
  };

  componentDidMount() {
    getJoke().then((resp) => {
      this.setState({
        joke: resp,
      });
    });
  }

  render() {
    const { joke } = this.state;

    return (
      <div className='card'>
        <div className='card-header'>
          <img src='/REACT_JS.png' className='card-img-top' alt='...' />
        </div>
        <div className='card-body'>
        <button className='btn btn-dark'>
                  Get a Joke
                </button>
        </div>
      </div>
    );
  }
}
