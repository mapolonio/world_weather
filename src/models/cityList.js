import mobx, {observable, computed} from 'mobx';

export default class CityList {
  @observable cities = [];

  constructor() {
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
      if (city.key !== cityKey) {
        return city.selected = false;
      }
      return city.selected = true;
    });
  }

  addCity (key, name) {
    this.cities.push({
      key,
      name,
      selected: false
    });
  }
}
