import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function PerguntasFormulario(props) {
    const [perguntas, setPergunta] = useState([]);
    const [formularios, setFormularios] = useState([]);
    

    
    useEffect(
        () => {
            
            const {id} = props.match.params;
            console.log(id)
            axios.get(`http://localhost:3003/globalhitss/pergsFormulario/${id}`)
                .then(
                    (res) => {
                        const get = res.data;
                        const perguntas = Object.assign(get);
                        setFormularios(perguntas)
                        setPergunta(perguntas.pergs)
                    }
                )
        }, [props.match.params]
    );
    
    
    return (
        <>
            <h3>Perguntas do Formulário {formularios.tipo}</h3>
            {/* <Link to={`/inserirFormulario/${time.id}`}>Adicionar</Link> */}
            

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Pergunta</th>
                        <th>Tipo de Resposta</th>                        
                        <th>Mais Informações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        perguntas.length > 0 ? (
                            perguntas.map(
                                (pergunta, index) =>(
                                    <tr key={index}>
                                        <td>{pergunta.idFormulario}</td>
                                        <td>{pergunta.textoPergunta}</td>
                                        <td>{pergunta.tipo}</td>
                                        <td><Link to={`/detalhesPergunta/${pergunta.id}`}>Detalhes</Link></td>
                                    </tr>
                                )
                            )
                        ):(
                            <tr>
                                <td colSpan='3'>Nenhuma pergunta registrada</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

            <p><Link to={`/detalhesFormulario/${perguntas.id}`}>Voltar</Link></p>
          
        </>
    )
};