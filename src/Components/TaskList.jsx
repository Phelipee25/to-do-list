import React from 'react'
import Task from '../Components/Task'

const TaskList = ({ tasks, onTaskDeleted, onTaskUpdated }) => {
    return (
        <>

            {tasks.map((task) => (
                <Task task={task} onTaskDeleted={onTaskDeleted} onTaskUpdated={onTaskUpdated} key={task.id}/>))}

        </>
    )
}

export default TaskList