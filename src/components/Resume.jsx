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
          <div className="educationDiv div">
            {
              props.eduDataArr.length === 0 ? "" :
              <div className="header" style={{color: props.color}}> Education</div>
            }
            {
              props.eduDataArr.length === 0 ? "" :
              props.eduDataArr.map((eduData)=>
                (
                  <div className="education styling">
                    <div className="sec1">
                      <div className="date">
                        {eduData.startDate} -- {eduData.endDate}
                      </div>
                      <div className="location">
                        {eduData.location}
                      </div>
                    </div>
                    <div className="sec2">
                      <div className="school">
                        {eduData.school}
                      </div>
                      <div className="degree">
                        {eduData.degree}
                      </div>
                      <div className="description">
                        {eduData.description}
                      </div>
                    </div>
                  </div>
                )
              )
            }
          </div>
          <div className="experienceDiv div">
            {
              props.expDataArr.length === 0 ? "" :
              <div className="header" style={{color: props.color}}> Experience</div>
            }
            {
              props.expDataArr.length === 0 ? "" :
              props.expDataArr.map((expData)=>
                (
                  <div className="experience styling">
                    <div className="sec1">
                      <div className="date">
                        {expData.startDate} -- {expData.endDate}
                      </div>
                      <div className="location">
                        {expData.location} 
                      </div>
                    </div>
                    <div className="sec2">
                      <div className="companyName">
                        {expData.companyName}
                      </div>
                      <div className="positionTitle">
                        {expData.positionTitle}
                      </div>
                    </div>
                  </div>
                )
              )
            }
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
    .div{
      display: flex;
      flex-direction: column;
      gap: 10px;
      .styling{
        display: flex;
        gap: 10px;
        .sec1{
          width: 35%;
          display: flex;
          flex-direction: column;
          .date{
            font-weight: bolder;
          }
          .location{
            font-weight: bolder;
          }
        }
        .sec2{
          width: 65%;
          display: flex;
          flex-direction: column;
          word-wrap: break-word;
          gap: 5px;
          .school{
            font-weight: bolder;
          }
          .companyName{
            font-weight: bolder;
          }
        }
      }
    }
`