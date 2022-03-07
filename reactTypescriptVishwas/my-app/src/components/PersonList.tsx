import React from 'react'
type PersonListProps = {
    nameList: {
        first: string,
        last: string
    }[]
}
const PersonList = (props: PersonListProps) => {
    return (
        <>
    {props.nameList.map(m=>{
        return <h3 key={m.first}>{m.first}-----{m.last}</h3>
    })}
        </>
    )
}

export default PersonList