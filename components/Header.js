import React from 'react';
import {useQuery,gql} from '@apollo/client'
import{ useRouter} from 'next/router'
import 'tailwindcss/dist/tailwind.min.css'


const OBTENER_USUARIO = gql`
    query obtenerUsuario{
        obtenerUsuario{
            id
            nombre
            apellido
        }
    }
`;

const Header = () => {

    const router = useRouter();

    // query de pollo 
    const { data, loading, error} = useQuery(OBTENER_USUARIO);

    //proteger que no accedamos a data antes  de tener resultado
    if(loading) return null;


    // si no hay informacion
    if(!data){
        return router.push('/login');
    }

    const{ nombre, apellido } = data.obtenerUsuario;

    const cerrarSesion= ()=>{
        localStorage.removeItem('token');
        router.push('/login');
    }


    return (
      <div className="sm:flex sm:justify-between mb-6">
        <p className="text-base text-white mr-2 mb-5 lg:mb-0">
         <strong>Hola: {nombre} {apellido}!</strong>
        </p>

        <button
          onClick={() => cerrarSesion()}
          type="button "
          className="bg-blue-800 w-full sm:w-auto font-bold uppercase text-xs rounded py-2 px-2 text-white shadow-md"
        >
          Cerrar sesión
        </button>
      </div>
    );
}

export default Header;