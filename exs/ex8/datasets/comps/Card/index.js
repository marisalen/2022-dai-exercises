import styled, {keyframes} from 'styled-components'
import Inputs from './Inputs';
import Switch from './Switch';
import { useState } from 'react';

export default function Card({
  //attributes / props
  title="",
  desc=""
}){

  const  [inp_edit, setInpEdit] = useState(false);

  return <div>
    Card Stuff
    {title} {desc}
    <Inputs
    text={title}
    edit={inp_edit}
    />

    <Inputs
    text={desc}
    edit={inp_edit}
    />

    <Switch
    onSwitch={
      (val)=>setInpEdit(val)
    }
    />
  </div>
}