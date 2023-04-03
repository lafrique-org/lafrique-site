import React, { useEffect, useState } from "react";
import Select from "react-select";

const Country = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,timezones")
      .then((response) =>response.json())
      .then((data) => {
        const options = data.map((country) => ({
            value: country.name.common,
            label: (
                <>
                
              <img
                src={country.flags.svg}
                alt={`${country.name.common} flag`}
                style={{ width: "20px", marginRight: "10px" }}
              />
              {country.name.common}
            </>
          ),
        }));
        setCountryList(options);
      });
  }, []);

  return (
    <Select
      options={countryList}
      value={selectedCountry}
      onChange={setSelectedCountry}
      isSearchable
      placeholder= 'Select country'
    />
  );
};

export default Country;
