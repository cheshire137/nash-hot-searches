const monthForName = name => {
  switch (name.toLowerCase()) {
    case 'january': return 0;
    case 'february': return 1;
    case 'march': return 2;
    case 'april': return 3;
    case 'may': return 4;
    case 'june': return 5;
    case 'july': return 6;
    case 'august': return 7;
    case 'september': return 8;
    case 'october': return 9;
    case 'november': return 10;
    default: return 11;
  }
};

class MonthlySearch {
  constructor(data) {
    if (data.query_count) {
      this.count = parseInt(data.query_count, 10);
    } else {
      this.count = data.count;
    }
    this.query = data.query_text || data.query;
    this.year = parseInt(data.year, 10);
    this.month = data.month_name || data.month;
  }

  date() {
    if (this.year && this.month) {
      return new Date(this.year, monthForName(this.month), 1);
    }
  }

  matches(criteria) {
    const { year } = criteria;
    return this.matchesYear(year);
  }

  matchesYear(year) {
    return (year && this.year.toString() === year) || year === 'all';
  }
}

export default MonthlySearch;
