import React, { useState } from "react";

function Form({firstName, lastName, handleFirstNameChange, handleLastNameChange}){
  const [number, setNumber] = useState(0)
  const [isNullNumber, setIsNullNumber] = useState(null)


  
  function handleNumberChange(e) {
    const newNumber = parseInt(e.target.value)
    if(newNumber >= 0 && newNumber <= 5){
    setNumber(newNumber)
    setIsNullNumber(null)
    } else {
      setIsNullNumber(`${newNumber} is not a valid number!`)
    }
  }


  return (
    <>
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    <form>
      <input type="number" onChange={handleNumberChange} value={number} />{isNullNumber ? <span style={{color: "red"}}>{isNullNumber}</span> : null}
    </form>
  </>
  );
}

export default Form;
