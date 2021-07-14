import axios from 'axios';
import { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';

export default function InserirResposta() {
    const [state, setState] = useState({
        resposta: {
            idFormulario: '',
            idAvaliador: '',
            idAvaliado: '',
            idPergunta: '',
            respostaEnviada: ''
        }
    });
    const [redirect, setRedirect] = useState(false);

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setState({
            resposta: {
                ...state.resposta, [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        const req = state.resposta;
        axios({
            method: 'post',
            url: 'http://localhost:3003/globalhitss/inserirResposta',
            data: req,
            headers: { "Content-Type": "application/json" }
        }).then(
            data => {
                if (data) {
                    alert("Dados inseridos com sucesso")
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
        return <Redirect to='/respostas' />
    } else {
        return (
            <div className="form">
                <h3>Adicionar Resposta</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>idFormulario</label>
                        <input
                            type='text'
                            name='idFormulario'
                            className='form-control'
                            placeholder="idFormulario"
                            required
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>idAvaliador</label>
                        <input
                            type='text'
                            name='idAvaliador'
                            className='form-control'
                            placeholder="idAvaliador"
                            required
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>idAvaliado</label>
                        <input
                            type='text'
                            name='idAvaliado'
                            className='form-control'
                            placeholder="idAvaliado"
                            required
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>idPergunta</label>
                        <input
                            type='text'
                            name='idPergunta'
                            className='form-control'
                            placeholder="idPergunta"
                            required
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Resposta</label>
                        <input
                            type='text'
                            name='respostaEnviada'
                            className='form-control'
                            placeholder="respostaEnviada"
                            required
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type='submit' className="btn btn-success mt-3">
                        Adicionar
                    </button>
                </form>
                <p><Link to='/respostas'>Voltar</Link> </p>
            </div>
        )

    }

}
