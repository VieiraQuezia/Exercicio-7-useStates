import './header.css'

import logo from "../assets/logo.png";

function cabecalho(){
    
    return (
        <>
        <header>
            
       <h1> DESAFIO 1 de PROPS - REACT</h1>
        <img src={logo} className="logo react" alt="React logo" />
       
    </header>
    </>
    )
}

export default cabecalho