import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

export default function DetalhesPergunta(props) {
    const [state, setState] = useState({
        pergunta: []
    });

    useEffect(
        () => {
            const { id } = props.match.params;
            axios.get(`http://localhost:3003/globalhitss/perguntas/${id}`)
                .then(
                    res => {
                        const pergunta = res.data;
                        setState({ pergunta })
                    }
                )
        }, [props.match.params]
    )

    const { pergunta } = state;
    return (
        <>
            <h3>Detalhes da Pergunta</h3>
            <div className="row mt-5 p-3 justify-content-between rounded shadow">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Informações</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p>idFormulario: {pergunta.idFormulario}</p>
                            <p>Pergunta: {pergunta.idFormulario}</p>
                            <p>Tipo de Resposta: {pergunta.tipo}</p>

                            <p>Criada em: {moment(pergunta.createdAt).format('DD/MM/YYYY')}</p>
                            <p>Editada em: {moment(pergunta.updatedAt).format('DD/MM/YYYY')}</p>
                        </td>
                        <td>
                            <p><Link to={`/respostasPergunta/${pergunta.id}`}>Ver Respostas</Link></p>
                            <p> - </p>
                            <p><Link to={`/editarPergunta/${pergunta.id}`}>Editar</Link></p>
                            <p><Link to={`/excluirPergunta/${pergunta.id}`}>Excluir</Link></p>
                        </td>
                    </tr>



                </tbody>
            </table>
            </div>
            <button className="btnback mt-3"><Link to='/perguntas'>Voltar</Link></button>
        </>
    )
}
