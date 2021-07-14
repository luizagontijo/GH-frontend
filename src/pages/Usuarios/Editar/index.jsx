import axios from 'axios';
import { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';

export default function EditarUsuario(props) {
    const [state, setState] = useState({
        usuario: {
            nome: '',
            login: '',
            senha: '',
            tipo: '',
            idTime: ''
        }
    });

    //tras os dados através do id
    useEffect(
        () => {
            const { id } = props.match.params;

            axios.get(`http://localhost:3003/globalhitss/usuarios/${id}`)
                .then(
                    res => {
                        const usuario = res.data;
                        setState({ usuario })
                    }
                )
        }, [props.match.params]
    )

    const [redirect, setRedirect] = useState(false);

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setState({
            usuario: {
                ...state.usuario, [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        const req = state.usuario;
        const { id } = state.usuario;
        axios({
            method: 'put',
            url: `http://localhost:3003/globalhitss/editarUsuario/${id}`,
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
    const { usuario } = state;
    console.log(state);

    if (redirect) {
        return <Redirect to='/usuarios' />
    } else {
        return (
            <div className="form">
                <h3>Editar Usuário</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nome:</label>
                        <input
                            type='text'
                            name='nome'
                            className='form-control'
                            placeholder="nome"
                            required
                            value={usuario.nome}
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
                            value={usuario.login}
                            onChange={handleInputChange}
                        />
                    </div>
                    {/* <div className="form-group">
                        <label>Senha</label>
                        <input 
                            type='password'
                            name='senha'
                            className='form-control'
                            placeholder="senha"
                            required
                            onChange={handleInputChange}
                        />
                    </div> */}

                    <div className="form-group">
                        <label>Tipo:</label>
                        <select
                            type='text'
                            name='tipo'
                            className='form-control'
                            placeholder="tipo"
                            required
                            value={usuario.tipo}
                            onChange={handleInputChange}>

                            <option value={usuario.tipo} disabled>{usuario.tipo} </option>
                            <option value="Administrador">Administrador</option>
                            <option value="Gestor">Gestor</option>
                            <option value="Colaborador">Colaborador</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <label>id do Time:</label>
                        <input
                            type='text'
                            name='idTime'
                            className='form-control'
                            placeholder="idTime"
                            required
                            value={usuario.idTime}
                            onChange={handleInputChange}
                        />


                        <button type='submit' className="btn btn-success mt-3 mb-3">
                            Editar
                        </button>
                        <p><Link to='/usuarios'>Voltar</Link> </p>
                    </div>

                </form>

            </div>
        )
    }
}
