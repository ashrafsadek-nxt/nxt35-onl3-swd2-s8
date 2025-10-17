import React from 'react';
export default function Greeting({ name , onHello}) {
  

  return (
    <div>
        <h3>Hello {name}</h3>
        <button onClick={()=> onHello(name) }>send</button>
      
    </div>
  )
}


