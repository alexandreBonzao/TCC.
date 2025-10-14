import styles from "./EditandoE.module.css";
import Button from 'react-bootstrap/Button';

export default function EditandoE() {

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
                    <div className={styles.gambiarra}>
                        <Button className={styles.editar}>Editar</Button>
                    </div>
                </div>
                
                  
                <div className={styles.endereco}>
                    <div className={styles.info}>
                        <div className={styles.titulo}><h1>Endereço</h1></div>
                        <div className={styles.barra}><input type="text" placeholder="Logradouro" /></div>
                        <div className={styles.barra}><input type="text" placeholder="Bairro" /></div>
                        <div className={styles.barra}><input type="text" placeholder="Número" /></div>
                        <div className={styles.barra}><input type="text" placeholder="Complemento" /></div>
                        <div className={styles.barra}><input type="text" placeholder="Cidade" /></div>
                    </div>
                    <div className={styles.gambiarra}>
                        
                        <Button className={styles.editar}>Salvar</Button>
                    </div>
                </div> 
                
              </div>
          </div>
      </div>
    );
  }