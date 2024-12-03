import styled from "styled-components"

export default function ResumeSec(props) {
    return (
      <Resume position={props.position}>
        <PersonalInfoSec position={props.position} color={props.color}>
          <div className="name">{props.personalData.fullName}</div>
          <div className="contactInfo" position={props.position}>
            <div className="email info">
              { props.personalData.email === "" ? "":
               <img src="/email.svg" alt="email icon"/>
              }
              <span>{props.personalData.email}</span>
            </div>
            <div className="phoneNo info">
              {
                props.personalData.phoneNumber === "" ? "" :
                <img src="/phone.svg" alt="phone icon" />
              }
              <span>{props.personalData.phoneNumber}</span>
            </div>
            <div className="address info">
              {
                props.personalData.address === "" ? "" :
                <img src="/location.svg" alt="location icon" />
              }
              <span>{props.personalData.address}</span>
            </div>
          </div>
        </PersonalInfoSec>
        <MainSec>
          <div className="education" style={{color: props.color}}>
            <div className="header"> Education</div>
          </div>
          <div className="experience" style={{color: props.color}}>
            <div className="header"> Experience</div>
          </div>
        </MainSec>
      </Resume>
    );
  }
  

const Resume = styled.div`
    background-color: azure;
    flex-basis: 55%;
    height: 1000px;
    display: flex;
    flex-direction: ${(prop) => (prop.position === "top" ? "column" : "")};
    flex-direction: ${(prop) => (prop.position === "left" ? "row" : "")};
    flex-direction: ${(prop) => (prop.position === "right" ? "row-reverse" : "")};
`
const PersonalInfoSec = styled.div`
    background-color: ${(prop)=> prop.color};
    height: ${(prop) => (prop.position === "top" ? "17%" : "100%")};
    width: ${(prop) => (prop.position === "top" ? "100%" : "40%")};
    color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    .name{
        font-weight: bolder;
        font-size: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        word-wrap: break-word;
    }
    .contactInfo{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 15px;
        flex-direction: ${(prop) => (prop.position === "top" ? "row" : "")};
        word-wrap: break-word;
        font-weight: bolder;
        img{
            height: 20px;
            width: 20px;
        }
        .info{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
        }
    }
`
const MainSec = styled.div`
    box-sizing: border-box;
    padding: 2%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .header{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      background-color: #e7e7e7;
      font-weight: bolder;
      height: 30px;
      font-size: 25px;
      
    }
`