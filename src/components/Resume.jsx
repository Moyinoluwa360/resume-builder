import styled from "styled-components"

export default function ResumeSec (props){
    return (
        <Resume position = {props.position}>
            <PersonalInfoSec position = {props.position}></PersonalInfoSec>
            <MainSec></MainSec>
        </Resume>
    )
}

const Resume = styled.div`
    background-color: azure;
    flex-basis: 55%;
    height: 1000px;
    display: flex;
    flex-direction: ${(props) => (props.position === "top" ? "column" : "")};
    flex-direction: ${(props) => (props.position === "left" ? "row" : "")};
    flex-direction: ${(props) => (props.position === "right" ? "row-reverse" : "")};
`
const PersonalInfoSec = styled.div`
    background-color: blue;
    height: ${(props) => (props.position === "top" ? "20%" : "100%")};
    width: ${(props) => (props.position === "top" ? "100%" : "30%")};
`
const MainSec = styled.div`
    box-sizing: border-box;
`