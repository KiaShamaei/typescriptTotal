import {Name} from '../General.type'
type PersonListProps = {
   nameList :Name[]
}

//this tipes for props 
const PersonList = ({nameList}: PersonListProps) => {
    return (
        <>
    {nameList.map(m=>{
        return <h3 key={m.first}>{m.first}-----{m.last}</h3>
    })}
        </>
    )
}

export default PersonList