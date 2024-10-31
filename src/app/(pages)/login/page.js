"use client"
import { useState } from "react";


export default function Login() {
    const [state, setState] = useState({
        email: "",
        password: "",
    });


    function handleChange(e) {
        console.log(e.target.value)
        const { value, id } = e.target
        console.log({
            ...state, [id]: value
        });
        
        setState({
            ...state,
            [id]: value
        })
    }

    return (
        <div>
            <div>login</div>
            <p>{state.email}</p>
            <p>{state.password}</p>
            <form>
                <input
                    type="email"
                    id="email"
                    placeholder="E-mail"
                    value={state.email}
                    onChange={(e) => handleChange(e)}
                />
                <input 
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={state.password}
                    onChange={(e) => handleChange(e)} 
                />
            </form>
        </div>
    );
}
