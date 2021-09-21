fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');

    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        const countryInfo = `
            <h3 class="country-name">${country.name}</h3>
            <p class = "country-capital">${country.capital}</p>
            <button onclick="displayCountryDetail('${country.name}')">Submit</button>
        `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });
}

const displayCountryDetail = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountry(data[0]));
}

const renderCountry= country =>{
    const countryDiv = document.getElementById('countryDetail');
    countryDiv.innerHTML = `
        <h1>Name: ${country.name}</h1>
        <p>Population: ${country.population}</p>
        <p>Area: ${country.area}</p>
        <p>Region: ${country.region}</p>
        <img src="${country.flag}">
        <p>Border Area: ${country.borders}</p>
    `
}


    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     const countryDiv = document.createElement('div');
    //     countryDiv.className = 'country';
    //     const countryInfo = `
    //         <h3 class="country-name">${country.name}</h3>
    //         <p class = "country-capital">${country.capital}</p>
    //     `;
    //     countryDiv.innerHTML = countryInfo;
    //     countriesDiv.appendChild(countryDiv);

    //     // const h3 = document.createElement('h3');
    //     // h3.innerText = country.name;

    //     // const p = document.createElement('p');
    //     // p.innerText = country.capital;

    //     // countryDiv.appendChild(h3);
    //     // countryDiv.appendChild(p);
    // }

