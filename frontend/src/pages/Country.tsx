import { FC, useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { CountryInfo } from "../types/country.types";
import { CountryHeader } from "../components/CountryHeader";
import './../styles/country.css';
import { BorderCountries } from "../components/BorderCountries";
import { PopulationChart } from "../components/PupulationChart";


export const Country: FC = () => {
    const [isLoading, setIsloading] = useState(true);
    const [country, setCountry] = useState<CountryInfo | null>(null);
    const { id } = useParams();

    const getCountryInfo = async () => {
        const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/countries/' + id);
        const info: CountryInfo = await response.json();
        console.log(info)
        setCountry(info);
        setIsloading(false);
    }

    useEffect(() => {
        getCountryInfo();
    }, [])

    if (isLoading) return (
        <p>Loading...</p>
    ) 
    else if (!country) return (
        <p>Not Results</p>
    )
    else return (
        <article className="country-container">
           <CountryHeader name={country.info.officialName} flagUrl={country.flag} />
           <div className="country-body-container">
                <PopulationChart counts={country.populationCounts}/>
                <BorderCountries borderCountries={country.info.borders} />
           </div>
        </article>
    )
}