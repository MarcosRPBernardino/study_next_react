"use client"

import { Fragment, useState } from "react";

export default function Counter() {
    const [state, setState] = useState(0);


    return (
        <>
            <p>Count: {state}</p>
            <button onClick={() => setState(state + 1)} >Botão</button>
        </>
    );
}