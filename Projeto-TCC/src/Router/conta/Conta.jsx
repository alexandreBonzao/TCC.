import Topo from '../../components/Topo'
import Menu from '../../components/Menu'
import Conteudo from '../../components/Conteudo'

import './Conta.module.css'

export default function Conta() {


    return (
      <div className="App">
        <div><Topo/></div>
        <div><Menu/></div>
        <div><Conteudo/></div>
      </div>
    );
  }