export type ApiResponseFromCountriesNow = {
  error: boolean;
  msg: string;
};

export type CountryBordersInfo = {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
    borders: any | null;
  }[];
};

export type CountryPopulation = {
  country: string;
  code: string;
  iso3: string;
  populationCounts: {
    year: number;
    value: number;
  }[];
};

export type CountriesPopulation = ApiResponseFromCountriesNow & {
  data: CountryPopulation[];
};

export type CountriesImages = ApiResponseFromCountriesNow & {
  data: {
    name: string;
    flag: string;
    iso2: string;
    iso3: string;
  }[];
};

export type CountryInfo = {
  flag: string;
  populationCounts: {
    year: number;
    value: number;
  }[];
  info: CountryBordersInfo;
};
