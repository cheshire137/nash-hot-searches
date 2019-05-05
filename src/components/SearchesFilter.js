import React, { Component } from 'react';
import YearSelect from './YearSelect';

class SearchesFilter extends Component {
  render() {
    const { monthlySearches, onYearChange, year } = this.props;
    const allYears = monthlySearches.map(search => search.year);

    return (
      <form
        className="flex-auto flex-justify-end d-flex flex-items-center"
      >
        <YearSelect
          onChange={onYearChange}
          selectedYear={year}
          allYears={allYears}
        />
      </form>
    );
  }
}

export default SearchesFilter;
