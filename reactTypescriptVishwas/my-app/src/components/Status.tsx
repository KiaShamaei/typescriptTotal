import React from 'react'
type StatusProps ={
    status : 'loading' | 'success' | 'error'
}

function Status(props : StatusProps) {
    let message 
    if(props.status === 'loading'){
        message = "Loading..."
    }else if(props.status ==="success"){
        message = "Success ..."
    }else if (props.status === "error"){
        message = "Error"
    }
  return (
    <div>Status is -----{message}</div>
  )
}

export default Status