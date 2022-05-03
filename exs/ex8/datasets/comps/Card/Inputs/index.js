import styled, {keyframes} from 'styled-components'
import {useState, useEffect} from 'react'

const InputsInput = styled.input`
border:dashed #CCC 1px;
padding: 10px;
color: #666;
`

export default function Inputs({
  //attributes / props
  text="",
  edit=false,
  onChangeVal=()=>{}
}){

  const [val, setVal] = useState("");

  //synchronize text to val
  useEffect(()=>{
    setVal(text);
  },[text])

  useEffect(()=>{
    onChangeVal(val)
  }, [val])

  //if you are not editing return the non-input interface
  if(!edit){
      return <div>
    {val}
  </div>
  }else {

  //if you are editing, return the input interface
      return <div>
    <InputsInput 
    type='text' 
    value={val}
    onChange={
      (e)=>setVal(e.target.value)
    }
    />
  </div>
  }
}