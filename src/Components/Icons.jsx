import React from 'react'

const Icons = ({icon, onPress})=>{
    return <i className={`fa fa-${icon}`} onClick={onPress}/>
}

export default Icons