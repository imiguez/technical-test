import { FC } from "react";
import { Border } from "../types/country.types";
import { CountryRow } from "./CountryRow";

interface IBorderCountries {
    borderCountries: Border[]
}

export const BorderCountries: FC<IBorderCountries> = ({ borderCountries }) => {

    return (
        <section className="border-countries-container">
            <h2>Border Countries</h2>
            <ul className="list">
                {borderCountries.length === 0 && <li className="row-container">Doesn´t have border countries</li>}
                {borderCountries.map((border) => (
                    <CountryRow name={border.officialName} countryCode={border.countryCode} />
                ))}
            </ul>
        </section>
    )
}