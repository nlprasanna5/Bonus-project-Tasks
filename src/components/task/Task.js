import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo,editTodo,deleteTodo } from '../../redux/todoSlice';
import styles from './Task.module.css';

function Task() {
  const [addInput, setAddInput] = useState('');
  const [editInput, setEditInput] = useState('');
  const [editTodoId, setEditTodoId] = useState(null);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ id: Date.now(), title: addInput }));
    setAddInput('');
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch(editTodo({ id: editTodoId, title: editInput }));
    setEditTodoId(null);
    setEditInput('');
  };

  const handleEdit = (id, title) => {
    setEditTodoId(id);
    setEditInput(title);
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className={styles.taskWrapper}>
      <h1 className={styles.taskHeader}>Todo App</h1>
      <form onSubmit={handleAddSubmit} className={styles.taskForm}>
        <input
          type="text"
          placeholder="Enter todo"
          value={addInput}
          onChange={(e) => setAddInput(e.target.value)}
          className={styles.taskInput}
        />
        <button type="submit" className={styles.taskButton}>Add</button>
      </form>
      <ul className={styles.taskList}>
        {todos.map((todo) => (
          <li key={todo.id} className={styles.taskListItem}>
            {editTodoId === todo.id ? (
              <form onSubmit={handleEditSubmit}>
                <input
                  type="text"
                  value={editInput}
                  onChange={(e) => setEditInput(e.target.value)}
                  className={styles.taskInput}
                />
                <button type="submit"
                className={styles.taskSave}
                >Save</button>
              </form>
            ) : (
              <>
              <span className={styles.taskText}>{todo.title}</span>  
                <button onClick={() => handleEdit(todo.id, todo.title)}
                className={styles.taskButtonSmall}
                >Edit</button>
              </>
            )}
            <button onClick={() => handleDelete(todo.id)}
            className={styles.taskButtonSmall}
            >Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task;
