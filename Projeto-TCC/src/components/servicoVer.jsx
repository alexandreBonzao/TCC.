import styles from './servicoVer.module.css';
import Carousel from 'react-bootstrap/Carousel';
import Capinador from '../assets/capinador.png';
import makita2 from '../assets/makita1.webp';
import makita3 from '../assets/makita2.webp';

export default function ProdutosVer(){
    return(
        <div className={styles.tudo}>
            <div className={styles.container}>
                <div className={styles.produto}>
                    <div className={styles.carro}>
                        <Carousel>
                            <Carousel.Item>
                                <img className={styles.img1} src={Capinador} alt="Primeiro slide" />
                                <Carousel.Caption></Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className={styles.img1} src={makita2} alt="Segundo slide" />
                                <Carousel.Caption></Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className={styles.img1} src={makita3} alt="Terceiro slide" />
                                <Carousel.Caption></Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className={styles.conteudo}>
                        <div className={styles.titulo}><h1>Capinador Profissional</h1></div>
                        <div className={styles.desc}><h1>Sou Ricardo Melo Pinto, tenho 28 anos</h1></div>
                        <div className={styles.endereco}><h1>Lencois Paulista - SP</h1></div>
                        <div className={styles.preco}><h1>R$100,00</h1></div>
                    </div>
                </div>

                <div className={styles.contato}><h1>Se houver interesse entre em contato com o vendedor</h1></div>
                <div className={styles.coisa}>
                    <div className={styles.conte}>
                        <h2>E-mail:</h2>
                        <h1>vendedorservico@gmail.com</h1>
                    </div>
                    <div className={styles.conte}>
                        <h2>Telefone:</h2>
                        <h1>13 9914-1954</h1>
                    </div>
                </div>

            </div>
        </div>
    );
}