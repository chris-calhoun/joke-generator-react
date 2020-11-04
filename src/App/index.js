import React from 'react';
import './App.scss';
import Joke from '../components/Jokes';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Joke />
      </div>
    );
  }
}

export default App;
