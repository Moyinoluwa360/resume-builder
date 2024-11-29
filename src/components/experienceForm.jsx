import React, { useState } from "react";
import styled from "styled-components";

const ExperienceForm = (props) => {
  const [formData, setFormData] = useState({
    companyName: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
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
    console.log("Experience Data Submitted:", formData);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Enter company name"
            required
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="positionTitle">Position Title</label>
          <input
            type="text"
            id="positionTitle"
            name="positionTitle"
            value={formData.positionTitle}
            onChange={handleChange}
            placeholder="Enter position title"
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
        </div>
        <div style={{ marginBottom: "1rem" }}>
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
            placeholder="Enter location"
            required
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your responsibilities and achievements"
            rows="4"
            required
          />
        </div>
        <Button type="submit" 
            style={{  }}
            onClick={()=>{
                props.setExpFormDisplay("false")
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

export default ExperienceForm;
