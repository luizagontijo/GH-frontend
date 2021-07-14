import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function MainTimes() {
    const [state, setState] = useState({
        times: []
    })


    //useeffec chama atravez do axis o node no backend (pelo cors) e tras os dados
    //função para retornar os dados da tabela de times
    //axios serve pra fazer consumo de api, ele retorna o conjunto de informações
    //se comunica com o backend, pega os dados do time e tras pra dentro no state
    useEffect(
        () => {
            axios.get('http://localhost:3003/globalhitss/times')
                .then(
                    res => {
                        const times = res.data;
                        setState({ times })
                    }
                )
        }, []
    );
    console.log(state);
    const { times } = state;
    return (
        <>
            <h3>Times</h3>
            <Link to={'/inserirTime'}>Adicionar</Link>
            <div className="row mt-3 p-3 justify-content-between rounded shadow">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th colspan="4" >Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        times.map(

                            (time, key) =>
                            (
                                <tr key={key}>
                                    <td>{time.nome}</td>
                                    <td><Link to={`/inserirUsuario/${time.id}`}>Adicionar Usuário</Link></td>
                                    <td><Link to={`/detalhesTime/${time.id}`}>Detalhes do Time</Link></td>
                                    <td><Link to={`/editarTime/${time.id}`}>Editar</Link></td>
                                    <td><Link to={`/excluirTime/${time.id}`}>Excluir</Link></td>
                                </tr>
                            )
                        )
                    }


                </tbody>
            </table>
            </div>
            <p className="mt-3"><Link>Voltar</Link></p>
        </>
    )
}
