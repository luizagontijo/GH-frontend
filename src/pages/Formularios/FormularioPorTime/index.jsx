import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function FormulariosPorTime(props) {
    const [formularios, setFormularios] = useState([]);
    const [time, setTime] = useState([]);

    useEffect(
        () => {
            const { id } = props.match.params;
            console.log(id)
            axios.get(`http://localhost:3003/globalhitss/formsTime/${id}`)
                .then(
                    (res) => {
                        const get = res.data;
                        const formularios = Object.assign(get);
                        setTime(formularios)
                        setFormularios(formularios.forms)
                    }
                )
        }, [props.match.params]
    );

    return (
        <>
            <h3>Formulários de {time.nome}</h3>
            <Link to={`/inserirFormulario/${time.id}`}>Adicionar</Link>            

            <div className=" d-flex">
                {
                    formularios.length > 0 ? (
                        formularios.map(
                            (formulario, index) => (
                                <div className="formIndividual m-1 rounded shadow-lg" key={index} >
                                    <div className="text-center p-5">
                                        <div className="text" >
                                            <h5 className="tipoform"><strong>Formulário para</strong></h5>
                                            <h5 className="tipoform"><strong>{formulario.tipo}</strong></h5>
                                            <div className="formBotoes">                                                
                                                <p className="liteste mb-3"><Link to={`/inserirPergunta/${formulario.id}`} >Cadastrar Pergunta</Link></p>
                                                <p className="liteste mb-3"><Link to={`/perguntasFormulario/${formulario.id}`}>Ver Perguntas</Link></p>
                                                <p className="liteste mb-3"><Link to={`/editarFormulario/${formulario.id}`}>Editar</Link></p>
                                                <p className="liteste mb-3"><Link to={`/excluirFormulario/${formulario.id}`}>Excluir</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                    ) : (
                        <tr>
                            <td colSpan='3'>Nenhum usuário registrado</td>
                        </tr>
                    )
                }
            </div>
            <p><Link to={`/detalhesTime/${formularios.id}`}>Voltar</Link></p>

        </>
    )
};