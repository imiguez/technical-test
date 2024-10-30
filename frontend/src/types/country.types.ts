export type Border = {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
    borders: any | null;
}

export type PopulationCounts = {
    year: number;
    value: number;
}

export type CountryBordersInfo = {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
    borders: Border[];
};
  
export type CountryInfo = {
    flag: string;
    populationCounts: PopulationCounts[];
    info: CountryBordersInfo;
};


export type AvailableCountry = {
    countryCode: string;
    name: string;
}