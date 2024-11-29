import ActionBars from "./components/ActionBars"
import ActionCenter from "./components/ActionCenter"
import Resume from "./components/Resume"
import styled from "styled-components"
import { useState } from "react"

function App() {
  const [personalInfoPos, setPersonalInfoPos] = useState("right")
  const [color, setColor] = useState("#977676");
  const [actionCenter, setActionCenter] = useState("content")
  const [personalData, setPersonalData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  const [eduData, setEduData] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });
  const [expData, setExpData] = useState({
    companyName: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });
  return (
    <Body>
      <ActionBars
        setActionCenter = {setActionCenter}
      />
      <ActionCenter 
        setPosition = {setPersonalInfoPos}
        color = {color}
        setColor = {setColor}
        personalData = {personalData}
        setPersonalData = {setPersonalData}
        actionCenter = {actionCenter}
        eduData = {eduData}
        setEduData = {setEduData}
        expData = {expData}
        setExpData = {setExpData}
        />
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
