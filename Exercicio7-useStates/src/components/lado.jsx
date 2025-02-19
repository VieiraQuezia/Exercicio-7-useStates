import "./lado.css"


function Lado(props) {
  return (
    <>
    <div className="aside">
        <h2>Valores do grupo</h2>
        <ul>
          <li>{props.val1}</li>
          <li>{props.val2}</li>
          <li>{props.val3}</li>
        </ul>
    </div>
    </>
  );
}

export default Lado