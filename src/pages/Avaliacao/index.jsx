import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Avaliacao(props) {
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
            <h3 className="mb-4">Perguntas do Formulário {formularios.tipo}</h3>
            {/* <Link to={`/inserirFormulario/${time.id}`}>Adicionar</Link> */}
            {/* <Link to="/formularios" className="btn btn-success mt-3">Voltar</Link> */}

            <div className="">
                
                
                <div>
                    {
                        perguntas.length > 0 ? (
                            perguntas.map(
                                (pergunta, index) =>(
                                    <div key={index}>
                                        <div className="mb-4">
                                            <label>{pergunta.textoPergunta}</label>
                                            <input
                                                type='text'
                                                name='idFormulario'
                                                className='form-control'
                                                placeholder="digite sua resposta"
                                                required
                                            />
                                        </div>
                                    </div>
                                )
                            )
                        ):(
                            <div>
                                <div colSpan='3'>Nenhuma pergunta registrada</div>
                            </div>
                        )
                    }
                </div>
            </div>

            <p><Link to={`/detalhesFormulario/${perguntas.id}`}>Voltar</Link></p>
          
        </>
    )
};