import {observer} from 'mobx-react';
import React from 'react';

@observer
export default class CitySelector extends React.Component {
  render() {
    const store = this.props.store;
    return (
      <div>
        <select value={store.selected ? store.selected.key : ''} onChange={this.onCitySelection}>
          {store.cities.map(city =>
            <option key={city.key} value={city.key}>{city.name}</option>
          )}
        </select>
        <div className="city">
          <h1>{store.selected ? store.selected.name : ''}</h1>
        </div>
      </div>
    );
  }

  onCitySelection = (e) => {
    this.props.store.select(e.target.value);
  }
}
