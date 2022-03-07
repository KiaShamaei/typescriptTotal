import React from 'react'
type PersonProps = {
    name : string
}
export default function (props : PersonProps) {
  return (
    <div>this is person com {props.name}</div>
  )
}
