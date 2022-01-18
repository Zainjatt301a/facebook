import { useState } from 'react'
// import logo from './logo.svg';
import './App.css';



function App() {
  const [todoList, setTodoList] = useState([])
  const [inputText, setInputText] = useState('')
  const [updateBtn, setUpdateBtn] = useState(false)
  const [itemIndex, setItemIndex] = useState()

  const addItem = () => {
    console.log('todoList --->', todoList)
    console.log('inputText --->', inputText)
    const tempList = [...todoList]
    tempList.push(inputText)
    setTodoList(tempList)
    setInputText('')
  }

  const deleteItem = (index) => {
    const tempList = [...todoList]
    tempList.splice(index, 1)
    setTodoList(tempList)
  }

  const editItem = (index) => {

    const tempList = [...todoList];
    setInputText(tempList[index])
    setTodoList(tempList)
    setUpdateBtn(true)
    setItemIndex(index)
  }
  const UpdateItem = () => {
    const tempList = [...todoList];
    tempList[itemIndex] = inputText;
    setTodoList(tempList)
    setInputText('')
    setUpdateBtn(false)
    setItemIndex(-1)
  }

  return (
    <div className="App">
      <header className="App-header">

        <h1>Todo List</h1>
        <br /><br /><br /><br /><br />

        <input onChange={(e) => setInputText(e.target.value)} value={inputText} placeholder="Enter any item" />
        {updateBtn ? <button onClick={UpdateItem}>Update</button> : <button onClick={addItem}>Add</button>}


        <ul>
          {todoList.map((item, index) => {
            return <li style={itemIndex === index ? { backgroundColor: "green" } : {}}>
              {item}
              <button onClick={() => editItem(index)}>Edit</button>
              <button onClick={() => deleteItem(index)}>Delete</button>
            </li>
          })}
        </ul>

        <br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br />
      </header>
    </div >
  );
}

export default App;