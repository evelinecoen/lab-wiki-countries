import React from 'react';
import { useParams } from 'react-router-dom';

function CountryDetails({ countriesList }) {
  const { id } = useParams();
  /*   console.log(countriesList[0].alpha3Code); */

  const foundCountry = countriesList.find((country) => {
    return country.alpha3Code === id;
  });

  console.log(foundCountry);

  return (
    <div>
      {foundCountry && (
        <>
          <h3>{foundCountry.name.common}</h3>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
            alt=""
          />
        </>
      )}
    </div>
  );
}

export default CountryDetails;