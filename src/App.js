import React, { Component } from 'react';
import MonthlySearchesApi from './models/MonthlySearchesApi';
import Config from './config.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { monthlySearches: [] };
  }

  componentDidMount() {
    const api = new MonthlySearchesApi(Config.socrataApi.appToken);
    api.getMonthlySearches().then(this.onDataLoaded);
  }

  onDataLoaded = monthlySearches => {
    console.log(monthlySearches[0]);
    this.setState(prevState => ({ monthlySearches }));
  }

  render() {
    return (
      <div>
        <header>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
