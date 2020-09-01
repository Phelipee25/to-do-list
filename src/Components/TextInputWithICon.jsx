import React from 'react'
import TextInput from './TextInput'

const TextInputWithIcon = ({placeholder, onChangeText, icon, onPress})=>{
    return(
        <>
        <div>
            <TextInput
            placeholder={placeholder}
            onChangeText={onChangeText}
            />
            <i className={`fa icon fa-${icon}`} onClick={onPress}/>
        </div>
        </>
    )
}

export default TextInputWithIcon