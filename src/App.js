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
    this.setState(prevState => ({ monthlySearches }));
  }

  render() {
    return (
      <div>
        <header className="site-header">
          <div className="container-lg py-2 d-flex flex-items-center flex-justify-between">
            <h1
              className="f3 text-normal"
            >Nashville.gov Hot Searches</h1>
          </div>
        </header>
        <main className="site-main">
          <div className="container-lg">
          </div>
        </main>
        <footer className="site-footer">
          <div className="container-lg text-small py-1 d-flex flex-items-center flex-justify-between">
            <span>
              Data from <a
                target="_blank"
                className="link-gray"
                rel="noopener noreferrer"
                href="https://data.nashville.gov/Public-Services/Nashville-gov-Top-500-Monthly-Searches/fuaa-r5cm"
              >Nashville.gov - Top 500 Monthly Searches</a>
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
