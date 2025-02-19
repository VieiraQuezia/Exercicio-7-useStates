import './Footer.css'

function Footer (props) {
    return (
        <>
        <div className='Footer'> 
           <img src={props.imgi} />
           <p>{props.insta}</p> 
           <img src={props.imge}/>
           <p>{props.email}</p>
           <p>{props.texto}</p> 
          
        </div>
        
        
        </>
    )
}

export default Footer