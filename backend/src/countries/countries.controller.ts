import { Controller, Get, Param } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountryInfo } from './countries.types';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  async getAvailableCountries() {
    return await this.countriesService.getAvailableCountries();
  }

  @Get(':countryCode')
  async getCountryInfo(
    @Param('countryCode') countryCode: string,
  ): Promise<CountryInfo> {
    return await this.countriesService.getCountryInfo(countryCode);
  }
}
