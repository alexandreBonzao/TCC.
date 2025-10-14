import styles from "./EditandoP.module.css";
import Button from 'react-bootstrap/Button';

export default function EditandoP() {

    return (
      <div className={styles.tudo}>
          <div className={styles.container}>
              <div className={styles.conteudo}>
                <div className={styles.pessoais}>
                    <div className={styles.info}>
                        <div className={styles.titulo}><h1>Dados Pessoais</h1></div>
                        <div className={styles.barra}><input type="text" placeholder="Nome" /></div>
                        <div className={styles.barra}><input type="text" placeholder="CPF/CNPJ" /></div>
                        <div className={styles.barra}><input type="text" placeholder="E-mail" /></div>
                        <div className={styles.barra}><input type="text" placeholder="Senha" /></div>
                    </div>
                    <div className={styles.gambiarra}>
                        <Button className={styles.editar}>Editar</Button>
                    </div>
                </div>
                
                  
                <div className={styles.endereco}>
                    <div className={styles.info}>
                        <div className={styles.titulo}><h1>Endereço</h1></div>
                        <h1>Logradouro:</h1>
                        <h1>Bairro:</h1>
                        <h1>Numero:</h1>
                        <h1>Complemento:</h1>
                        <h1>Cidade:</h1>
                    </div>
                    <div className={styles.gambiarra}>
                        <Button className={styles.editar}>Editar</Button>
                    </div>
                </div> 
                
              </div>
          </div>
      </div>
    );
  }