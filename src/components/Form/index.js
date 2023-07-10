import React, { useState, useEffect } from 'react';
import './index.css';

  const DisplayForm = ({ formData, onDelete, onEdit }) => {
    const handleDelete = () => {
      onDelete();
    };

    const handleEdit = () => {
      onEdit();
    };

  return (
    <div >
    <div className="DisplayForm">
      <h2>Form Data</h2>
      <p>Name: {formData.firstName }  {formData.lastName}</p>
      <p>Email: {formData.email}</p>
      <p>Gender: {formData.gender}</p>
      <div className='buttons'>
        <button className='Update' onClick={handleEdit} >Update</button>
        <button className='Delete' onClick={handleDelete}>Delete</button>
      </div>
    </div>
    </div>
  );
};

// read about Spread Operators in javascript

const Form = ({ onSubmit, submittedData, editIndex }) => {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    gender: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormData);
  const [isFocused, setIsFocused] = useState(initialFormData);

  

  useEffect(() => {
    if (editIndex !== null) {
      // Populate the form fields with the values from the selected form data
      const selectedData = submittedData[editIndex];
      setFormData(selectedData);
    }
  }, [editIndex, submittedData]);
  
  
  const handleFocus = (fieldName) => {
    setIsFocused((prevIsFocused) => ({
      ...prevIsFocused,
      [fieldName]: true
    }));
  };

  const handleBlur = (fieldName) => {
    setIsFocused((prevIsFocused) => ({
      ...prevIsFocused,
      [fieldName]: false
    }));
  };

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));

    setFormErrors((prevFormErrors) => ({
      ...prevFormErrors,
      [name]: ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    let hasErrors = false;

    if (!formData.firstName) {
      errors.firstName = 'First Name is required.';
      hasErrors = true;
    }

    if (!formData.lastName) {
      errors.lastName = 'Last Name is required.';
      hasErrors = true;
    }

    if (!formData.email) {
      errors.email = 'Email is required.';
      hasErrors = true;
    }

    if (!formData.gender) {
      errors.gender = 'Gender is required.';
      hasErrors = true;
    }

    if (hasErrors) {
      setFormErrors(errors);
      return;
    }

    onSubmit(formData);
    setFormData(initialFormData);
    setFormErrors(initialFormData);
  };

  return (
    <form className='formOne' onSubmit={handleSubmit}>
      <h1>Form</h1>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          onFocus={() => handleFocus('firstName')}
          onBlur={() => handleBlur('firstName')}
        />
        {!isFocused.firstName && formErrors.firstName && (
          <p className="error">{formErrors.firstName}</p>
        )}
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          onFocus={() => handleFocus('lastName')}
          onBlur={() => handleBlur('lastName')}
        />
        {!isFocused.lastName && formErrors.lastName && (
          <p className="error">*{formErrors.lastName}</p>
        )}
      </label>
      <br />
      <label>
        Email:
        <input 
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onFocus={() => handleFocus('email')}
          onBlur={() => handleBlur('email')}
        />
        {!isFocused.email && formErrors.email && (
          <p className="error">*{formErrors.email}</p>
        )}
      </label>
      <div>
        <label>
          Gender:
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === 'Male'}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === 'Female'}
            onChange={handleChange}
          />
          Female
        </label>
        {/* <p className="error">*{example}</p> */}
      </div>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export const FormContainer = () => {
  const [submittedData, setSubmittedData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleFormSubmit = (data) => {
    if (editIndex !== null) {
      // Update the existing form data at the edit index
      const updatedData = [...submittedData];
      updatedData[editIndex] = data;
      setSubmittedData(updatedData);
      setEditIndex(null);
    } else {
      // Add new form data to the submittedData array
      setSubmittedData([...submittedData, data]);
    }
  };

  const handleDeleteForm = (index) => {
    const updatedData = [...submittedData];
    updatedData.splice(index, 1);
    setSubmittedData(updatedData);
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit} submittedData={submittedData} editIndex={editIndex} />
      <div className="allForm">
        {submittedData.map((data, index) => (
          <DisplayForm
            key={index}
            formData={data}
            onDelete={() => handleDeleteForm(index)}
            onEdit={() => setEditIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};







