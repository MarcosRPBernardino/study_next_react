"use client"
import Cards from "@/app/components/cards/cards";
import { useState } from "react";

export default function SignUp() {

    // input com nome e sobrenome separados.
    // textarea para sugestoes do usuario.
    // password and repeat password. 
    // funcao para vereficar se password e o campo repeat password sao iguais. 
    // botao para enviar os dados do formulario.
    // radio button com duas opcoes com a pergunta gosta de pizza? sim/nao.
    // checkbox para confirmar a leitura da politica de privacidade e termos de uso e funcao para verificar se o checkbox foi tickado antes do envio.

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");

    function alteraNome (e) {
        setNome(e.target.value)
        console.log(e.target.value);
        
    }

    function alteraSobrenome (e) {
        setSobrenome(e.target.value)
        console.log(e.target.value);
    }

    return (
        <>
            <div>
                <div>sign up</div>
            </div>
            <form>
                <input type="text" placeholder="Nome" value={nome} onChange={(e) => alteraNome(e)} /> <br/><br/>
                <input type="text" placeholder="Sobrenome" value={sobrenome} onChange={(e) => alteraSobrenome(e)}/> <br/><br/>
                <textarea placeholder="Deixe sua sugestão." /> <br/><br/>
                <input type="password" placeholder="Digite sua senha" /> <br/><br/>
                <input type="password" placeholder="Confirme sua senha" /> <br/><br/>
                <button>Enviar</button>
            </form>
        </>
    );
}
