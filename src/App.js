import React, { Component } from 'react';
import LocalStorage from './models/LocalStorage';
import MonthlySearchesApi from './models/MonthlySearchesApi';
import SearchesList from './components/SearchesList';
import SearchesFilter from './components/SearchesFilter';
import Config from './config.json';
import './App.css';

const yearKey = 'year';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthlySearches: [],
      isLoading: true,
      filteredMonthlySearches: []
    };
  }

  componentDidMount() {
    const api = new MonthlySearchesApi(Config.socrataApi.appToken);
    api.getMonthlySearches().then(this.onDataLoaded);
  }

  filterMonthlySearches = (monthlySearches, criteria) => {
    return monthlySearches.filter(search => search.matches(criteria));
  };

  onDataLoaded = monthlySearches => {
    this.setState(prevState => {
      const year = LocalStorage.get(yearKey) || prevState.year || 'all';

      return {
        monthlySearches,
        isLoading: false,
        year,
        filteredMonthlySearches: this.filterMonthlySearches(monthlySearches, { year })
      };
    });
  };

  onYearChange = year => {
    LocalStorage.set(yearKey, year);

    this.setState(prevState => ({
      year,
      filteredMonthlySearches: this.filterMonthlySearches(
        prevState.monthlySearches, { year }
      )
    }));
  };

  render() {
    const { filteredMonthlySearches, monthlySearches, isLoading,
            year } = this.state;

    return (
      <div>
        <header className="site-header">
          <div className="container-lg py-2 d-flex flex-items-center flex-justify-between">
            <h1
              className="f3 text-normal"
            >Nashville.gov Top Searches</h1>
            {isLoading ? null : (
              <SearchesFilter
                monthlySearches={monthlySearches}
                onYearChange={this.onYearChange}
                year={year}
              />
            )}
          </div>
        </header>
        <main className="site-main">
          <div className="container-lg">
            <SearchesList
              monthlySearches={filteredMonthlySearches}
            />
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
