import React from 'react';
import HomePage from './components/HomePage';

class App extends React.Component {
  render() {
    return (
      <HomePage firstName="Tara" lastName="Owens" age="22" major="Web Design"/>
    );
  }
}

export default App;
