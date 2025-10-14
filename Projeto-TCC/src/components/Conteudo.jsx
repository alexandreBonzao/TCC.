import { Link } from "react-router-dom";
import styles from "./Conteudo.module.css";
import Button from 'react-bootstrap/Button';


export default function Conteudo() {

    return (
      <div className={styles.tudo}>
          <div className={styles.container}>
              <div className={styles.conteudo}>
                <div className={styles.pessoais}>
                    <div className={styles.info}>
                        <div className={styles.titulo}><h1>Dados Pessoais</h1></div>
                        <h1>Nome:</h1>
                        <h1>CPF/CNPJ:</h1>
                        <h1>E-mail:</h1>
                        <h1>Senha:</h1>
                    </div>
                    <div> <Link to="/editarp"><Button className={styles.editar}>Editar</Button></Link></div>
                </div>
                
                  
                <div className={styles.endereco}>
                    <div className={styles.info}>
                        <div className={styles.titulo}><h1>Endereço</h1></div>
                        <h1>Logradouro:</h1>
                        <h1>Bairro:</h1>
                        <h1>Numero:</h1>
                        <h1>Complemento:</h1>
                        <h1>Cidade:</h1>
                    </div><div><Link to="/editare"><Button className={styles.editar}>Editar</Button></Link></div>
                </div> 
                
              </div>
          </div>
      </div>
    );
  }