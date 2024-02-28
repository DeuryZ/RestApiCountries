document.addEventListener("DOMContentLoaded", async () =>{
    let countryContainer = document.querySelector(`#countries_container`);
    let res = await (await fetch("https://restcountries.com/v3.1/all")).json();
    res = res.slice(0, 10);
    res.map((e)=>{
        console.log(e);
        countryContainer.insertAdjacentHTML("beforeend", `
            <div id="country">
                <h2>${e.name.common}</h2>
                <img src="${e.flags.png}" alt="">
                <div id = "country_info">
                    <ul>
                        <li>Status: ${e.status}</li>
                        <li>${e.independent ? "Independent" : "No Independent"}</li>
                        <li>Currency: ${(e.currencies)===undefined?"No official currency":e.currencies[Object.keys(e.currencies)[0]].name} [${(e.currencies)===undefined?"No official currency":e.currencies[Object.keys(e.currencies)[0]].symbol}]</li>
                        <li>Language: ${(e.languages)===undefined?"No official language":e.languages[Object.keys(e.languages)[0]]}</li>
                        <li><a href="${(e.maps.googleMaps)}">Watch on Google Maps</a></li>
                        <li><a href="${(e.maps.openStreetMaps)}">Watch on Open Street Maps</a></li>
                        <li>Continent: ${e.continents[0]}</li>
                        <li>Capital: ${e.capital===undefined?"No capital":e.capital[0]}</li>
                        <li>Area: ${e.area===undefined?"No registered area":e.area} Km<sup>2</sup></li>
                        <li>Population: ${e.population===undefined?"No registered population":e.population}</li>
                    </ul>
                </div>
            </div>
        `)
    });
});