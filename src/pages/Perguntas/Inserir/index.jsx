import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function InserirPergunta(props) {
    const [state, setState] = useState({
        pergunta: {
            idFormulario: '',
            textoPergunta: '',
            tipo: ''
        }
    });
    const [redirect, setRedirect] = useState(false);

    useEffect(
        () => {
            const{id} = props.match.params;
            setState({
                pergunta: {
                    idFormulario: id,
                    textoPergunta: '',
                    tipo: ''
                }
            });
        },[props.match.params]
    )

    const handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        setState({
            pergunta: {
                ...state.pergunta, [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        const req = state.pergunta;
        axios({
            method: 'post',
            url: 'http://localhost:3003/globalhitss/inserirPergunta',
            data: req,
            headers: { "Content-Type": "application/json" }
        }).then(
            data => {
                if (data) {
                    // alert("Dados inseridos com sucesso")
                    setRedirect(true);
                }
            }
        ).catch(
            () => { console.log("Não foi possível adicionar os dados") }
        );
        e.preventDefault();
    }

    console.log(state)

    if (redirect) {
        return 
        // <Redirect to={`/inserirPergunta/${state.pergunta.idFormulario}`}  />
    } else {
        return (
            <div className="form-group">
                <h3>Adicionar Pergunta</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group form-hidden">
                        <label>idFormulario</label>
                        <input
                            type='text'
                            name='idFormulario'
                            className='form-control'
                            placeholder="idFormulario"
                            required
                            value={state.pergunta.idFormulario}
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Digite a pergunta:</label>
                        <input
                            type='text'
                            name='textoPergunta'
                            className='form-control'
                            placeholder="textoPergunta"
                            required
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Tipo da Resposta:</label>
                        <select className="form-check-input"
                            type='radio'
                            name='tipo'
                            className='form-control'
                            placeholder="tipo"
                            required
                            onChange={handleInputChange}>
                                
                            <option value="" selected disabled>Selecionar</option>
                            <option value="texto">Texto</option>
                            <option value="radio">Alternativas</option>
                            <option value="boolean">Sim ou Não</option>
                        </select>    
                        
                    
                    <button type='submit' className="btn btn-success mt-3 mb-3" onClick={() => window.location.href = `/inserirPergunta/${state.pergunta.idFormulario}`}>
                       Cadastrar outra pergunta
                    </button>
                    <button type='submit' className="btn btn-success mt-3 mb-3" onClick={() => window.location.href = `/formularios`}>
                       Cadastrar e Finalizar
                    </button>
                    <p><Link to={`/formularios`} >Voltar</Link></p>
                    </div>
                </form>
                
            </div>
        )

    }

}
