import styles from "./ProdutosAdd.module.css";
import imgAdd from "../assets/addImg.png";

export default function ProdutosAdd(){
    
    return(
        <div className={styles.tudo}>
            <div className={styles.container}>
                <div className={styles.produto}>
                    <div className={styles.img}>
                        <img src={imgAdd}/>
                    </div>
                    <div className={styles.conteudo}>
                        <div className={styles.titulo}><input type="text" placeholder="Título para o produto" /></div>
                        <div className={styles.desc}><input type="text" placeholder="Descrição do produto" /></div>
                        <div className={styles.endereco}><input type="text" placeholder="Localização" /></div>
                        <div className={styles.preco}><input type="text" placeholder="Preço do produto" /></div>
                    </div>
                </div>

                <div className={styles.contato}><h1>Adicione um E-mail e um Telefone para contato</h1></div>
                <div className={styles.coisa}>
                    <div className={styles.conte}>
                        <input type="text" placeholder="E-mail" />
                    </div>
                    <div className={styles.conte}>
                        <input type="text" placeholder="Telefone" />
                    </div>
                </div>

            </div>
        </div>

    );
}