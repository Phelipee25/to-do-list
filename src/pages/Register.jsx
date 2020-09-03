import React, { useState } from 'react'
import Button from '../Components/Button'
import TextInput from '../Components/TextInput'
import ScreenTitle from '../Components/ScreenTitle'
import {signUp} from '../api/user'

const Register = ({history})=>{
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")

    const register = async ()=>{
        try{
            await signUp({email, fullName})
            alert("Cadastrado com Sucesso")
            history.goBack()
    }catch (e) {
        alert("Algo deu Errado" + e.message)
    }
}
    return(
        <>
        <ScreenTitle>Cadastro</ScreenTitle>
        <TextInput onEnterPressed={register} placeholder='user@email.com.br' onChangeText={(text)=> setEmail(text)}/>
        <TextInput onEnterPressed={register} placeholder='Nome' onChangeText={(text)=> setFullName(text)}/>
        <Button onPress={register}>Cadastrar</Button>
        </>
    )
}

export default Register