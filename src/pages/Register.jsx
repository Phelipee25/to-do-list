import React from 'react'
import Button from '../Components/Button'
import TextInput from '../Components/TextInput'
import ScreenTitle from '../Components/ScreenTitle'

const Register = ()=>{
    return(
        <>
        <ScreenTitle>Cadastro</ScreenTitle>
        <TextInput placeholder='user@email.com.br' onChangeText={(text)=> console.log("Texto", text)}/>
        <TextInput placeholder='Nome' onChangeText={(text)=> console.log("Texto", text)}/>
        <Button>Cadastrar</Button>
        </>
    )
}

export default Register