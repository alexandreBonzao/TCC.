import Topo from '../../components/Topo'
import Menu from '../../components/Menu'
import Carro from '../../components/Carro'
import Cards from '../../components/Cards'

import './Home.module.css'



export default function Home() {


  return (
    <div className="App">
    <div><Topo/></div>
    <div><Menu/></div>
    <div><Carro/> </div>
    <div><Cards/></div>
  </div>
  )
}


