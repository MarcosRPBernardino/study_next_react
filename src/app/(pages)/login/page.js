"use client"
import { useState } from "react";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleChange(e) {
        setEmail(e.target.value)
        console.log(e.target.value);
        
    }

    function handleeChange(e) {
        setPassword(e.target.value)
        console.log(e.target.value);
        
    }

    return (
        <div>
            <div>login</div>
            <p>{email}</p>
            <p>{password}</p>
            <form>
                <input 
                    type="email" 
                    placeholder="E-mail" 
                    value={email} 
                    onChange={ (e) => handleChange(e) }
                />
                <input type="password" 
                placeholder="Password" 
                value={password} 
                onChange={ (e) => handleeChange (e)}/>
            </form>
        </div>
    );
}
