import { FC } from "react";


interface ICountryRow {
    countryCode: string,
    name: string,
}

export const CountryRow: FC<ICountryRow> = ({ countryCode, name }) => {

    return (
        <li className="row-container">
            <a href={'/country/' + countryCode}>{name}</a>
        </li>
    )
}