import React from 'react';
import ReactDOM from 'react-dom';
import CitySelector from './components/citySelector';
import CityList from './models/cityList';

let cityList = new CityList();

ReactDOM.render(
  <CitySelector store= {cityList} />,
  document.getElementById('reactjs-app')
);

fetch('/api/config/')
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  })
  .then(cities => {
    cities.forEach(city => cityList.addCity(city.key, city.name));
    cityList.select('CL');
  })
  .catch(error => console.log(`Error: ${error}`));
