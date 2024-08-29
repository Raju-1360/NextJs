"use client"

import { useState } from "react";





export const Test=()=>{

    const[name,setName]=useState('');

    const[age,setAge]=useState('');

    
const handler = async function(){

    console.log(name )
    console.log(age )
    let data= await fetch('/apicall',{
       
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({name,age})



    })
    data= await data.json()
    if(data.ok){
        alert('Data sent successfully')

    }
    else{
        alert('Failed to send data')

 
    }
    
    
    }
    
return(
    <>
    
    <label > name:-</label>
    <input type="text" name="name"   onChange={(e)=>setName(e.target.value)} value={name}/>
<br/>
<hr></hr>
    <label >age: </label> <input type="text" name="age"  onChange={(e)=>setAge(e.target.value)} value={age}/>
    
    <button onClick={handler}>submit</button>
    
    </>
)



}

export default Test;