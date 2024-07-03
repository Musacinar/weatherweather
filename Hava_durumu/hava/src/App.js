import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const BASE_URL =  "https://localhost:7133/";

function App() {

  const [Temp, setTemp] = React.useState('');
  const getAllUsers = async()=>{
   await axios.get(`${BASE_URL}Class/number`)
   .then(response=> {
    setTemp(response.data);    
   })
  }


React.useEffect(() =>{
  getAllUsers();
}, []);



  return (
    <div >
    {Temp}
    </div>
  );
}

export default App;