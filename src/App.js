// @bekbrace
// FARMSTACK Tutorial - Sunday 13.06.2021
 
import React, { useState, useEffect} from 'react';
import './App.css';
//import TodoView from './components/TodoListView';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 


function App() {

  const [todoList, setTodoList] = useState([{}])
  const [name, setTitle] = useState('') 
  const [rollno, setRoll] = useState('')
  const [question, setDesc] = useState('')
  
    const doalert=()=>{
      alert("sent successfully");
      window.location.reload(false);
    }

  // Read all todos
  useEffect(() => {
    axios.get('http://localhost:8000/api/todo')
      .then(res => {
        setTodoList(res.data)
      })
  });

  // Post a todo
  const addTodoHandler = () => {
    axios.post('https://radiant-meadow-85127.herokuapp.com/', { 'title': name, 'question': question,'rollno':rollno})
      .then(res => console.log(res))
};

  return (
    <div className="App list-group-item  justify-content-center align-items-center mb-auto " style={{"backgroundColor":"white","marginTop":"100px"}} >
      <h1 className="card text-white bg-primary mb-auto">Free Up Questions</h1>
      
     <div className="card-body">
      <h5 className="card text-white bg-dark mb-3">submit question</h5>
      <span className="card-text"> 
        <input className="mb-2 form-control titleIn" onChange={event => setTitle(event.target.value)} placeholder='Name'/> 
        <input className="mb-2 form-control desIn" onChange={event => setRoll(event.target.value)}   placeholder='Roll NO'/>
        <input className="mb-2 form-control desIn" onChange={event => setDesc(event.target.value)}   placeholder='Question'/>
      <button className="btn btn-outline-primary mx-2 mb-3 " style={{'borderRadius':'50px',"font-weight":"bold","background":"blue","color":"white"}}  onClick={ (event)=>{addTodoHandler(event);doalert();}}>Submit</button>
      </span>
      
      <div >
      
      </div>
      </div>
      <h6 className="card text-dark bg-warning py-1 mb-0" >Copyright 2021</h6>
    </div>
  );
}

export default App;