import React, { useState } from "react";
import styled from "styled-components";
const EducationForm = (props) => {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Education Data Submitted:", formData);
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
            value={formData.school}
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
            value={formData.degree}
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
            value={formData.startDate}
            onChange={handleChange}
            required
          />

          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
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
            value={formData.location}
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
