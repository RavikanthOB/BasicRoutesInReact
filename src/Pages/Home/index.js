import React from 'react'
import { useHistory } from 'react-router-dom';

export const  Home=()=> {
    let history = useHistory();
    const onLogout=()=>{
        localStorage.clear();
        history.push('/login')
    }
    return (
        <div>
            Home
            <button onClick={onLogout} >logout</button>
        </div>
    )
}

