import "./styles.scss"
import { Text, View } from '@react-pdf/renderer';
const Tarjeta = (props)=>{
    return(
        <>
        <div className = "contenedor">
        <h2 className="tituloempresa">{props.titulo}</h2>
        <h3 className="titulofecha">{props.titulo2}</h3>
        <h3 className="titulopuesto">{props.titulo3}</h3>
        <p className="texto">{props.texto}</p>
        </div>
        </>
    )}

export default Tarjeta;