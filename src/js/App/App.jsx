// React
import React from 'react';

// Other components.
import Jumbotron from './Jumbotron.jsx';
import Search from './Search.jsx';

export default class App extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
  };

  // Component render.
  render() {
    return (
      <div>
        <Jumbotron/>
        <Search/>
      </div>
    );
  };
};
