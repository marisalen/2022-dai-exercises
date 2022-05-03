import styled, {keyframes} from 'styled-components'
import Card from '../comps/Card';
import Switch from '../comps/Card/Switch';
import { ChangeData, data } from '../data/global_content';

export default function Home() {
  return (
    <div>
      {/* show some cards here */}
      <Switch
      active={data.op1}
      onSwitch={
        (val)=>ChangeData("op1", val)
      }
      />

      <Switch
      active={data.op2}
      onSwitch={
        (val)=>ChangeData("op2", val)
      }
      />

      <Switch 
      active={data.op3}
      onSwitch={
        (val)=>ChangeData("op3", val)
      }
      />
    </div>
  )
}
