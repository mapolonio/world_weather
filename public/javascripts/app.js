import React from 'react';
import ReactDOM from 'react-dom';
import ObservableTodoStore from './models/todoStore';
import TodoList from './components/todoList';

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




const observableTodoStore = new ObservableTodoStore();

ReactDOM.render(
  <TodoList store={ observableTodoStore } />,
  document.getElementById('reactjs-app')
);

const store = observableTodoStore;
store.todos[0].completed = !store.todos[0].completed;
store.todos[1].task = 'Random todo ' + Math.random();
store.todos.push({ task: 'Find a fine cheese', completed: true });
