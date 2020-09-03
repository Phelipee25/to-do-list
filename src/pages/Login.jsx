import React, { useState } from 'react'
import Button from '../Components/Button'
import ScreenTitle from '../Components/ScreenTitle'
import TextInput from '../Components/TextInput'
import {login} from "../api/user"
const Login = ({history})=>{
    const [email, setEmail] = useState("")
    const doLogin = async ()=>{
        try{
        if(!email){
            return alert("email invalido")
        }

        const userData = await login(email)

        localStorage.setItem('userData', JSON.stringify(userData))

        history.push("/")
    }catch (e){
        alert('Deu Ruim', e)
    }
}
    return(
        <>
        <ScreenTitle>Login</ScreenTitle>
        <TextInput placeholder='user@email.com.br' onChangeText={(text)=> setEmail(text)}/>
        <Button onPress={doLogin}>Entrar</Button>
        <Button onPress={()=>history.push("/register")}>Cadastrar</Button>
        </>
    )
}

export default Login