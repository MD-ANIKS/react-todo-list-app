import React , {useState} from 'react';
import './App.css';
import ToDoLists from './components/ToDoLists';


function App() {

  const [inputList, setInputList] = useState('');
  const [items, setItems] = useState([]);

  const inputEvent = (event) => {
    setInputList(event.target.value)
  };

  const listOfItems = () => {
    setInputList("");
    setItems( (oldItems) => {
      return [...oldItems, inputList]
    } );
  };

  const deleteItems = (id) => {
    
    setItems( (oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      });
    } );


  };

  return (
    <>
      <header>
        <h1>React Todo-List-App</h1>
      </header>
      <main>
          <div className="app-area">
            <h1>ToDo List</h1>
            <div className="todo-area">
              <div className='todo-input-area'>
                <input placeholder='Add a Items' type="text" value={inputList} onChange={inputEvent} autoFocus />
                <button onClick={listOfItems}>+</button>
              </div>
              <ul className='list-items'>
                {items.map((itemval, index) => {
                  return <ToDoLists key={index} id={index} item={itemval} onSelect={deleteItems}/>
                })}

              </ul>
            </div>
          </div>
      </main>
    </>
  );
}

export default App;
