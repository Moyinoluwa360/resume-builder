import ActionBars from "./components/ActionBars"
import ActionCenter from "./components/ActionCenter"
import Resume from "./components/Resume"
import styled from "styled-components"
import { useState } from "react"

function App() {
  const [personalInfoPos, setPersonalInfoPos] = useState("right")
  const [color, setColor] = useState("#ff8888");
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
  const [eduDataArr, setEduDataArr] = useState([])
  const [expDataArr, setExpDataArr] = useState([])

  console.log(expDataArr)
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
        setEduDataArr = {setEduDataArr}
        setExpDataArr = {setExpDataArr}
        eduDataArr = {eduDataArr}
        expDataArr = {expDataArr}
        />
      <Resume 
        position = {personalInfoPos}
        color = {color}
        personalData = {personalData}
        eduDataArr = {eduDataArr}
        expDataArr = {expDataArr}
        />
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
