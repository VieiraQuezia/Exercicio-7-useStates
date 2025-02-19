import "./Usuarios.css";

function perfil(props) {
  return (
    <>

     <nav className="bloco">

    
          <h2>{props.nome}</h2>
          <img className="imagem" src={props.img} />
          <h3>Hobby:<p>{props.hobby}</p></h3>
          </nav>
    </>
  );
}

export default perfil;
