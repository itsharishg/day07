// Harish G - Batch B56WDTamil
// Fetch data from the REST countries API
fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(countriesData => {
// Problem 1: Get all countries from Asia continent/region using Filter function
    const asiaCountries = countriesData.filter(country => country.region === 'Asia');
    console.log('Countries in Asia:', asiaCountries);

    // Problem 2: Get all countries with a population of less than 2 lakhs using Filter function
    const smallPopulationCountries = countriesData.filter(country => {
    const population = country.population?.value || 0;
    return population < 200000;
    });
    console.log('Countries with population less than 2 lakhs:', smallPopulationCountries);

// Problem 3: Print details (name, capital, flag) using forEach function
    countriesData.forEach(country => {
    const name = country.name.common || 'N/A';
    const capital = country.capital?.[0] || 'N/A'; // Added check for capital
    const flag = country.flags?.png || 'N/A';
    console.log(`Country: ${name}, Capital: ${capital}, Flag: ${flag}`);
    });

// Problem 4: Print the total population of countries using reduce function
    const totalPopulation = countriesData.reduce((sum, country) => {
    const population = country.population?.value || 0;
    return sum + population;
    }, 0);
    console.log('Total Population of Countries:', totalPopulation);

// Problem 5: Print the country that uses US dollars as currency
    const usDollarCountries = countriesData.filter(country => {
    return country.currencies?.USD;
    });
    console.log('Countries using US dollars:', usDollarCountries);
})
.catch(error => console.error('Error fetching data:', error));

