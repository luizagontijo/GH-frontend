import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import debounce from 'lodash.debounce'

export default function Bucar(props) {
    const [state, setState] = useState({
        usuarios: []
    });

    const [input, setInput] = useState('');

    useEffect(
        () => {
            axios.get(`http://localhost:3003/globalhitss/usuarios`)
                .then(
                    res => {
                        const usuarios = res.data;
                        setState({ usuarios })
                    }
                )
        }, []
    )

    const onChangeInput = useCallback(() => {
        axios.post(`http://localhost:3003/globalhitss/usuarios/search?q=${input}`)
                .then(
                    res => {
                        const usuarios = res.data;
                        setState({ usuarios })
                    }
                )
    }, [input])

    const onChangeInputDebounce = debounce(onChangeInput,1500)

    const { usuarios } = state;
    return (
        <>
        <div className="input-area mb-4 w-100 justify-content-end d-flex">

                <input 
                type="text" 
                className="" 
                placeholder="Buscar usuário..." 
                value={input} 
                onChange={(event) => setInput(event.target.value)}
                onKeyUp={onChangeInputDebounce}/>
        </div>

            <h3>Usuários</h3>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Login</th>
                        <th>Tipo</th>
                        <th>Time</th>
                        <th>Criado</th>
                        <th>Detalhes</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(

                            (usuario, key) =>
                            (
                                <tr key={key}>
                                    <td>{usuario.nome}</td>
                                    <td>{usuario.login}</td>
                                    <td>{usuario.tipo}</td>
                                    <td><Link to={`/detalhesTime/${usuario.idTime}`}>Ver</Link></td>
                                    <td>{moment(usuario.createdAt).format('DD/MM/YYYY')}</td>
                                    <td><Link to={`/detalhesUsuario/${usuario.id}`}>Detalhes</Link></td>

                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
            <p><Link to='/usuarios'>Voltar</Link></p>
        </>
    )
};