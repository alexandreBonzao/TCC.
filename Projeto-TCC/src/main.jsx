import React from 'react'
import { AuthProvider } from './contexts/AuthContext'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Login from './Router/login/Login.jsx';
import Home from './Router/home/Home.jsx';
import Conta from './Router/conta/Conta.jsx';
import EditarP from './Router/editarPessoais/EditarP.jsx';
import EditarE from './Router/editarEndereco/EditarE.jsx';
import Cadastro from './Router/Cadastrar/Cadastro';
import Produtos from './Router/produtos/produtos.jsx';
import ProdutoAdd from './Router/ProdutoAdd/ProdutoAdd.jsx';
import ProdutoVer from './Router/ProdutoVer/ProdutoVer.jsx';
import Servico from './Router/servicos/servicos.jsx';
import ServicoVer from './Router/servicosVer/servicosVer.jsx';
import ServicoAdd from './Router/servicosAdd/servicosAdd.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/conta",
    element: <Conta/>,
  },
  {
    path: "/editarP",
    element: <EditarP/>,
  },
  {
    path: "/editarE",
    element: <EditarE/>,
  },
  {
    path: "/produtos",
    element: <Produtos/>,
  },
  {
    path: "/cadastro",
    element: <Cadastro/>,
  },
  {
    path: "/produtoAdd",
    element: <ProdutoAdd/>,
  },
  {
    path: "/produtoVer",
    element: <ProdutoVer/>,
  },
  {
    path: "/servicos",
    element: <Servico/>,
  },
  {
    path: "/servicosAdd",
    element: <ServicoAdd/>,
  },
  {
    path: "/servicosVer",
    element: <ServicoVer/>,
  },
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router ={router} />
    </AuthProvider>
  </React.StrictMode>
)
