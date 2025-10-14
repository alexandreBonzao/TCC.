import styles from "./produto.module.css";
import makita from "../assets/makita.png";
import { Link } from "react-router-dom";

export default function Produto(){
    return(
        <div className={styles.tudo}>
            <div className={styles.container}>
                <div className={styles.filtro}>
                    <div className={styles.fpreco}>
                        <h1>Preço</h1>

                        <div className={styles.marcar}>
                            <div className={styles.primeiro}>
                                <h2>R$100,00 até R$500,00</h2>
                                <input type="checkbox"/>
                            </div>
                            <div className={styles.segundo}>
                                <h2>R$500,00 até R$1000,00</h2>
                                <input type="checkbox"/>
                            </div>
                            <div className={styles.terceiro}>
                                <h2>R$1000,00 até R$5000,00</h2>
                                <input type="checkbox"/>
                            </div>

                            <div className={styles.menor}>
                                <h1>Menor Preço</h1>
                                <input type="checkbox"/>
                            </div>
                            <div className={styles.maior}>
                                <h1>Maior Preço</h1>
                                <input type="checkbox"/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.fcategoria}>
                        <h1>Categorias</h1>

                        <div className={styles.marcar}>
                            <div className={styles.cprimeiro}>
                                <h2>Todos os Produtos</h2>
                                <input type="checkbox"/>
                            </div>
                            <div className={styles.csegundo}>
                                <h2>Maquinários</h2>
                                <input type="checkbox"/>
                            </div>
                            <div className={styles.cterceiro}>
                                <h2>Peças</h2>
                                <input type="checkbox"/>
                            </div>
                            <div className={styles.cquarto}>
                                <h2>Serviços</h2>
                                <input type="checkbox"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.gprod}>
                    
                    <Link to="/produtoVer" className={styles.produtos}>
                        <div className={styles.img}><img src={makita} alt="Makita"/></div>
                        <div className={styles.conteudo}>
                        <div className={styles.titulo}><h1>Makita</h1></div>
                        <div className={styles.desc}><h1>Serra Mármore 1200W 110mm M0400B-127V</h1></div>
                        <div className={styles.preco}><h1>R$100,00</h1></div>
                        <div className={styles.endereco}><h1>Lencois Paulista - SP</h1></div>
                        </div>
                    </Link>

                    <Link to="/produtoVer" className={styles.produtos}>
                        <div className={styles.img}><img src={makita} alt="Makita"/></div>
                        <div className={styles.conteudo}>
                        <div className={styles.titulo}><h1>Makita</h1></div>
                        <div className={styles.desc}><h1>Serra Mármore 1200W 110mm M0400B-127V</h1></div>
                        <div className={styles.preco}><h1>R$100,00</h1></div>
                        <div className={styles.endereco}><h1>Lencois Paulista - SP</h1></div>
                        </div>
                    </Link>

                    <Link to="/produtoVer" className={styles.produtos}>
                        <div className={styles.img}><img src={makita} alt="Makita"/></div>
                        <div className={styles.conteudo}>
                        <div className={styles.titulo}><h1>Makita</h1></div>
                        <div className={styles.desc}><h1>Serra Mármore 1200W 110mm M0400B-127V</h1></div>
                        <div className={styles.preco}><h1>R$100,00</h1></div>
                        <div className={styles.endereco}><h1>Lencois Paulista - SP</h1></div>
                        </div>
                    </Link>

                    <Link to="/produtoVer" className={styles.produtos}>
                        <div className={styles.img}><img src={makita} alt="Makita"/></div>
                        <div className={styles.conteudo}>
                        <div className={styles.titulo}><h1>Makita</h1></div>
                        <div className={styles.desc}><h1>Serra Mármore 1200W 110mm M0400B-127V</h1></div>
                        <div className={styles.preco}><h1>R$100,00</h1></div>
                        <div className={styles.endereco}><h1>Lencois Paulista - SP</h1></div>
                        </div>
                    </Link>

                    <Link to="/produtoVer" className={styles.produtos}>
                        <div className={styles.img}><img src={makita} alt="Makita"/></div>
                        <div className={styles.conteudo}>
                        <div className={styles.titulo}><h1>Makita</h1></div>
                        <div className={styles.desc}><h1>Serra Mármore 1200W 110mm M0400B-127V</h1></div>
                        <div className={styles.preco}><h1>R$100,00</h1></div>
                        <div className={styles.endereco}><h1>Lencois Paulista - SP</h1></div>
                        </div>
                    </Link>

                </div>

            </div>
        </div>
    );
}