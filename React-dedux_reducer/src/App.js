import './App.css';
import { Counter } from './Components/Counter/Counter';

import { Todo } from './Components/Todos/Todo';
import {store} from "./React-Redux_file/store"

function App() {
  console.log(store.getState());
  return (
    <div className="App">
    <h1>Counter WorkSpace</h1>
        <Counter/>
     <hr />
    <h1>Todo WorkSpace</h1>
     <Todo />

     
    </div>
  );
}

export default App;
