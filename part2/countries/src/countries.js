import Country from "./country";
const Countries = ({ countries, handleClick }) => {
  if (countries.length < 10 && countries.length !== 1) {
    return (
      <div>
        {countries.map((country, index) => (
          <li key={index}>
            <Country country={country} handleClick={handleClick} />
          </li>
        ))}
      </div>
    );
  } else if (countries.length === 1) {
    return (
      <div>
        {countries.map((country, index) => (
          <li key={index}>
            <div>
              <h1>{country.name.common}</h1>
              <br />
              <p>Capital: {country.capital[0]}</p>
              <p>Area {country.area}</p>
              <h6>Languages:</h6>
              <ul>
                {Object.keys(country.languages).map((key, index) => {
                  return (
                    <li key={index}>
                      <p>{country.languages[key]}</p>
                    </li>
                  );
                })}
              </ul>

              <img src={country.flags.png} alt={country.flag} />
            </div>
          </li>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    );
  }
};
export default Countries;
