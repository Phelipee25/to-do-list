import React from 'react'

const TextInput = ({placeholder, onChangeText, onEnterPressed})=>{
    return(
        <input 
        className='text-input' 
        type='text' 
        placeholder={placeholder}
        onChange={(e)=>onChangeText(e.target.value)}
        onKeyPress= {(event) => onEnterPressed && event.key === "Enter" && onEnterPressed(event.target.value)}/>
    )
}

export default TextInput