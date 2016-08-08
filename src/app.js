import React from 'react';
import ReactDOM from 'react-dom';
import ObservableTodoStore from './models/todoStore';
import TodoList from './components/todoList';
import CitySelector from './components/citySelector';
import CityList from './models/cityList';

/*class City {
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

let a = new City();*/

/*setInterval( () => {
  a.update();
  //a.report();
}, 1000);*/




/*const observableTodoStore = new ObservableTodoStore();

ReactDOM.render(
  <TodoList store={ observableTodoStore } />,
  document.getElementById('reactjs-app')
);

const store = observableTodoStore;
store.todos[0].completed = !store.todos[0].completed;
store.todos[1].task = 'Random todo ' + Math.random();
store.todos.push({ task: 'Find a fine cheese', completed: true });*/

let cityList = new CityList();

ReactDOM.render(
  <CitySelector store= {cityList} />,
  document.getElementById('reactjs-app')
);

cityList.addCity('CL', 'Santiago');
cityList.addCity('CLa','crap');
cityList.select('CLa');
