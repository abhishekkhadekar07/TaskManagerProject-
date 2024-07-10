import { Box, Button, Stack, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import styles1 from './Form.module.css';

const Form = ({ task, handleClose }) => {
  const [taskDetails, setTaskDetails] = useState({
    taskTitle: "",
    Description: "",
    selectPriority: "",
    chooseEndDate: "",
  });

  useEffect(() => {
    if (task) {
      setTaskDetails(task);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskList = JSON.parse(localStorage.getItem("taskList")) || [];
    if (task) {
      const index = taskList.findIndex((t) => t.taskTitle === task.taskTitle);
      taskList[index] = taskDetails;
    } else {
      taskList.push(taskDetails);
    }
    localStorage.setItem("taskList", JSON.stringify(taskList));
    setTaskDetails({ taskTitle: "", Description: "", selectPriority: "", chooseEndDate: "" });
    window.location.reload();
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTaskDetails({ ...taskDetails, [name]: value });
  };

  return (
    <div className={styles1.box1}>
      <Box className={styles1.box2}>
        <form className={styles1.container1} onSubmit={handleSubmit}>
          <h2 id={styles1.Formheading}>{task ? "Edit Task" : "Task Form"}</h2>
          <TextField
            className={styles1.textbox}
            label="Task title"
            variant="filled"
            required
            placeholder="Task title"
            value={taskDetails.taskTitle}
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
            placeholder="Description"
            value={taskDetails.Description}
            onChange={handleInput}
            name="Description"
            id="Description"
          />
          <TextField
            className={styles1.textbox}
            label="Select Priority"
            variant="filled"
            type="text"
            required
            value={taskDetails.selectPriority}
            placeholder="Select Priority"
            onChange={handleInput}
            name="selectPriority"
            id="selectPriority"
          />
          <TextField
            className={styles1.textbox}
            label="Choose End Date"
            variant="filled"
            type="text"
            required
            value={taskDetails.chooseEndDate}
            onChange={handleInput}
            name="chooseEndDate"
            id="chooseEndDate"
          />
          <Stack direction="row" spacing={1}>
            <Button type="submit" variant="contained" color="primary">
              {task ? "Update Task" : "Add Task"}
            </Button>
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
          </Stack>
        </form>
      </Box>
    </div>
  );
};

export default Form;
