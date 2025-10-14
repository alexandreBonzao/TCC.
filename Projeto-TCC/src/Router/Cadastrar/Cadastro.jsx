
import { useState } from 'react';

import estilo from'./Cadastro.module.css';

export default function Cadastro () {
  const [username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [documentation, setDocumentation] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cidade, setCidade] = useState("");


  const handleSubmit = (event) => {
      event.preventDefault();

     alert("Salvando os dados de:  " + username + " - " +  " - " + documentation +  " - " + logradouro +" - " + Email + password + " - " + bairro + " - " + numero +  " - " + complemento + " - " + cidade);
  };

  return (
      < div className={estilo.cont}>
      <div className={estilo.container}>

          <form onSubmit={handleSubmit}>
              <h1>Crie sua Conta para Entrar no Sistema</h1>
              <div className={estilo.inputfield}>
                  <input 
                  type="email" 
                  placeholder="E-mail"
                  required
                  onChange={(e) => setEmail(e.target.value) } 
                   />
                 
              </div>

              <div className={estilo.inputfield}>
                  <input 
                  type="password"
                  required 
                  placeholder="Senha" 
                  onChange={(e) => setPassword(e.target.value)} 
                   />
                 
              </div>

              <div className={estilo.inputfield}>
                  <input 
                  type="text" 
                  required
                  placeholder="CPF/CNPJ" 
                  onChange={(e) => setDocumentation(e.target.value)} 
                  />
                  
              </div>

              <div className={estilo.inputfield}>
                  <input 
                  type="usuário" 
                  placeholder="Usuário"
                  required
                  onChange={(e) => setUsername(e.target.value)} 
                   />
                 
              </div>

              <div className={estilo.inputfield}>
                  <input 
                  type="logradouro" 
                  placeholder="Logradouro"
                  required
                  onChange={(e) => setLogradouro(e.target.value)} 
                   />
                 
              </div>

              <div className={estilo.inputfield}>
                  <input 
                  type="bairro" 
                  placeholder="Bairro"
                  required
                  onChange={(e) => setBairro(e.target.value)} 
                   />
                 
              </div>

              <div className={estilo.inputfield}>
                  <input 
                  type="numero" 
                  placeholder="Número"
                  required
                  onChange={(e) => setNumero(e.target.value)} 
                   />
                 
              </div>

              <div className={estilo.inputfield}>
                  <input 
                  type="complemento" 
                  placeholder="Complemento"
                  required
                  onChange={(e) => setComplemento(e.target.value)} 
                   />
                 
              </div>

              <div className={estilo.inputfield}>
                  <input 
                  type="cidade" 
                  placeholder="Cidade"
                  required
                  onChange={(e) => setCidade(e.target.value)} 
                   />
                 
              </div>
              <button>Entrar</button>
          </form>
      </div>
      </div>
  );
}
