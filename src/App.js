import './App.css';
import { useState } from 'react';
import Todoitem from './components/TodoItem';

function App() {
  const [value, setValue] = useState(''); 
  const [data, setData] = useState([]);

  const handleClick = () =>{
    setData(prev =>[...prev, value]);
    setValue('');
    
  }


  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input type ="text" value={value} onChange={event => setValue(event.target.value)} />
          <button onClick={handleClick}>Add</button>
        </div>
        <div>
          {
            data.map((item, index) =>(
              <Todoitem name={item} key={index}>
                {item}

              </Todoitem>

            ))
          }
        </div>
      </header>
    </div>
  );
}

export default App;
