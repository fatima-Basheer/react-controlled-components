import React, { useState } from "react";

function ControlledComp() {

  const [name,setName]=useState(' ');
    const [email,setEmail]=useState(' ');
      const [password,setPassword]=useState(' ');
  return (
    <div>
      <h1>Controlled Components</h1>
    
      <form action="">
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="username" />
        <br />
        <br />
        <input type="text"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email" />
        <br />
        <br />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
        <br />
        <br />
        <button>Submit</button>
          <hr></hr>
        <button onClick={( )=>{setName(''); setEmail('');setPassword('')}}>Clear All</button>
      </form>
      <h3>{name}</h3>
      <h3>{email}</h3>
      <h3>{password}</h3>
    </div>
  );
}

export default ControlledComp;
