import styled from "styled-components"

export default function ResumeSec (prop){
    return (
        <Resume position = {prop.position}>
            <PersonalInfoSec
                position = {prop.position}
                color = {prop.color}></PersonalInfoSec>
            <MainSec></MainSec>
        </Resume>
    )
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
    height: ${(prop) => (prop.position === "top" ? "20%" : "100%")};
    width: ${(prop) => (prop.position === "top" ? "100%" : "30%")};
`
const MainSec = styled.div`
    box-sizing: border-box;
`