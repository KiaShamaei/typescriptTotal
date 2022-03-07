import React from 'react'
type PersonProps = {
    name : string ,
    count?: number
}
export default function (props : PersonProps) {
  return (
    <div>this is person com {props.name} --- {props.count}</div>
  )
}
