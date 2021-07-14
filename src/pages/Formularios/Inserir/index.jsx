import axios from 'axios';
import { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';

export default function InserirFormulario(props) {
    const [state, setState] = useState({
        formulario: {
            idTime: '',
            tipo: ''
        }
    });
    const [redirect, setRedirect] = useState(false);

    useEffect(
        () => {
            const{id} = props.match.params;
            setState({
                formulario: {
                    idTime: id,
                    tipo: ''
                }
            });
        },[props.match.params]
    )

    const handleInputChange = (e) => {
        const target = e.target
        const name = target.name;
        const value = target.value;

        setState({
            formulario: {
                ...state.formulario, [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        const req = state.formulario;
        axios({
            method: 'post',
            url: 'http://localhost:3003/globalhitss/inserirFormulario',
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
        return <Redirect to={`/formulariosTime/${state.formulario.idTime}`} />
    } else {
        return (
            <div className="form-group">
                <h3>Adicionar Formulário</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group form-hidden">
                        <label>idTime</label>
                        <input
                            type='text'
                            name='idTime'
                            className='form-control'
                            placeholder="idTime"
                            required
                            value={state.formulario.idTime}
                            onChange={handleInputChange}
                        />
                    </div>
                    
                        <label>Tipo</label>
                        <select className="form-check-input"
                            type='text'
                            name='tipo'
                            className='form-control'
                            placeholder="tipo"
                            required
                            onChange={handleInputChange}>
                            <option value="" selected disabled>Selecionar</option>
                            <option value="Gestor-Colaborador">Gestor-Colaborador</option>
                            <option value="Pares">Pares</option>
                            <option value="Autoavaliação">Autoavaliação</option>
                        </select>
                   
                    <button type='submit' className="btn mt-3 mb-3">
                        Adicionar
                    </button>
                </form>
                <p><Link to={`/formulariosTime/${state.formulario.idTime}`}>Voltar</Link> </p>
            </div>
        )

    }

}