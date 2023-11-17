import React from 'react'

function Display()
{
    return(
        <div>
            <h1>I eat leaves</h1>
        </div>
    )
}

export default function NestedComponents() {
  return (
    <div>
        <Display/>
    </div>
  )
}
