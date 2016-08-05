import mobx, {observable, computed} from 'mobx';

class City {
  @observable temperature;
  @observable time;

  constructor () {
    mobx.autorun(() => console.log(this.report));
  }

  update () {
    fetch('/api/update/12/123')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(json => {
        this.temperature = json.temperature;
        this.time = json.time;
      })
      .catch(error => console.log(`Error: ${error}`));
  }

  @computed get report() {
    return `${this.temperature} ${this.time}`;
  }
}

let a = new City();

setInterval( () => {
  a.update();
  //a.report();
}, 1000);
