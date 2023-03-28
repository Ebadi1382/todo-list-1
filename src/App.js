import React, { useState} from "react";
import High from "./components/HighComponent/High"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [text,setText]=useState("")
  const [task,setTask]=useState([])
  const [status,setStatus]=useState("All")
  const [filterTodo,setFilterTodo]=useState([])
    return (
      <React.Fragment>
        <High
        text={text}
        setText={setText}
        task={task}
        setTask={setTask}
        status={status}
        setStatus={setStatus}
        filterTodo={filterTodo}
        setFilterTodo={setFilterTodo}
        />
        <ToastContainer />
      </React.Fragment>
    );
}

export default App;
