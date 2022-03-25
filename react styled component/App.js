
import './App.css';
import React from 'react';
import  {Button } from './Components/Button';

function App() {
  const [count, setCount] = React.useState(0)
  return (
    <div className='App'>
         <h1>{count}</h1>
        <Button onClick={ () => setCount( count+1 ) }> INC </Button>
    </div>
  );
}

export default App;
