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
                        <div 
                            className="layout-child" 
                            color = {prop.color}
                            ></div>
                        <div className="layout-child"></div>
                    </div>
                    <span className="layout-name">Top</span>
                    <div
                     className="layout layout2"
                     onClick={()=> prop.setPosition("left")}
                     >
                        <div className="layout-child" color = {prop.color}></div>
                        <div className="layout-child"></div>
                    </div>
                    <span className="layout-name">Left</span>
                    <div 
                    className="layout layout3"
                    onClick={()=> prop.setPosition("right")}
                    >
                        <div className="layout-child"></div>
                        <div className="layout-child" color = {prop.color}></div>
                    </div>
                    <span className="layout-name">Right</span>
                </div>
            </div>
            <div className="color">
                <span>Color</span>
                <input
                    type="color"
                    value={prop.color}
                    onChange={handleColorChange}
                    style={{ marginBottom: "20px" }}
                />
                <div>
                    Choose acent color
                </div>
            </div>
            <div className="fonts"></div>
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
                    background-color: ${(prop)=> prop.color};
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
                    background-color: ${(prop)=> prop.color};
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
                    background-color: ${(prop)=> prop.color};
                }
            }
        }
    }
`