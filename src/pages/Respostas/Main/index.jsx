import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

export default function MainRespostas (props) {
    const [state, setState] = useState({
        respostas: []
    });

    useEffect(
        () => {
            axios.get(`http://localhost:3003/globalhitss/respostas`)
                .then(
                    res => {
                        const respostas = res.data;
                        setState({ respostas })
                    }
                )
        }, []
    )

    const { respostas } = state;
    return (
        <>
            <h3>Respostas</h3>
            <Link to={'/inserirResposta'}>Adicionar</Link>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>idFormulario</th>
                        <th>idAvaliador</th>
                        <th>idAvaliado</th>
                        <th>idPergunta</th>
                        <th>Resposta</th>
                        <th>Criado em</th>
                        <th>Editado em</th>
                        <th>Ações</th>
                        <th>Mais Informações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        respostas.map(

                            (resposta, key) =>
                            (
                                <tr key={key}>
                                    <td>{resposta.idFormulario}</td>
                                    <td>{resposta.idAvaliador}</td>
                                    <td>{resposta.idAvaliado}</td>
                                    <td>{resposta.idPergunta}</td>
                                    <td>{resposta.respostaEnviada}</td>
                                    <td>{moment(resposta.createdAt).format('DD/MM/YYYY')}</td>
                                    <td>{moment(resposta.updatedAt).format('DD/MM/YYYY')}</td>
                                    <td><Link to={`/editarResposta/${resposta.id}`}>Editar</Link> <Link to={`/excluirResposta/${resposta.id}`}>Excluir</Link></td>
                                    <td><Link to={`/detalhesResposta/${resposta.id}`}>Detalhes</Link></td> 
                                </tr>
                            )
                        )
                    }

                </tbody>
            </table>
            <p><Link>Voltar</Link></p>
        </>
    )
};