import Header from '../Componente/Header'
import $ from 'jquery';
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import { produtoDTO } from '../DTO/produto';
import React,{ useState } from 'react';

     

function Formulario(){
    const [form,setForm]= useState({
        nome: "",
        valor:""
    })
    const setValores = (e)=>{
        let newProp = form;
        newProp[e.target.name] =e.target.value;
        setForm({...newProp})
    }
    function imprimir(){
        fetch('http://localhost:8070/Cadastrar',{
            method:'post',
            body:JSON.stringify(form),
            headers:{
                'Content-type':'application/json',
                'Accept':'application/json'
            }
        })
        .then(retorno =>retorno.json())
        .then(retorno_convertido=>{
            console.log(retorno_convertido)
        })
    }
    return(
        
        <div className="App-header">
            <div className="col-xl-12">
                <div className="col-xl-6">
                    <label>Nome</label>
                </div>
                <div className="col-xl-6">
                    <input
                    onChange={(e)=>setValores(e)}
                    name ="nome"
                     id="nomeId" type="text"></input>
                </div>
            </div>  
            <div className="col-xl-12">
                <div className="col-xl-6">
                    <label>Valor</label>
                </div>
                <div className="col-xl-6">
                    <input
                    onChange={(e)=>setValores(e)}
                    name="valor"
                     id= "valorId" type="number"></input>
                </div>
            </div>
            <br></br>
            <div className='col-xl-12'>
                <button id='enviar' onClick={imprimir} className='btn w-100 btn-primary'>Enviar</button>
            </div>
        </div>
       
    )
}

export default Formulario;