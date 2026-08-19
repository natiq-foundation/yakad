import { countries } from "./data";
import { CountryAlpha2Code, CountryAlpha3Code } from "./types";

export interface CountryData {
    name: string;
    alpha2Code: CountryAlpha2Code;
    alpha3Code: CountryAlpha3Code;
    dialingCode: number;
    dialingCodePrimary: boolean;
}

export class Country implements CountryData {
    name: string;
    alpha2Code: CountryAlpha2Code;
    alpha3Code: CountryAlpha3Code;
    dialingCode: number;
    dialingCodePrimary: boolean;

    constructor(value: string) {
        const input = value.trim().toUpperCase();

        const country = countries.find(
            (country) => country.alpha2Code.toUpperCase() === input,
        );

        if (!country) {
            throw new Error(`Country "${value}" not found`);
        }

        this.name = country.name;
        this.alpha2Code = country.alpha2Code;
        this.alpha3Code = country.alpha3Code;
        this.dialingCode = country.dialingCode;
        this.dialingCodePrimary = country.dialingCodePrimary;
    }

    static fromAlpha3Code(value: string): Country {
        const input = value.trim().toUpperCase();

        const country = countries.find(
            (country) => country.alpha3Code.toUpperCase() === input,
        );

        if (!country) {
            throw new Error(`Country "${value}" not found`);
        }

        return new Country(country.alpha2Code);
    }

    static fromDialingCode(value: number): Country {
        const country = countries.find(
            (country) =>
                country.dialingCode === value &&
                country.dialingCodePrimary === true,
        );

        if (!country) {
            throw new Error(`Country with dialing code "${value}" not found`);
        }

        return new Country(country.alpha2Code);
    }
}

export function getCountryByAlpha2Code(value: string): Country {
    return new Country(value);
}

export function getCountryByAlpha3Code(value: string): Country {
    return Country.fromAlpha3Code(value);
}

export function getCountryByDialingCode(value: number): Country {
    return Country.fromDialingCode(value);
}
