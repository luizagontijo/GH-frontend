import axios from 'axios';
import { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';

export default function EditarPergunta(props) {
    const [state, setState] = useState({
        pergunta: {
            idFormulario: '',
            textoPergunta: '',
            tipo: ''
        }
    });

    //tras os dados através do id
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

    const [redirect, setRedirect] = useState(false);

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setState({
            pergunta: {
                ...state.pergunta, [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        const req = state.pergunta;
        const { id } = state.pergunta;
        axios({
            method: 'put',
            url: `http://localhost:3003/globalhitss/editarPergunta/${id}`,
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
    const { pergunta } = state;
    console.log(state);

    if (redirect) {
        return <Redirect to='/perguntas' />
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
                            value={pergunta.idFormulario}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Pergunta</label>
                        <input
                            type='text'
                            name='textoPergunta'
                            className='form-control'
                            placeholder="textoPergunta"
                            required
                            value={pergunta.textoPergunta}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Tipo de Resposta</label>
                        <select className="form-check-input"
                            type='text'
                            name='tipo'
                            className='form-control'
                            placeholder="tipo"
                            required
                            onChange={handleInputChange}>
                                
                            <option value={pergunta.tipo} selected disabled>{pergunta.tipo}</option>
                            <option value="texto">Texto</option>
                            <option value="radio">Alternativas</option>
                            <option value="boolean">Sim ou Não</option>
                        </select>
                    </div>
                    <button type='submit' className="btn btn-success mt-3">
                        Editar
                    </button>
                </form>
                <p><Link to='/perguntas'>Voltar</Link> </p>
            </div>
        )
    }
}
