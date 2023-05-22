import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.navbar}>
      <span onClick={() => navigate("/")} className={styles.navItem}>
        Home
      </span>
      <span onClick={() => navigate("/contact")} className={styles.navItem}>
        Contacts
      </span>
      <span onClick={() => navigate("/task")} className={styles.navItem}>
        Tasks
      </span>
    </div>
  );
};

export default Navbar;
