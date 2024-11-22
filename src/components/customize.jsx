import styled from "styled-components";

export default function CustomizeDiv(prop){
    const handleColorChange = (event) => {
    prop.setColor(event.target.value);
  };
  console.log(prop.color)
    return(
        <Customize>
            <div className="layoutCon">
                <span>Layout</span>
                <div className="layout-temp">
                    <div
                     className="layout layout1"
                     onClick={()=> prop.setPosition("top")}
                     >
                        <ColoredDiv 
                            className="layout-child" 
                            color = {prop.color}
                            ></ColoredDiv>
                        <div className="layout-child"></div>
                    </div>
                    <span className="layout-name">Top</span>
                    <div
                     className="layout layout2"
                     onClick={()=> prop.setPosition("left")}
                     >
                        <ColoredDiv 
                            className="layout-child" 
                            color = {prop.color}>
                            </ColoredDiv>
                        <div className="layout-child"></div>
                    </div>
                    <span className="layout-name">Left</span>
                    <div 
                    className="layout layout3"
                    onClick={()=> prop.setPosition("right")}
                    >
                        <div className="layout-child"></div>
                        <ColoredDiv 
                            className="layout-child" 
                            color = {prop.color}>
                            </ColoredDiv>
                    </div>
                    <span className="layout-name">Right</span>
                </div>
            </div>
            <div className="color">
                <span>Color</span>
                <div>
                    <div>
                        Choose accent color
                    </div>
                    <input
                        type="color"
                        value={prop.color}
                        onChange={handleColorChange}
                        style={{ marginBottom: "20px" }}
                    />
                </div>
            </div>
            <div className="fonts">
                <span>Fonts</span>
                <div>
                    <div>
                        <span className="serif">Aa</span>
                        <span className="serif">Serif</span>
                    </div>
                    <div>
                        <span className="sans">Aa</span>
                        <span className="sans">Sans</span>
                    </div>
                    <div>
                        <span className="mono">Aa</span>
                        <span className="mono">Mono</span>
                    </div>
                </div>
            </div>
        </Customize>
    )
}

const Customize = styled.div`
    height: 700px;
    .layoutCon{
        height: 25%;
        display: flex;
        flex-direction: column;
        gap: 5px;
        >span{
            font-size: 30px;
            font-weight: bolder;
        }
        .layout-temp{
            display: flex;
            margin-left: 30px;
            .layout{
                height: 70px;
                width: 20%;
                border-radius: 10px;
            }
            span{
                position: relative;
                top: 80px;
                left: -60px;
            }
            .layout1{
                display: flex;
                flex-direction: column;
                div{
                    width: 100%;
                    height: 50%;
                    border: 1px solid black;
                }
                :first-child{
                    border-radius: 10px 10px 0 0;
                }
                :last-child{
                    border-radius: 0 0 10px 10px;
                }
            }
            .layout2{
                display: flex;
                div{
                    width: 50%;
                    height: 100%;
                    border: 1px solid black;
                }
                :first-child{
                    border-radius: 10px 0 0 10px;
                }
                :last-child{
                    border-radius: 0 10px 10px 0;
                }
            }
            .layout3{
                display: flex;
                div{
                    width: 50%;
                    height: 100%;
                    border: 1px solid black;
                }
                :first-child{
                    border-radius: 10px 0 0 10px;
                }
                :last-child{
                    border-radius: 0 10px 10px 0;
                }
            }
        }
    }
    .color{
        display: flex;
        flex-direction: column;
        gap: 20px;
        span{
            font-size: 30px;
            font-weight: bolder;
        }
        div{
            display: flex;
            gap: 10px;
            margin-left: 15px;
            div{
                font-size: 20px;
                font-weight: lighter;
            }
            input{
                height: 30px;
            }
        }
    }
    .fonts{
        >span{
            font-size: 30px;
            font-weight: bolder;
        }
        >div{
            display: flex;
            gap: 5px;
            div{
                height: 80px;
                width: 80px;
                border: 1px solid black;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 2px;
                margin: 10px 0 0 25px;
                :first-child{
                    font-size: 30px;
                    font-weight: bold;
                }
                .serif{
                    font-family: serif;
                }
                .sans{
                    font-family: sans-serif;
                }
                .mono{
                    font-family: 'Courier New', Courier, monospace;
                }
            }
        }
    }
`
const ColoredDiv = styled.div`
    background-color: ${(prop)=> prop.color};
`