import React, { useState } from 'react';
function List(props) {
  const [change,setchange  ]= useState(true)
  const [count,setcount  ]= useState(0)
  const [thingsArray,setThingsArray]=useState([])
   function add(){
    setcount(prevCount=>prevCount+1)

  }
  function sub(){
    if(count>0)
    setcount(prevCount=>prevCount-1)
  }
  
  function changing ( ) {
    setchange(value => !value)

}
 function addThing(){
  setThingsArray([
    ...thingsArray,
    `thing ${thingsArray.length+1} `
  
  ])
 }  

 const thingsElement =thingsArray.map(element=><p key={element}>{element}</p>)
  return (
        
            <h1><ul class="list-group list-group-flush">
          <div onClick={()=>{changing()}}>
            <br/>
            <p>
              {change?"yes":"no"}
            </p>
            <br/>

          </div>
          <button onClick={add}>+</button>
          <br/>

          <p>{count}</p>
          <br/>

          <button onClick={sub}>-</button>
          <br/> <br/>
          <br/>


        <button onClick={()=>{addThing()}}>Click to add Thing To the list</button>
        <h1>{thingsElement}</h1><br/>
          </ul></h1>
          
        
    );
}

export default List;