import { useState } from "react";

import '../components/botao.css'
import "./Usuarios.css";

function perfil(props) {
const [tema, setTema] = useState(false);
const [seguir, setSeguir] = useState('Seguir')

const mudarTema = () => {setTema(!tema);
  setSeguir('Seguindo')
  setTema(true)

  if (seguir === 'Seguindo') {
    setSeguir('Seguir')
    setTema(false)
  }
  else{

    setSeguir('Seguindo') 
    setTema(true) 
  }

}
return (
    <>

     <nav className="bloco">

    
          <h2>{props.nome}</h2>
          <img className="imagem" src={props.img} />
          <h3>Descrição:<p>{props.descricao}</p></h3>
          <button className={tema ? "seguindo" : "seguir"} onClick={mudarTema}>{seguir}</button>





          </nav>

        
    </>
  );
}

export default perfil;
