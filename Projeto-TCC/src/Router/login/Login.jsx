//import {FaUser, FaLock} from 'react-icons/fa';
//import { HiMiniIdentification } from "react-icons/hi2";

import { useState } from 'react';


import './Login.css'

export default function Login () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [documentation, setDocumentation] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

       alert("Salvando os dados de:  " + username + " - " + password + " - " + documentation);
    };

    return (
        < div className="cont">
        <div className="container">

            <form onSubmit={handleSubmit}>
                <h1>Acesse o Sistema</h1>
                <div className="input-field">
                    <input 
                    type="email" 
                    placeholder="E-mail"
                    required
                    onChange={(e) => setUsername(e.target.value)} 
                     />
                   
                </div>

                <div className="input-field">
                    <input 
                    type="password" 
                    placeholder="Senha" 
                    onChange={(e) => setPassword(e.target.value)} 
                     />
                   
                </div>

                <div className='input-field'>
                    <input 
                    type="text" 
                    placeholder="CPF/CNPJ" 
                    onChange={(e) => setDocumentation(e.target.value)} 
                    />
                    
                </div>
                
                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembre de mim
                    </label>
                    <a href="#">Esqueceu a Senha?</a>
                </div>

                <button>Entrar</button>

                <div className="signup-link">
                    <p>Não tem uma conta? <a href="#">Cadastrar</a></p>
                </div>
            </form>
        </div>
        </div>
    );
}
