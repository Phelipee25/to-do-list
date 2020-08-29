import React from 'react'
import Button from '../Components/Button'
import TextInput from '../Components/TextInput'
import ScreenTitle from '../Components/ScreenTitle'

const Register = ()=>{
    return(
        <>
        <ScreenTitle>Cadastro</ScreenTitle>
        <TextInput placeholder='user@email.com.br'/>
        <input className='text-input' type='password' placeholder='password'/>
        <Button>Cadastrar</Button>
        </>
    )
}

export default Register