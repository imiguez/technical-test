import { FC } from "react";

interface ICountryHeader {
    name: string,
    flagUrl: string,
}

export const CountryHeader: FC<ICountryHeader> = ({ name, flagUrl }) => {


    return (
        <header className="country-header">
            <h1>{name}</h1>
            <img src={flagUrl} alt={name+" flag"} />
        </header>
    )
}