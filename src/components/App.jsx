import React, {useState} from "react";

function App() {

  const [imputText, setImputText] = useState("")
  const [items, setItems] = useState([])

  function handleImput(event){
    const newValue = event.target.value 
    setImputText(newValue)
  }

function addItem(){
  setItems(prevItems => {
    return [...prevItems, imputText]
  })

 setImputText("")
}


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleImput} type="text" value={imputText}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todoItem => <li>{todoItem}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
