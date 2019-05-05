import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './SearchesList.css';

const renderDate = row => {
  const monthlySearch = row.original;
  return <div className="text-center">{monthlySearch.month} {monthlySearch.year}</div>;
};

const sortByDate = (searchA, searchB) => {
  const dateA = searchA.date();
  const dateB = searchB.date();
  if (dateA < dateB) {
    return -1;
  }
  return dateA > dateB ? 1 : 0;
};

class SearchesList extends Component {
  render() {
    const { monthlySearches } = this.props;

    if (monthlySearches.length < 1) {
      return null;
    }

    return (
      <ReactTable
        data={monthlySearches}
        columns={[
          {
            Header: 'Query',
            accessor: 'query',
            headerClassName: 'text-bold',
            minWidth: 170
          },
          {
            Header: 'Count',
            accessor: 'count',
            headerClassName: 'text-bold',
            minWidth: 170
          },
          {
            Header: 'Date',
            id: 'date',
            accessor: d => d,
            headerClassName: 'text-bold',
            Cell: renderDate,
            minWidth: 170,
            sortMethod: sortByDate
          }
        ]}
        pageSize={10}
        showPageSizeOptions={false}
        className="-striped -highlight searches-list"
      />
    );
  }
}

export default SearchesList;
