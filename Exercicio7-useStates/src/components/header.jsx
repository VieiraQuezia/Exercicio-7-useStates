import './header.css'

import logo from "../assets/logo.png";

function cabecalho(){
    
    return (
        <>
        <header>
            
       <h1>Exercício 7 - Cartão de Usuário Dinâmico</h1>
        <img src={logo} className="logo react" alt="React logo" />
       
    </header>
    </>
    )
}

export default cabecalho