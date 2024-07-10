import React, { useEffect, useState } from 'react';
import style from './TaskList.module.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete'

import Form from '../Form/Form'; 

const TaskList = () => {
  const [taskList, setTaskList] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const updateTaskList = () => {
    setTaskList(JSON.parse(localStorage.getItem('taskList')) || []);
  };

  useEffect(() => {
    updateTaskList();
    const handleStorageChange = () => {
      updateTaskList();
    };
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const onDelete = (title) => {
    const updatedList = taskList.filter((task) => task.taskTitle !== title);
    localStorage.setItem('taskList', JSON.stringify(updatedList));
    updateTaskList();
  };

  const onEdit = (title) => {
    const taskToEdit = taskList.find((task) => task.taskTitle === title);
    setEditingTask(taskToEdit);
  };

  const handleFormSubmit = () => {
    setEditingTask(null);
    updateTaskList();
  };

  return (
    <div className={style.container}>
      <div className={style.taskContainer}>
      <h2>Pending</h2>
  {taskList.map((task) => (
    <div key={task.taskTitle} className={style.taskCard}>
      <div className={style.taskTitle}>{task.taskTitle}</div>
      <div className={style.taskActions}>
        <div className={style.editIcon} onClick={() => onEdit(task.taskTitle)}>
          <EditIcon />
        </div>
        <div className={style.deleteIcon} onClick={() => onDelete(task.taskTitle)}>
          <DeleteIcon />
        </div>
      </div>
    </div>
  ))}
</div>

      <div className={style.headings}>
        <h2>Doing</h2>
      </div>
      <div className={style.headings}>
        <h2>Completed</h2>
      </div>
      {editingTask && (
        <div className={style.EditForm}>
        <Form
        
          task={editingTask}
          onSubmit={handleFormSubmit}
          handleClose={() => setEditingTask(null)}
        />
        </div> 
      )}
    </div>
  );
};

export default TaskList;
