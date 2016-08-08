import {observer} from 'mobx-react';
import React from 'react';

@observer
export default class CitySelector extends React.Component {
  render() {
    const store = this.props.store;
    const selected = store.selected;
    return (
      <div className="citySelectorContainer">
        <div className="city">
          <h1>{selected && selected.name ? selected.name : <i className="fa fa-refresh fa-spin" aria-hidden="true"></i>}</h1>
          <h2>Hora actual: {selected && selected.time ? selected.time : <i className="fa fa-refresh fa-spin" aria-hidden="true"></i>}</h2>
          <h2>Temperatura actual: {
            selected && selected.temperature ?
            selected.temperature :
            <i className="fa fa-refresh fa-spin" aria-hidden="true"></i>
          } °C</h2>
        </div>
        Seleccione una ciudad: <select value={selected ? selected.key : ''} onChange={this.onCitySelection}>
          {store.cities.map(city =>
            <option key={city.key} value={city.key}>{city.name}</option>
          )}
        </select>
      </div>
    );
  }

  onCitySelection = (e) => {
    this.props.store.select(e.target.value);
  }
}
