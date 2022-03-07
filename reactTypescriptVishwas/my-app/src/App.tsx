import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import { ParentHeading } from './components/ParentHeading';
import Heading from './components/Heading';

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
      <Person name={name}/>
      <PersonList nameList={personlist} />
      <ParentHeading>
        <Heading/>
      </ParentHeading>

    </div>
  );
}

export default App;
