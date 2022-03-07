import React from "react"

type ButtonExpProps = {
    handleClick : (event  : React.MouseEvent<HTMLButtonElement> , id :number)=> void
}
export const ButtonExp = (props : ButtonExpProps) => {
  return (
    <button onClick={(event)=>props.handleClick(event , 1)}>click</button>
  )
}
