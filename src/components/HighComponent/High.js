import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from "../Input/Input"
import Todo from "../Todo/Todo"
import "./High.css"

function High({text,setText,task,setTask,status,setStatus,filterTodo,setFilterTodo}) {


    useEffect(() => {
        filterTodoHandler()
    }, [task,status])
    


    const add = (e) => {
        setText(e.target.value)
    }

    const addBtn = (e)=> {
        e.preventDefault()
        if (text.trim()) {
            setTask((last)=>{
                const help =[...last]
                help.push(
                    {text : text , completed:false , id:Date.now()}
                )
                toast.success('🦄 با موفقیت اضافه شد', {
                    type: "danger",
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                return [...help]
        })
        setText("")
        }else {
            toast.success('🦄 داداش اضافه کن چیزی ننوشتی', {
                type: "danger",
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            setText("")
        }
    }

    const filterTodoHandler = () => {
        switch (status) {
            case "complete":
                setFilterTodo(task.filter( item => item.completed===true))
                break;
            case "uncomplete":
                setFilterTodo(task.filter( item => item.completed===false))
                break;
            default:
                setFilterTodo(task)
                break;
        }
    }

    

  return (
    <React.Fragment>
        <Input
        addBtn={addBtn}
        add={add}
        text={text}
        status={status}
        setStatus={setStatus}
        />
        <div className='center-element'>
            {filterTodo.map((item)=> {
               return <Todo
               key={item.id}
               text={item.text}
               task={task}
               setTask={setTask}
               taskItem={item}
               />
            })}
        </div>
    </React.Fragment>
  )
}

export default High