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
  // useEffect(() => {
  //   axios.get('http://localhost:8000/api/todo')
  //     .then(res => {
  //       setTodoList(res.data)
  //     })
  // });

  // Post a todo
  const addTodoHandler = () => {
    axios.post('https://decentflex.herokuapp.com/', { 'title': name, 'question': question,'rollno':rollno})
      .then(res => console.log(res))
};

  return (
    <div className="App list-group-item  justify-content-center align-items-center  row justify-content-md-center mx-auto" style={{"backgroundColor":"white","marginTop":"100px"}} >
      <h1 className="card text-white bg-primary col-md-auto mx-3">Free Up Questions</h1>
      
     <div className="card-body">
      <h5 className="card text-white bg-dark col-md-auto mx-3">submit question</h5>
      <span className="card-text"> 
        <input className="col-md-auto mx-auto form-control titleIn" onChange={event => setTitle(event.target.value)} placeholder='Name'/> 
        <input className="col-md-auto mx-auto form-control desIn" onChange={event => setRoll(event.target.value)}   placeholder='Roll NO'/>
        <input className="col-md-auto mx-auto form-control desIn" onChange={event => setDesc(event.target.value)}   placeholder='Question'/>
      <button className="btn btn-outline-primary w-50 p-3 " style={{'borderRadius':'50px',"font-weight":"bold","background":"black","color":"white"}}  onClick={ (event)=>{addTodoHandler(event);doalert();}}>Submit</button>
      </span>
      
      <div >
      
      </div>
      </div>
      
    </div>
  );
}

export default App;