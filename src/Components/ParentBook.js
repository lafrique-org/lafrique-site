import React, { useState } from 'react';
import Country from './Country';

const ParentBook = () => {
  const [parentFirstName, setParentFirstName] = useState('');
  const [parentLastName, setParentLastName] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  // const [country, setCountry] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [accessLaptop, setAccessLaptop] = useState('No');

  const handleFirstNameChange = (event) => {
    setParentFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setParentLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setParentEmail(event.target.value);
  };

  // const handleCountryChange = (event) => {
  //   setCountry(event.target.value);
  // };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };

  const handleAccessLaptopChange = (event) => {
    setAccessLaptop(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" value={parentFirstName} onChange={handleFirstNameChange} placeholder='Parent First Name' />
      </label>
      <br />
      <label>
        
        <input type="text" value={parentLastName} onChange={handleLastNameChange} placeholder='Parent Last Name' />
      </label>
      <br />
      <label>
        
        <input type="email" value={parentEmail} onChange={handleEmailChange} placeholder='Parent Email'/>
      </label>
      <br />
      <label>
       <Country />
      </label>
      <br />
      <label>
        
        <input type="tel" value={contactNumber} onChange={handleContactNumberChange} placeholder='Contact Number'/>
        {/* Implement flag and code display on left end */}
      </label>
      <br />
      <label>
        
        <select value={accessLaptop} onChange={handleAccessLaptopChange} >
          <option >Has Access to Laptop</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ParentBook;
