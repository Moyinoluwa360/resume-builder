import styled from "styled-components";
import {useState} from "react";
import EducationForm from "./educationForm";
import ExperienceForm from "./experienceForm";
export default function ContentFn(props){
      const [eduToggled, setEduToggled] = useState("none")
      const [expToggled, setExpToggled] = useState("none")
      const [eduFormDisplay, setEduFormDisplay] = useState("false")
      const [expFormDisplay, setExpFormDisplay] = useState("false")

      const handleToggleChange = (bar)=>{
        if(bar === "edu" & eduToggled === "none"){
          setEduToggled("block")
          setExpToggled("none")
        }else if(bar === "exp" & expToggled === "none"){
          setExpToggled("block")
          setEduToggled("none")
        }else if(bar === "edu" & eduToggled === "block"){
          setEduToggled("none")
        }else if(bar === "exp" & expToggled === "block"){
          setExpToggled("none")
        }
      }

      

      const handleChange = (e) => {
        const { name, value } = e.target;
        props.setPersonalData({
          ...props.personalData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", props.personalData);
      };
    
      return (
        <Content>
          <h2>Personal Info</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={props.personalData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={props.personalData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={props.personalData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="address">Address</label>
              <input
                id="address"
                name="address"
                value={props.personalData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                rows="4"
                required
              />
            </div>
          </form>
          <Education onClick={()=>{
            handleToggleChange("edu")
          }}>
            <span>
              <img src="/school.svg" alt="education logo" />
              <span>Education</span>
            </span>
            {eduToggled === "none" ? <img src="/menu-down.svg" alt="menu down"/> : <img src="/menu-up.svg" alt="menu down"/>}
          </Education>
          <EducationToggled style={{display: eduToggled}}>
            <div className="educations">
              <div className="addEdu">
                <div onClick={()=>{
                  setEduFormDisplay("true")
                }}>
                  <img src="/plus.svg" alt="add experience icon" />
                  Education
                </div>
              </div>
            </div>
            {eduFormDisplay === "true" ?
               <EducationForm 
                setEduFormDisplay = {setEduFormDisplay}
                eduData = {props.eduData}
                setEduData = {props.setEduData}
                setEduDataArr = {props.setEduDataArr}
                eduDataArr = {props.eduDataArr}
                />
                 :""}
          </EducationToggled>
          <Experience onClick={()=>{
            handleToggleChange("exp")
          }}>
            <span>
              <img src="/experience.svg" alt="experience logo" />
              <span>Experience</span>
            </span>
            {expToggled === "none" ? <img src="/menu-down.svg" alt="menu down"/> : <img src="/menu-up.svg" alt="menu down"/>}
          </Experience>
          <ExperienceToggled style={{display: expToggled}}>
            <div className="experience">
              <div className="addExp">
                <div onClick={()=>{
                  setExpFormDisplay("true")
                }}>
                  <img src="/plus.svg" alt="add experience icon" />
                  Experience
                </div>
              </div>
            </div>
            {expFormDisplay === "true" ? 
              <ExperienceForm 
                setExpFormDisplay = {setExpFormDisplay} 
                expData = {props.expData}
                setExpData = {props.setExpData}
                setExpDataArr = {props.setExpDataArr}
                expDataArr = {props.expDataArr}
                /> :""}
          </ExperienceToggled>
        </Content>
      );
}

const Content = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 30px;
    form{
      display: flex;
      flex-direction: column;
      div{
        display: flex;
        flex-direction: column;
        gap: 5px;
        label{
          font-size: 16px;
          font-weight: bold;
        }
        input{
          height: 40px;
          width: 90%;
          border-radius: 10px;
          padding-left: 20px;
          outline:none;
          border: none;
        }
        input:focus{
          border: 1px solid #8ee795;
        }
      }
    }
`
const Education = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px 0 10px;
  gap: 10px;
  width: 100%;
  justify-content: space-between;
  >span{
    display:flex;
    align-items: center;
    gap: 20px;
  }
  img{
    height: 30px;
  }
  :last-child{
    justify-self: end;
  }
`
const Experience = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px 0 10px;
  gap: 10px;
  width: 100%;
  justify-content: space-between;
  >span{
    display:flex;
    align-items: center;
    gap: 20px;
  }
  img{
    height: 30px;
  }
  :last-child{
    justify-self: end;
  }
`
const EducationToggled = styled.div`
  .experiences{
    width: 100%;
  }
  .addEdu{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    div{
      height: 30px;
      width: 25%;
      border-radius: 12px;
      border: 1px solid #a1a1a1eb;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px;
      gap: 3px;
      img{
        height: 30px;
        width: 20px;
      }
    }
  }
`

const ExperienceToggled = styled.div`
  .educations{
    width: 100%;
  }
  .addExp{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    div{
      height: 30px;
      width: 25%;
      border-radius: 12px;
      border: 1px solid #a1a1a1eb;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px;
      gap: 3px;
      img{
        height: 30px;
        width: 20px;
      }
    }
  }
`