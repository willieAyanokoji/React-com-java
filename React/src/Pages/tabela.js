import {useEffect,useState} from 'react'
import {produtoDTO} from '../DTO/produto'
import { redirect } from "react-router-dom";
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Tabela() {
    let navigate = useNavigate();

    const [produtos,setProdutos] = useState([]);
    const [objProduto,setObjProduto] = useState(produtoDTO);
    useEffect(()=>{
        fetch('http://localhost:8070/Listar')
        .then(retorno =>retorno.json())
        .then(retorno_convertido =>setProdutos(retorno_convertido));
        
        
    }); // se eu colocar [] preicso dar F5 na pagina
    function remover(id){
        fetch('http://localhost:8070/remover/'+id,{
            method:'DELETE',
            body:id,
            headers:{
                'Content-type':'application/json',
                'Accept':'application/json'
            }
        })
        .then(retorno =>{
            if(!retorno.ok){
                throw Error(retorno.statusText)
            }else{
                retorno.json()
            }
        })
        .then(retorno_convertido=>{
            navigate('/');
        })
        .catch(err=>{
            navigate('/casa')
        })
        
    }
    return (
        <div className='d-flex justify-content-center'>
            <table className="w-50 table table-dark table-striped">
                <thead> {/**Cabecalho da tabela, aonde fica o que vai se cada coluna*/}
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Valor</th>
                        <th>Selecionar</th>
                    </tr>
                </thead>
                <tbody> {/*Esse é o corpo aonde fica as informações em si */}
                    {
                        produtos.map((obj,id) => (
                            <tr key={id}>
                                <td>{id+1}</td>
                                <td>{obj.nome}</td>
                                <td>{obj.valor}</td>
                                <td><button onClick={(event)=>remover(obj.codigo)} className='btn btn-info'>Editar</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Tabela;