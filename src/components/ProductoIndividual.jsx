import React from 'react';
import Button from "react-bootstrap/Button";
import axios from 'axios';

const ProductoIndividual = ({ description, title, _id, id }) => {
const url = 'http://localhost:3001/api/tasks/';        

        
        const eliminarProducto = (idAElminar) => {
                console.log('1. A eliminar = ' + idAElminar)
                const id_a_eliminar = 'http://localhost:3001/api/tasks/' + JSON.stringify(idAElminar["_id"]).replace('"', '').replace('"', '')
                console.log('2. A eliminar = ' + id_a_eliminar)
                try {
                        axios({ method: 'DELETE', url: id_a_eliminar,  headers: {'Accept': 'application/json', 'Content-type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:3000', 'Access-Control-Allow-Credentials': true}})
                } catch (err) {
                        console.log(err)
                }
                
                
     }


    return (
        
            <tr>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{description}</td>
                    <td>{_id}</td>
                    <td>@mdo</td>
                    <td><Button onClick={() => eliminarProducto({_id})} variant="danger" >Eliminar</Button></td>
            </tr>
        
    )
}

export default ProductoIndividual
