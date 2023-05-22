import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState([{
    id: uuidv4(),
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  }]);

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  

  const handleInputChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };
  

  const validateForm = () => {
    let isValid = true;
    const { firstName, lastName, email, phoneNumber } = formData;
    const errorsCopy = { ...errors };

    if (!firstName) {
      errorsCopy.firstName = 'First Name is required';
      isValid = false;
    } else if (!isValidFirstName(firstName)) {
      errorsCopy.firstName = 'Invalid first name and it does not include numbers';
    } else {
      errorsCopy.firstName = '';
    }
    

    if (!lastName) {
      errorsCopy.lastName = 'Last Name is required';
      isValid = false;
    } else if (!isValidLastName(lastName)) {
      errorsCopy.lastName = 'Invalid lastname and it does not includes numbers';
    } else {
      errorsCopy.lastName = ''
    }

    if (!email) {
      errorsCopy.email = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(email)) {
      errorsCopy.email = 'Invalid Email';
      isValid = false;
    } else {
      errorsCopy.email = '';
    }

    if (!phoneNumber) {
      errorsCopy.phoneNumber = 'Phone Number is required';
      isValid = false;
    } else if (!isValidPhoneNumber(phoneNumber)) {
      errorsCopy.phoneNumber = 'Phone number should be 10 numbers and does not include letters,special characters!';
      isValid = false;
    } else {
      errorsCopy.phoneNumber = '';
    }

    setErrors(errorsCopy);
    return isValid;
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const updatedFormData = {
        id: uuidv4(),
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
      };
  
      const savedFormData = localStorage.getItem('formData');
      let existingFormData = savedFormData ? JSON.parse(savedFormData) : [];
      existingFormData = Array.isArray(existingFormData) ? existingFormData : [];
  
      const updatedFormDataList = [...existingFormData, updatedFormData];
  
      localStorage.setItem('formData', JSON.stringify(updatedFormDataList));
  
      alert('Form submitted successfully!');
      setFormData({
        id: uuidv4(),
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
      });
    }
  };
  

  const isValidEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    // Simple phone number validation regex
    const phoneNumberRegex = /^(?:\+?\d{1,3}[- ]?)?\d{10}$/;
    return phoneNumberRegex.test(phoneNumber);
  };

  const isValidFirstName = (firstNameValue) => {
    const firstNameRegex = /^[a-zA-Z\s]{2,}$/;
    return firstNameRegex.test(firstNameValue)
  }
  const isValidLastName = (lastNameValue) => {
    const lastNameRegex = /^[a-zA-Z\s]{2,}$/;
    return lastNameRegex.test(lastNameValue)
  }


  return (
    <div className={styles.contactWrapper}>
      <h1 className={styles.contactHeader}>Contact Page</h1>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <label className={styles.contactLabel}>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className={styles.contactInput}
          />
          {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
        </label>
        <label className={styles.contactLabel}>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className={styles.contactInput}
          />
          {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
        </label>
        <label className={styles.contactLabel}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={styles.contactInput}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </label>
        <label className={styles.contactLabel}>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className={styles.contactInput}
          />
          {errors.phoneNumber && <span className={styles.error}>{errors.phoneNumber}</span>}
        </label>
        <button type="submit" className={styles.contactButton}>
          Submit
        </button>
      </form>
    </div>
);

};

export default Contact;
