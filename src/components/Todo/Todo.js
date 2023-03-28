import React from 'react'
import './Todo.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const Todo = ({text,taskItem,task,setTask}) => {
    const deleteHandler = ()=> {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                setTask(task.filter( item => (
                    item.id !== taskItem.id
                )))
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
          toast.error('🦄 داری حذف می کنی مطمعنی؟؟', {
            type: "danger",
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    const completeHandler = ()=> {
        setTask(task.map(item => {
           if (item.id === taskItem.id) {
            return {
                ...item , completed: !item.completed
            }
          }
          return item
        }))
        toast.info('🦄تمومش کردی دمت گرم', {
            type: "danger",
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
  }
  return (
    <React.Fragment>
            <div className={`item ${taskItem.completed ? "completed" : ""}`}>
                {text}
                <div className="btnSvg">
                    <i onClick={completeHandler} className="fa-solid fa-check left"></i>
                    <i onClick={deleteHandler} className="fa-solid fa-xmark right"></i>
                </div>
            </div>
    </React.Fragment>
  )
}

export default Todo