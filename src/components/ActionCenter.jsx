import styled from "styled-components"
import CustomizeDiv from "./customize"
import ContentFn from "./content"
export default function ActionCenterFn (props){
    return (
        <ActionCenter>
            <div className="clearResume">
                <img src="/trash.svg" alt="clear resume icon" />
                <span> Clear Resume</span>
            </div>
            <section>
                { props.actionCenter === "content" ?
                    <ContentFn
                    personalData = {props.personalData}
                    setPersonalData = {props.setPersonalData}
                    eduData = {props.eduData}
                    setEduData = {props.setEduData}
                    expData = {props.expData}
                    setExpData = {props.setExpData}
                />
                :
                    <CustomizeDiv 
                    setPosition = {props.setPosition}
                    color = {props.color}
                    setColor = {props.setColor}
                />
                }
            </section>
        </ActionCenter>
    )
}

const ActionCenter = styled.div`
    flex-basis: 30%;
    .clearResume{
        background-color: #ffffff;
        width: 250px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: red;
        font-weight: bold;
        gap: 10px;
        border-radius: 10px;
        box-shadow: 2px 2px 6px black;
        position: fixed;
        margin-left: 100px;
        &:hover{
            height: 29px;
            box-shadow: 1px 1px 6px black;
            transition-duration: 100ms;
        }
        img{
            filter: invert(22%) sepia(83%) saturate(7482%) hue-rotate(0deg);
            width: 25px;
            height: 25px;
        }
    }
    section{
        padding-top: 100px;
    }
`