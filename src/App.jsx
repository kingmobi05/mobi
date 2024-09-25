import React, {useState} from 'react'
import Header from './components/Header'
import Task from './Task'
import Form from './components/Form';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [task, setTask] = useState(
    [
      {   
          id:1,
          name:'Emeka Collins',
          stateOrigin:'Lagos',
          profession:'Mobie App Development'
      },
      {
          id:2,
          name:'John Doe',
          stateOrigin:'Abia',
          profession:'Python Developer'
      },
      {   
          id:3,
          name:'Victor Emmanuel',
          stateOrigin:'Ogun',
          profession:'Backend Development'
      },
  
  ]
  );

  let myAdd = (school) => {
    const id = Math.floor(Math.random() *  1000) + 1;
    const myNewReview = {id, ...school}
    setTask([myNewReview, ...task])
  }


  const myDelete = (id) => {
    setTask(task.filter((x) => x.id !== id))
  }
  return (
    <div>

      <Header  title='To Do List'   onClick={() => setShowForm(!showForm)} myDisplay={showForm}/>
      {showForm && <Form x={myAdd}/>}
      <Task myData={task} w={myDelete}/>



    </div>
  )
}

export default App