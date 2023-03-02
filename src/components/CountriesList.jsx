import React from 'react';
import { Link, useParams } from 'react-router-dom';

function CountriesList({ countriesList }) {
  return (
    <div>
      {countriesList.map((country) => {
        return (
          <div>
            <Link to={`/country/${country.alpha3Code}`}>
              {country.name.common}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
