import guilherme from "./assets/guilherme.png";
import hayeska from "./assets/hayeska.png";
import leonardo from "./assets/leonardo.png";
import quezia from "./assets/quezia.png";

import Instagram from "./assets/instagram.png"
import gmail from './assets/gmail.png'



import Usuarios from "./components/Usuarios.jsx";
import Cabecalho from "./components/header.jsx";
import Rodape from './components/Footer.jsx'


import "./App.css";

function App() {
  return (
    <>

<Cabecalho/>
    <aside>
    <article className="blocos">
        <Usuarios nome="Guilherme G. Santana" img={guilherme} descricao="É uma pessoa dedicada e muito inteligente"/>
        <Usuarios nome="Hayeska L. A. Machado" img={hayeska} descricao="É uma pessoa muito linda e incrível"/>
        <Usuarios nome="Leonardo M. Vicente" img={leonardo} descricao="É uma pessoa muito inteligente e querida"/>
        <Usuarios nome="Quezia A. Vieira" img={quezia} descricao="É uma pessoa maravilhosa e muito carismática"/>
      </article>


    
      </aside>

      <Rodape imgi={Instagram} insta="@vieiraquezia08" imge={gmail} email="vieiraquezia24@gmail.com" texto="Responsável pelo desenvolvimento: Quezia Amaral Vieira" />
    </>
  );
}

export default App;
