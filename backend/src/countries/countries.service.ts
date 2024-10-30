import { Injectable, InternalServerErrorException } from '@nestjs/common';
import {
  CountriesPopulation,
  CountriesImages,
  CountryInfo,
  CountryBordersInfo,
} from './countries.types';
import { isoMapper } from './utils/iso.mapper.utils';

@Injectable()
export class CountriesService {
  async getAvailableCountries() {
    try {
      const response = await fetch(
        process.env.DATE_NAGER_URL + '/AvailableCountries',
      );
      return await response.json();
    } catch (error: unknown) {
      // Handle incoming errors to send controlled error messages.
      throw new InternalServerErrorException();
    }
  }

  async getCountryInfo(countryCode: string): Promise<CountryInfo> {
    try {
      const response: CountryInfo = {
        populationCounts: [],
        flag: '',
        info: null,
      };
      const responseCountryInfo = await fetch(
        process.env.DATE_NAGER_URL + '/CountryInfo/' + countryCode,
      );
      const countryInfo: CountryBordersInfo = await responseCountryInfo.json();
      response['info'] = countryInfo;

      const responseCountriesPopulation = await fetch(
        process.env.COUNTRIESNOW_URL + '/countries/population',
      );
      const countriesInfo: CountriesPopulation =
        await responseCountriesPopulation.json();

      for (let i = 0; i < countriesInfo.data.length; i++) {
        if (countriesInfo.data[i].code == isoMapper.get(countryCode)) {
          response['populationCounts'] = countriesInfo.data[i].populationCounts;
          i = countriesInfo.data.length; // To stop the search.
        }
      }

      const responseCountriesFlagImage = await fetch(
        process.env.COUNTRIESNOW_URL + '/countries/flag/images',
      );
      const countriesFlagImage: CountriesImages =
        await responseCountriesFlagImage.json();

      for (let i = 0; i < countriesFlagImage.data.length; i++) {
        if (countriesFlagImage.data[i].iso2 == countryCode) {
          response['flag'] = countriesFlagImage.data[i].flag;
          i = countriesFlagImage.data.length; // To stop the search.
        }
      }

      return response;
    } catch (error: unknown) {
      // Handle incoming errors to send controlled error messages.
      throw new InternalServerErrorException();
    }
  }
}
