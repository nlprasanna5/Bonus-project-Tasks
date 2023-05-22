import React, { useState } from 'react';
import styles from './Task.module.css';

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [editValue, setEditValue] = useState('');

  const handleAddTask = () => {
    if (taskInput) {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setEditIndex(index);
    setEditValue(tasks[index]);
  };

  const handleUpdateTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editValue;
    setTasks(updatedTasks);
    setEditIndex(-1);
  };

  return (
    <div className={styles.taskWrapper}>
      <h1 className={styles.taskHeader}>Task Page</h1>
      <form className={styles.taskForm}>
        <input
          className={styles.taskInput}
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter task..."
        />
        <button
          className={styles.taskButton}
          type="button"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </form>
      <ul className={styles.taskList}>
        {tasks.map((task, index) => (
          <li className={styles.taskListItem} key={index}>
            {index === editIndex ? (
              <input
                className={styles.taskInput}
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
            ) : (
              <span className={styles.taskText}>{task}</span>
            )}
            <div className={styles.taskActions}>
              {index === editIndex ? (
                <>
                  <button
                    className={styles.taskButtonSmall}
                    onClick={() => handleUpdateTask(index)}
                  >
                    Save
                  </button>
                  <button
                    className={styles.taskButtonSmall}
                    onClick={() => setEditIndex(-1)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    className={styles.taskButtonSmall}
                    onClick={() => handleEditTask(index)}
                  >
                    Edit
                  </button>
                  <button
                    className={styles.taskButtonSmall}
                    onClick={() => handleDeleteTask(index)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task;
