import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import { ParentHeading } from './components/ParentHeading';
import Heading from './components/Heading';
import { ButtonExp } from './components/ButtonExp';
import { InputExp } from './components/InputExp';

function App() {
  const name = "kia"
  const personlist =[
    {first : "kia1" , last : "shama1"},
    {first : "kia2" , last : "shama2"},
    {first : "kia3" , last : "shama3"}
  ]
  return (
    <div className="App">
      <h1>this is first app of reacttype Script </h1>
      <Status status='loading' />
      <Person name={name} count={3}/>
      <PersonList nameList={personlist} />
      <ButtonExp handleClick={(event,id)=>console.log(event, id)} />
      <ParentHeading>
        <Heading/>
      </ParentHeading>
      <InputExp value={''} handleChange={(event)=> console.log(event.target.value)} />

    </div>
  );
}

export default App;
