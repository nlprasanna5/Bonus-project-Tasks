import React, { useState } from 'react';
import getContacts from '../../utils/localStorage';
import styles from './Home.module.css';

const Home = () => {
  const [users, setUsers] = useState(getContacts());
  // let users=getContacts();
  console.log(users);

  const handleClearData = () => {
    if (window.confirm('Are you sure you want to clear the stored data?')) {
      localStorage.clear();
      setUsers('');
    }
  };

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeHeader}>Welcome to the Home Page</h1>
      <button className={styles.clearButton} onClick={handleClearData}>
        Clear
      </button>

      <table className={styles.userTable}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((item, index) => (
              <tr key={item.id}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
