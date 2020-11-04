import React from 'react'


const Countries = (props) => {

    const c = props.countries.filter(country => country.name.toUpperCase().includes(props.searchField.toUpperCase()))

    const countryInfo =  (country) => {
        return (
            <div>
                <h1>{country.name}</h1>
                <p>capital: {country.capital}</p>
                <p>population: {country.population}</p>
                <h2>languages</h2>
                <ul>
                    {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
                </ul>
                <img src={country.flag} width="100" alt=""/>
            </div>        
        )
    }
    
  
    return (
        c.length > 10 ?
            <p>Too many matches</p>
            : c.length > 1 ?
                <ul>{c.map(country => <li key={country.id}>{country.name} </li>)}</ul> 
                : c.map(country => countryInfo(country))
    )      
}

export default Countries