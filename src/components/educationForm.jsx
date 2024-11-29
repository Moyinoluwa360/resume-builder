import React, { useState } from "react";
import styled from "styled-components";
const EducationForm = (props) => {
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    props.setEduData({
      ...props.eduData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Education Data Submitted:", props.eduData);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="school">School</label>
          <input
            type="text"
            id="school"
            name="school"
            value={props.eduData.school}
            onChange={handleChange}
            placeholder="Enter your school name"
            required
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            id="degree"
            name="degree"
            value={props.eduData.degree}
            onChange={handleChange}
            placeholder="Enter your degree"
            required
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={props.eduData.startDate}
            onChange={handleChange}
            required
          />

          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={props.eduData.endDate}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={props.eduData.location}
            onChange={handleChange}
            placeholder="Enter the location"
            required
          />
        </div>
        <Button type="submit" 
            style={{  }}
            onClick={()=>{
                props.setEduFormDisplay("false")
            }}>
          save
        </Button>
      </form>
    </div>
  );
};

const Button = styled.button`
    padding: 0.5rem 1rem;
    width: 100px;
    font-weight: bolder;
    color: white;
    background-color:#838fff;
    border:none;
    border-radius:10px;
    &:hover{
        background-color:#c2c8ff;
    }
`

export default EducationForm;
