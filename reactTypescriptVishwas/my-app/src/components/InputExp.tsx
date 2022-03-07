import React from "react"

type InputExpProps = {
  handleChange : (event  : React.ChangeEvent<HTMLInputElement>)=> void,
    value : string
}
export const InputExp = (props : InputExpProps) => {
  return (
    <input type="text" value={props.value} onChange={(event)=>props.handleChange(event)} />
  )
}
