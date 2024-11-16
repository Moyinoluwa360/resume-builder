import styled from "styled-components"

export default function ActionBarsFn (){
    return (
        <ActionBars>
            <div>
                <img src="/content.svg" alt="content icon" />
                <span>Content</span>
            </div>
            <div>
                <img src="/customize.svg" alt="customize icon" />
                <span>Customize</span>
            </div>
        </ActionBars>
    )
}

const ActionBars = styled.div`
    flex-basis: 10%;
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: flex-end;
    div{
        display: flex;
        flex-direction: column;
        width: 70%;
        height: 100px;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        span{
            font-size: 18px;
            font-weight: bolder;
            color: #4e4e4e;
        }
        img{
            height: 30px;
            width: 30px;
        }
        &:hover{
            background-color: #dadada;
            transition-duration: 500ms;
        }
    }
`