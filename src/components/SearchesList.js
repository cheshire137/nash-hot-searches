import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './SearchesList.css';

const renderDate = row => {
  const monthlySearch = row.original;
  return <div className="text-center">{monthlySearch.month} {monthlySearch.year}</div>;
};

const sortByDate = (searchA, searchB) => {
  return searchA.compareDate(searchB);
};

const centerText = ({ value }) => {
  return <div className="text-center">{value}</div>
};

class SearchesList extends Component {
  render() {
    const { monthlySearches } = this.props;

    if (monthlySearches.length < 1) {
      return null;
    }

    return (
      <ReactTable
        filterable
        data={monthlySearches}
        columns={[
          {
            Header: 'Query',
            accessor: 'query',
            headerClassName: 'text-bold',
            Cell: centerText
          },
          {
            Header: 'Count',
            accessor: 'count',
            filterable: false,
            headerClassName: 'text-bold',
            Cell: centerText
          },
          {
            Header: 'Date',
            id: 'date',
            filterable: false,
            accessor: d => d,
            headerClassName: 'text-bold',
            Cell: renderDate,
            sortMethod: sortByDate
          }
        ]}
        pageSize={10}
        showPageSizeOptions={false}
        className="-striped -highlight"
      />
    );
  }
}

export default SearchesList;
