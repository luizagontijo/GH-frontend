import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';

export default function InserirUsuario(props) {
    const [state, setState] = useState({
        usuario: {
            nome: '',
            login: '',
            senha: '',
            tipo: '',
            idTime: ''
        }
    });
    const [redirect, setRedirect] = useState(false);

    useEffect(
        () => {
            const { id } = props.match.params;
            setState({
                usuario: {
                    nome: '',
                    login: '',
                    senha: '',
                    tipo: '',
                    idTime: id
                }
            });
        }, [props.match.params]
    )

    const handleInputChange = (e) => {
        const target = e.target
        const name = target.name;
        const value = target.value;

        setState({
            usuario: {
                ...state.usuario, [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        const req = state.usuario;
        axios({
            method: 'post',
            url: 'http://localhost:3003/globalhitss/inserirUsuario/:id',
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
        return <Redirect to={`/detalhesTime/${state.usuario.idTime}`} />
    } else {
        return (
            <div className="form-group">
                <h3>Adicionar Usuário</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nome:</label>
                        <input
                            type='text'
                            name='nome'
                            className='form-control'
                            placeholder="nome"
                            required
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Login:</label>
                        <input
                            type='text'
                            name='login'
                            className='form-control'
                            placeholder="login"
                            required
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Senha:</label>
                        <input
                            type='password'
                            name='senha'
                            className='form-control'
                            placeholder="senha"
                            required
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Tipo:</label>
                        <select className="form-check-input"
                            type='text'
                            name='tipo'
                            className='form-control'
                            placeholder="tipo"
                            required
                            onChange={handleInputChange}>

                            <option value="" selected disabled>Selecionar</option>
                            <option value="Administrador">Administrador</option>
                            <option value="Gestor">Gestor</option>
                            <option value="Colaborador">Colaborador</option>
                        </select>
                    </div>

                    <div className="form-group form-hidden">
                        <label >idtime</label>
                        <input
                            type='text'
                            name='idTime'
                            className='form-control'
                            placeholder="idTime"
                            required
                            onChange={handleInputChange}
                            value={state.usuario.idTime}
                        />
                    </div>
                    <button type='submit' className="btn btn-success mt-3 mb-3">
                        Adicionar
                    </button>
                    <p><Link to='/usuarios'>Voltar</Link> </p>
                    



                </form>

            </div >
        )

    }

}
