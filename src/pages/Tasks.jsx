import React, {useEffect , useState} from 'react'
import Button from '../Components/Button'
import ScreenTitle from '../Components/ScreenTitle'
import TaskList from '../Components/TaskList'
import TextInputWithIcon from '../Components/TextInputWithICon'
import {getTasks, createTask} from "../api/taskApi"


const Task = ({ history }) => {
    const [description, setDescription] = useState("")
    const [tasks, setTasks] = useState([])

    const newTask = async ()=>{
        await createTask({description})
        listTasks()
    }


    const listTasks = async ()=>{
        const tasks = await getTasks()
        setTasks(tasks)
    }
    useEffect( () => {
        listTasks()
    }, [])

    

    const onTaskDeleted = (task)=>{
        return
    }
    const onTaskUpdated = (task)=>{
        return
    }
    return (
        <>
            <ScreenTitle>Tela de Tarefas</ScreenTitle>
            <h3>Aqui estão suas tarefas</h3>
            <TextInputWithIcon placeholder="Digite uma tarefa"
                onChangeText={(text)=>setDescription(text)}
                onPress={newTask}
                icon='plus'></TextInputWithIcon>
            <TaskList tasks={tasks} onTaskUpdated={onTaskUpdated} onTaskDeleted={onTaskDeleted}></TaskList>
            <Button onPress={() => history.push("/login")}>Sair</Button>
        </>
    )
}

export default Task