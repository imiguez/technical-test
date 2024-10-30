import { FC, useEffect, useState } from "react";
import { CountryRow } from "../components/CountryRow";
import { AvailableCountry } from "../types/country.types";
import './../styles/home.css';


export const Home: FC = () => {
    const [msg, setMsg] = useState<string | null>(null);
    const [isLoading, setIsloading] = useState(true);
    const [countries, setCountries] = useState<AvailableCountry[] | null>(null);

    useEffect(() => {
        getCountries();
    }, [])

    const getCountries = async () => {
        const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/countries');
        if (!response.ok) {
            setIsloading(false);
            setMsg('An Error has occurred: ' + response.statusText);
            return;
        }
        const countries: AvailableCountry[] = await response.json();
        setCountries(countries);
        setIsloading(false);
    }

    if (isLoading) return <p>Loading...</p>;
    else if (msg !== null) return <p>{msg}</p>;
    else if (countries && countries.length > 0) {
        return (
            <section className="list-container">
                <ul className="list">
                    {countries.map((country) => (
                        <CountryRow {...country}/>
                    ))}
                </ul>
            </section>
        )
    } else return <p>Not Results</p>;
}