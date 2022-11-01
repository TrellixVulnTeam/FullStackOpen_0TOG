const Country = ({ country }) => {
  // const lat = 51.5002;
  // const long = -0.1262;

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m`
  //     )
  //     .then((response) => {
  //       setWeather(response.data);
  //     });
  // }, []);

  // console.log(weather);
  return (
    <>
      <h2>{country.name.common}</h2>
      <p>Capital City: {country.capital}</p>
      <p>
        Latitude/Longitude: {country.latlng[0]}/{country.latlng[1]}
      </p>
      <p>Population: {country.population}</p>
    </>
  );
};

export default Country;
