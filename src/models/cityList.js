import mobx, {observable, computed} from 'mobx';

export default class CityList {
  @observable cities = [];

  constructor () {
    mobx.autorun(() => this.selected);
  }

  @computed get selected() {
    let selected = this.cities.find(city => {
      return city.selected;
    });
    return selected;
  }

  select (cityKey) {
    this.cities.forEach(city => {
      city.selected = false;
      city.temperature = '';
      city.time = '';
      if (city.key !== cityKey) {
        return;
      }
      city.selected = true;
      return fetch(`/api/update/${city.key}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error(response.statusText);
        })
        .then(json => {
          city.temperature = json.temperature;
          city.time = json.time;
          return city;
        })
        .catch(error => console.log(`Error: ${error}`));
    });
  }

  addCity (key, name) {
    this.cities.push({
      key,
      name,
      selected: false,
      temperature: '',
      time: ''
    });
  }
}
