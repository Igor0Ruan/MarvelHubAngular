interface QueryParamsModel {
  key: string,
  value: string
}

export default class QueryUtils {
  static buildQueryParams(queryParams: QueryParamsModel[]) {
    const queryString = new URLSearchParams();

    queryParams.forEach(param => queryString.append(param.key, param.value));

    return queryString;
  }
}
