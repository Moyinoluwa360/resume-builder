import styled from "styled-components"

export default function ResumeSec(props) {
    return (
      <Resume position={props.position}>
        <PersonalInfoSec position={props.position} color={props.color}>
          <div className="name">{props.personalData.fullName}</div>
          <div className="contactInfo" position={props.position}>
            <div className="email info">
              <img src="/email.svg" alt="email icon" />
              <span>{props.personalData.email}</span>
            </div>
            <div className="phoneNo info">
              <img src="/phone.svg" alt="phone icon" />
              <span>{props.personalData.phoneNumber}</span>
            </div>
            <div className="address info">
              <img src="/location.svg" alt="location icon" />
              <span>{props.personalData.address}</span>
            </div>
          </div>
        </PersonalInfoSec>
        <MainSec>

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
    padding: 5%;
`