import axios from 'axios';
import { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';

export default function EditarResposta(props) {
    const [state, setState] = useState({
        resposta: {
            idFormulario: '',
            idAvaliador: '',
            idAvaliado: '',
            idResposta: '',
            respostaEnviada: ''
        }
    });

    //tras os dados através do id
    useEffect(
        () => {
            const { id } = props.match.params;

            axios.get(`http://localhost:3003/globalhitss/respostas/${id}`)
                .then(
                    res => {
                        const resposta = res.data;
                        setState({ resposta })
                    }
                )
        }, [props.match.params]
    )

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
        const { id } = state.resposta;
        axios({
            method: 'put',
            url: `http://localhost:3003/globalhitss/editarResposta/${id}`,
            data: req,
            headers: { "Content-Type": "application/json" }
        }).then(
            data => {
                if (data) {
                    alert("Dados Editados com sucesso");
                    setRedirect(true);
                }
            }
        ).catch(
            () => { console.log("Não foi possivel editar") }
        );
        e.preventDefault();
    }
    const { resposta } = state;
    console.log(state);

    if (redirect) {
        return <Redirect to='/respostas' />
    } else {
        return (
            <div className="form">
                <h3>Editar Formulário</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>idFormulario</label>
                        <input
                            type='text'
                            name='idFormulario'
                            className='form-control'
                            placeholder="idFormulario"
                            required
                            value={resposta.idFormulario}
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
                            value={resposta.idAvaliador}
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
                            value={resposta.idAvaliado}
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
                            value={resposta.idPergunta}
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
                            value={resposta.respostaEnviada}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type='submit' className="w-100 btn btn-lg btn-primary">
                        Editar
                    </button>
                </form>
                <p><Link to='/respostas'>Voltar</Link> </p>
            </div>
        )
    }
}
