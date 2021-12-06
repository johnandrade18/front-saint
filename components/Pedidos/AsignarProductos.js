import React, {useEffect, useState, useContext} from 'react';;
import Select from 'react-select'
import { gql, useQuery } from '@apollo/client'
import PedidoContext from '../../context/Pedidos/PedidoContext';

const OBTENER_PRODUCTOS = gql`
    query obtenerProductos {
        obtenerProductos {
        id
        nombre
        precio
        existencia
        }
    }
`;

const AsignarProductos = () => {

    //state local del componente
    const [ productos, setProductos ] = useState([]);

    //Context de pedidos
    const pedidoContext = useContext(PedidoContext);
    const {agregarProducto} = pedidoContext;

    //Consulta a la base de datos
    const { data, loading, error} = useQuery(OBTENER_PRODUCTOS);
    
    useEffect( ()=> {
        
        //TODO : Función para pasar a PedidoState.js
        agregarProducto(productos);

    }, [productos])

    const seleccionarProducto = producto => {
        setProductos(producto)
      }

    //Prevenir que no cargue el componente si no hay resultados
    if(loading) return null;
    const {obtenerProductos} = data;

    return (
        <>
        <p className="mt-10 my-2 bg-white border-l-4 border-gray-800 text-gray-700 p-2 text-sm font-bold">2. - Selecciona o busca los productos </p>
    <Select
    className="mt-3"
         options = {obtenerProductos}
         onChange = {opcion => seleccionarProducto(opcion) }
         isMulti = {true}
         //pasando el prop para que acepte los valores desde la base de datos
         getOptionValue = { opciones => opciones.id}
         //para q se lean los nombres de los valores que entran desde la base de datos
         getOptionLabel = {opciones => `${opciones.nombre} - ${opciones.existencia} Disponibles` } 
         placeholder = "Busque o seleccione el producto"
         noOptionsMessage = { () => "No hay resultados"}
        />
    </>
    );
}

export default AsignarProductos;