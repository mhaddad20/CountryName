const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors"); // import cors

app.use(cors()); // use cors middleware

  

app.get("/name/:name", (req, res) => {
    const name = req.params.name;
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => {
    console.log(response)
        const data = response.data[0];
        console.log(data)
        const currency= data.currencies
        const currencyCode = Object.keys(currency)[0];
        const tableData = {
          "Country Name": data.name.common,
          "Official Name": data.name.official,
          Capital: data.capital[0],
          Population: data.population.toLocaleString(),
          Area: `${data.area.toLocaleString()} km²`,
          Timezone: data.timezones[0],
          "Top-Level Domain": data.tld[0],
          "Country Code": data.cioc,
          Currency: `${currency[currencyCode].name} (${currency[currencyCode].symbol})`,
          Region: data.region,
          Subregion: data.subregion,
          Languages: Object.values(data.languages).join(", "),
          "Arabic Translation": data.translations.ar,
          "Driving Side": data.car.side,
          Flag: data.flags.svg,
        };
        res.send(tableData);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send("Error retrieving country information");
      });
  });
  
  

const port = 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
