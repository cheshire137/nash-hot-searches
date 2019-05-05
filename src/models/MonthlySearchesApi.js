import SocrataApi from './SocrataApi';
import MonthlySearch from './MonthlySearch';

const apiUrl = 'https://data.nashville.gov/resource/fuaa-r5cm.json';

// https://data.nashville.gov/Public-Services/Nashville-gov-Top-500-Monthly-Searches/fuaa-r5cm
class MonthlySearchesApi extends SocrataApi {
  constructor(appToken) {
    super(appToken, apiUrl);
  }

  async getMonthlySearches() {
    const query = '?$limit=50000';
    const dataFormatter = rows => rows.map(row => new MonthlySearch(row));
    const rows = await this.get(query, dataFormatter);
    return rows.map(row => new MonthlySearch(row));
  }
}

export default MonthlySearchesApi;
