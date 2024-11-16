import ActionBars from "./components/ActionBars"
import ActionCenter from "./components/ActionCenter"
import Resume from "./components/Resume"
import styled from "styled-components"
import { useState } from "react"

function App() {
  const [personalInfoPos, setPersonalInfoPos] = useState("right")
  const [color, setColor] = useState("#ff0000");
  return (
    <Body>
      <ActionBars/>
      <ActionCenter 
        setPosition = {setPersonalInfoPos}
        color = {color}
        setColor = {setColor} />
      <Resume 
        position = {personalInfoPos}
        color = {color}/>
    </Body>
  )
}

const Body = styled.div`
  width: 85%;
  margin-top: 20px;
  margin-bottom: 50px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
`

export default App
