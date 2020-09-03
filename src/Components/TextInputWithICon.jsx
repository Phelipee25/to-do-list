import React from 'react'
import TextInput from './TextInput'

const TextInputWithIcon = ({placeholder, onChangeText, icon, onPress})=>{
    return(
        <>
        <div>
            <TextInput
            placeholder={placeholder}
            onChangeText={onChangeText}
            onEnterPressed = {onPress}
            />
            <i className={`fa icon fa-${icon}`} onClick={onPress}/>
        </div>
        </>
    )
}

export default TextInputWithIcon