import ActionBars from "./components/ActionBars"
import ActionCenter from "./components/ActionCenter"
import Resume from "./components/Resume"
import styled from "styled-components"

function App() {
  return (
    <Body>
      <ActionBars/>
      <ActionCenter/>
      <Resume/>
    </Body>
  )
}

const Body = styled.div`
  background-color: #2d8ee4;
  width: 85%;
  margin-top: 20px;
`

export default App
