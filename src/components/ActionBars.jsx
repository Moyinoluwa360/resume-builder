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
    gap: 10px;
    div{
        display: flex;
        flex-direction: column;
        width: 50%;
        height: 50px;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        span{
            font-size: 16px;
            font-weight: 100;
        }
        img{
            height: 20px;
            width: 20px;
        }
        &:hover{
            background-color: #dadada;
            transition-duration: 500ms;
        }
    }
`