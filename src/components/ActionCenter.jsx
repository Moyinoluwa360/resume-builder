import styled from "styled-components"
import CustomizeDiv from "./customize"
export default function ActionCenterFn (prop){
    return (
        <ActionCenter>
            <div className="clearResume">
                <img src="/trash.svg" alt="clear resume icon" />
                <span> Clear Resume</span>
            </div>
            <section>
                <CustomizeDiv setPosition = {prop.setPosition}/>
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