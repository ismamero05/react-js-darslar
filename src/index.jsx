import React, { useState } from "react";
import { useRef } from "react";
import { Div, Divv, Divvv } from "./style";


export const Login = () => {
    const name = useRef('')
    const sur = useRef('')
    const pass = useRef('')
    const con = useRef('')
    const [userName, setUserName] = useState('')
    const [surname, setEmail] = useState('')
    const [passwordd, setPasswordd] = useState('')
    const [conpasswordd, setCpasswordd] = useState('')

    const reg = () => {
        setUserName(name.current.value) 
        setEmail(sur.current.value) 
        setPasswordd(pass.current.value) 
        setCpasswordd(con.current.value) 
    }

    return (
        <Divv>
        <Div>
            <h1>Register</h1>
            <input ref={name} placeholder="Username" type="text" />
            <input ref={sur} placeholder="Surname" type="text" />
            <input ref={pass} placeholder="Password" type="password" />
            <input ref={con} placeholder="Confirm Password" type="password" />
            <button onClick={reg}>Register</button>
        </Div>

        <Divvv>
            <h4>UserName: {userName}</h4>
            <h4>Surname: {surname}</h4>
            <h4>Password: {passwordd}</h4>
            <h4>Confirmed Password: {conpasswordd}</h4>
        </Divvv>
        </Divv>
    )
}