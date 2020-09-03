import React, { useState } from 'react'
import Icons from './Icons'

const Task = ({ task, onTaskUpdated, onTaskDeleted }) => {
    const [completed, setCompleted] = useState(task.completed)
    const [disabled, setDisabled] = useState(true)
    const [description, setDescription] = useState (task.description)

const onSavePressed = ()=>{
    onTaskUpdated({ ...task, description})
    setDisabled(true)
}
const onCheckChanged=(checked)=>{
        onTaskUpdated({...task, completed: checked})
    setCompleted(checked)
}

    return (
        <div>
            <input type="checkbox"
                checked={completed}
                onChange={(event) => onCheckChanged(event.target.checked)} />
            <input className="text-input"
                value={description}
                onChange={(event)=>setDescription(event.target.value)}
                type="text" 
                disabled={disabled} />
                {disabled? (
                    <Icons icon='edit' onPress={()=> setDisabled(false)} />
                ) : (
                    <Icons icon='save' onPress={onSavePressed} />
                ) }
            
            
            <Icons icon='trash' onPress={console.log("clicou")} />

        </div>
    )
}

export default Task