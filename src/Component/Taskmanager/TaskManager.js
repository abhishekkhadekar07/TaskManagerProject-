import { Box, Button, Modal } from '@mui/material'
import React from 'react'
import style from './TaskManager.module.css'
import { useState } from 'react';
import Form from '../Form/Form';
// import style from './TaskManager.module.css'
import TaskList from '../TaskList/TaskList';
const TaskManager = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
      setOpen(false);
    }
  return (
    <>
    <div className={style.container}>
     <div className={style.Title}> <h2>Daily Taskmanager</h2></div> 
    <Button  className={style.addButton} onClick={handleOpen} variant="contained" color="primary">Add Task</Button>
    </div>
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className='box' >
        <Form handleClose={handleClose} />
      </Box>
    </Modal>
    <TaskList/>
    </>
  )
}

export default TaskManager