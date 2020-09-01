import React from 'react'
import Button from '../Components/Button'
import ScreenTitle from '../Components/ScreenTitle'
import TaskList from '../Components/TaskList'
import TextInput from '../Components/TextInput'
import TextInputWithIcon from '../Components/TextInputWithICon'

const Task = ({history})=>{
    return(
        <>
        <ScreenTitle>Tela de Tarefas</ScreenTitle>
        <h3>Aqui estão suas tarefas</h3>
        <TextInputWithIcon placeholder="Digite uma tarefa"
        onChangeText={console.log}
        onPress={()=> console.log("botão clicado")}
        icon='plus'></TextInputWithIcon>
        <TaskList></TaskList>
        <Button onPress={()=> history.push("/login")}>Sair</Button>
        </>
    )
}

export default Task