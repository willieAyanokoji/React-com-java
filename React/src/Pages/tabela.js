import {useEffect,useState} from 'react'

function Tabela({ }) {
    const [produtos,setProdutos] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8070/Listar')
        .then(retorno =>retorno.json())
        .then(retorno_convertido =>setProdutos(retorno_convertido));

    },[]);
    return (
        <div>
           
            <table className="table table-dark table-striped">
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
                                <td><button className='btn btn-info'>Editar</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Tabela;