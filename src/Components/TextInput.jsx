import React from 'react'

const TextInput = ({placeholder, onChangeText})=>{
    return(
        <input 
        className='text-input' 
        type='text' 
        placeholder={placeholder}
        onChange={(e)=>onChangeText(e.target.value)}/>
    )
}

export default TextInput