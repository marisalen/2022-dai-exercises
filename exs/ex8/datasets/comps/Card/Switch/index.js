import styled, { keyframes } from 'styled-components'
import { useState, useEffect } from 'react'


const SwitchCont = styled.div`
padding:20px;
`

const SwitchBox = styled.div`
background:${props => props.bg || "#CCC"}; //2 states for the box active/inactive
width:90px;
height:30px;
display:flex;
align-items:center;
transition: background 0.3s;
border-radius: 20%;
`

const SwitchToggle = styled.div`
background:${props => props.bg || "#999"}; //2 colors for active/inactive
width:50px;
height:50px;
position: relative;
left: ${props => props.left || "0px"}; //2 left units for active/inactive
transition: left 0.3s, background 0.3s;
border-radius: 50%;
`;

const compdata = {
  active: {
    togglebg: "#99F",
    toggleleft: "45px",
    boxbg: "#CCF"
  },
  inactive: {
    togglebg: "#999",
    toggleleft: "-5px",
    boxbg: "#CCC"
  }
}

/*
if there are attributes that triggers the different state of the UI and the component
 has interactions that also triggers the user interface, then you must use useEffect 
 to synchronize the state and the attribute together
*/

export default function Switch({
  //attributes / props
  active = false,
  onSwitch=()=>{}
}) {

  // const [a_state, setAstate] = useState(false);
  const [a_state, setAstate] = useState("inactive");

  //detect the attribute/prop to trigger a different state
  useEffect(() => {
    if (active) {
      setAstate("active");
    } else {
      setAstate("inactive");
    }
  }, [active]);

  useEffect(()=>{
    if(a_state === "inactive"){
      onSwitch(false);
    }else {
      onSwitch(true);
    }
  }, [a_state])

  return <SwitchCont>
    <SwitchBox bg={
      // a_state ? compdata.active.boxbg : compdata.inactive.boxbg
      compdata[a_state].boxbg
    }
    onClick={
      //click on the toggle to change the styles in compdata
      () => setAstate(a_state === "inactive" ? "active" : "inactive")
      // or !a_state 
    }
    >
      <SwitchToggle
        bg={compdata[a_state].togglebg}
        left={compdata[a_state].toggleleft}
      />
    </SwitchBox>
  </SwitchCont>
}