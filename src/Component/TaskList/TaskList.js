import React, { useEffect, useState } from 'react'
import style from './TaskList.module.css'
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const TaskList = () => {
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    setTaskList(JSON.parse(localStorage.getItem('taskList')))
  },[])
const onDelete=(title)=>{
  console.log('delete')
  const list =taskList.filter((task)=>task.taskTitle!=title);

  setTaskList(list);
}
const onEdit=()=>{
  console.log('onedit')
}
  return (
    <div className={style.container}>
      <div className={style.headings}>
        <h2>Pending </h2>
        {taskList && taskList.map((task) => {
          return (
            <>
            <div className={style.containerForTask}>
            <div>{task?.taskTitle}</div>
            {/* <Button  onClick={()=>onDelete(task.taskTitle)} variant="outlined"   startIcon={<DeleteIcon />}>Delete</Button> */}
          <div onClick={()=>onDelete(task.taskTitle)}> <DeleteIcon >Delete</DeleteIcon></div>   
          <div onClick={()=>onEdit(task.taskTitle)}> <EditIcon >Edit</EditIcon></div>
            {/* <Button   onClick={()=>onEdit()} variant="contained" color="primary">Edit</Button> */}
            </div>
            </>
          )
        })
        }

      </div>
      <div className={style.headings}>
        <h2>Doing</h2>
      </div>
      <div className={style.headings}>
        <h2>Completed</h2>
      </div>
    </div>
  )
}

export default TaskList