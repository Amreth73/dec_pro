import React from 'react';
import Project1 from './proo';
export default function App() {
  const myList = [
    { id: 'a', value: 'apple' },
    { id: 'b', value: 'banana' },
    { id: 'c', value: 'orange' },
    { id: 'd', value: 'grapes' },
    { id: 'e', value: 'mango' },
  ];
  return (
    <div className="App">
      <Project1 myList={myList}/>
      
    </div>
  );
}