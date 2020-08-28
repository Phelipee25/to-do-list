import React from 'react'

const Login = ()=>{
    return(
        <>
        <h1 className='title'>Login</h1>
        <div className='corpo'>
        <input className='login' type='text' placeholder='user@email.com.br'/>
        <button className='button'>Entrar</button>
        <button className='button'>Cadastrar</button>
        </div>
        </>
    )
}

export default Login