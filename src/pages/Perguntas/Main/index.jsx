import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

export default function MainPerguntas (props) {
    const [state, setState] = useState({
        perguntas: []
    });

    useEffect(
        () => {
            axios.get(`http://localhost:3003/globalhitss/perguntas`)
                .then(
                    res => {
                        const perguntas = res.data;
                        setState({ perguntas })
                    }
                )
        }, []
    )

    const { perguntas } = state;
    return (
        <>
            <h3>Perguntas</h3>
            <div className="row mt-3 p-3 justify-content-between rounded shadow">

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Formulário</th>
                        <th>Pergunta</th>
                        <th>Tipo de Resposta</th>
                        <th>Criado em</th>
                        <th>Editado em</th>
                        <th>Ações</th>
                        <th>Mais Informações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        perguntas.map(

                            (pergunta, key) =>
                            (
                                <tr key={key}>
                                    <td>{pergunta.idFormulario}</td>
                                    <td>{pergunta.textoPergunta}</td>
                                    <td>{pergunta.tipo}</td>
                                    <td>{moment(pergunta.createdAt).format('DD/MM/YYYY')}</td>
                                    <td>{moment(pergunta.updatedAt).format('DD/MM/YYYY')}</td>
                                    <td><Link to={`/editarPergunta/${pergunta.id}`}>Editar</Link> <Link to={`/excluirPergunta/${pergunta.id}`}>Excluir</Link></td>
                                    <td><Link to={`/detalhesPergunta/${pergunta.id}`}>Detalhes</Link></td> 
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
};