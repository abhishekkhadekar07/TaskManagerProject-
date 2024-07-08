import { Box, Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react'
import styles1 from './TaskManager.module.css'

const TaskManager = (props) => {
    const [taskList, setTaskList] = useState({
        taskTitle: "",
        Description: "",
        selectPriority: "",
        chooseEndDate: "",
      });

      const handleSubmit = (e) => {
        e.preventDefault();
        const taskDetails = JSON.parse(localStorage.getItem("taskList")) || [];
        taskDetails.push(taskList);
        setTaskList({ taskTitle: "", Description: "", selectPriority: "", chooseEndDate: "" });
        localStorage.setItem("taskList", JSON.stringify(taskDetails));
      };
      const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setTaskList({ ...taskList, [name]: value });
      };
    
  return (
    <>
      <div className={styles1.box1}>
      <Box className={styles1.box2}>
      <form className={styles1.container1} onSubmit={handleSubmit}>
        <h2 id={styles1.Formheading}>Task form</h2>
        <TextField
          className={styles1.textbox}
          label="Task title"
          variant="filled"
          required
          placeholder="task title"
          value={taskList.taskTitle}
          onChange={handleInput}
          name="taskTitle"
          id="taskTitle"
        />
        <TextField
          className={styles1.textbox}
          label="Description"
          variant="filled"
          type="text"
          required
          placeholder=""
          value={taskList.Description}
          onChange={handleInput}
          name="Description"
          id="Description"
        />
        <TextField
          className={styles1.textbox}
          label="selectPriority"
          variant="filled"
          type="text"
          required
          value={taskList.selectPriority}
          placeholder=""
          onChange={handleInput}
          name="selectPriority"
          id="selectPriority"
        />
        <TextField
          className={styles1.textbox}
          label="chooseEndDate"
          variant="filled"
          type="text"
          required
          value={taskList.chooseEndDate}
          onChange={handleInput}
          name="chooseEndDate"
          id="chooseEndDate"
        />
        <div>
          <Stack direction="row" spacing={1}>
            <Button type="submit" variant="contained" color="primary">
            Add task
            </Button>
            <Button variant="contained" onClick={props.handleClose} >
              Cancel
            </Button>
          </Stack>
        </div>
      </form>
      </Box>
      </div>
    </>
  )
}

export default TaskManager