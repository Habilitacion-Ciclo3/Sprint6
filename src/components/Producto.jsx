import React, {useState, useEffect} from 'react'
import Table from "react-bootstrap/Table";
import ProductoIndividual from './ProductoIndividual';
import axios from 'axios'

const Producto = () => {
    //const [productos, setProductos] = useState([]);
    const url = 'http://localhost:3001/api/tasks';
    const [respuestaAPI, setRespuestaAPI] = useState({ respuesta: 'KO' });
 
    // const cargarProductos = async () => {
    //     const url = 'http://localhost:3001/api';
    //     const request = '/tasks';
    //     await axios.get(url + request).then(res => {            
    //         const productosLlamados = res.data;            
    //         setProductos(productosLlamados)
    //         return productosLlamados;
            
    //     })
    // }

    useEffect(() => {
    const consultaAPI = async () => {
      const consulta = await axios({ method: 'GET', url: url });
 
        setRespuestaAPI(consulta.data);

        
        
    };
    
        consultaAPI();

        
        
    }, []);


    
    const MostrarRespuesta = () => {
    return Object.keys(respuestaAPI).map(key => {
      return (
          <tbody key={key}>
              <ProductoIndividual _id={respuestaAPI[key]['_id']} id={key} description={respuestaAPI[key]['description']}
              title={respuestaAPI[key]['title']}
              />
                {console.log(respuestaAPI[key]['description'])}    
                           
        </tbody>
      );
    });
  };

    
    

    return (
        <div>
            
            
            
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>id</th>
                        <th></th>
                    <th>Precio</th>
                    <th>color</th>
                    <th>Imagen</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            
                   <MostrarRespuesta />                
            
        </Table>
        </div>
    )
}

export default Producto
