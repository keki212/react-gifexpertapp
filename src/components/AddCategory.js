import React, { useState } from 'react'
import PropTypes from "prop-types";

const AddCategory = ({ setCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) =>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        //setCategory([...categories, inputValue])
        if( inputValue.length > 2){
            setCategory(cats => [ inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
          <input 
              type="text"
              value={ inputValue }
              onChange={handleInputChange}
          /> 
        </form>
    )
}
AddCategory.prototypes ={
    setCategory : PropTypes.func.isRequired
}
export default AddCategory;