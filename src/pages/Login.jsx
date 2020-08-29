import React from 'react'
import Button from '../Components/Button'
import ScreenTitle from '../Components/ScreenTitle'
import TextInput from '../Components/TextInput'

const Login = ({history})=>{
    return(
        <>
        <ScreenTitle>Login</ScreenTitle>
        <TextInput placeholder='user@email.com.br' onChangeText={(text)=> console.log("Texto", text)}/>
        <Button onPress={()=>history.push("/")} >Entrar</Button>
        <Button onPress={()=>history.push("/register")}>Cadastrar</Button>
        </>
    )
}

export default Login