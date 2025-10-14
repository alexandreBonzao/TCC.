import styles from "./Menu.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const [openCategorias, setOpenCategorias] = useState(false);
  const [openVender, setOpenVender] = useState(false);

  const toggleDropdownCategorias = () => {
    setOpenCategorias(!openCategorias);
    setOpenVender(false); // Fecha o outro menu
  };

  const toggleDropdownVender = () => {
    setOpenVender(!openVender);
    setOpenCategorias(false); // Fecha o outro menu
  };

  return (
    <div className={styles.container}>
      <div className={styles.conteudo}>
        
        {/* CATEGORIAS */}
        <div className={styles.c1} onClick={toggleDropdownCategorias}>
          Categorias
          {openCategorias && (
            <div className={styles.dropc1}>
              <Link to="/produtos"><div>Produtos</div></Link>
              <Link to="/servicos"><div>Serviços</div></Link>
              <Link to="/produtos"><div>Maquinários</div></Link>
              <Link to="/produtos"><div>Peças</div></Link>
            </div>
          )}
        </div>

        {/* VENDER */}
        <div className={styles.c2} onClick={toggleDropdownVender}>
          Vender
          {openVender && (
            <div className={styles.dropc2}>
              <Link to="/produtoAdd"><div>Produto</div></Link>
              <Link to="/servicosAdd"><div>Serviço</div></Link>
            </div>
          )}
        </div>

        {/* CONTATO */}
        <Link to="/contato" className={styles.c3}>
          <div>Contato</div>
        </Link>

        {/* CONTA */}
        <Link to="/conta" className={styles.c4}>
          <div>Conta</div>
        </Link>

      </div>
    </div>
  );
}