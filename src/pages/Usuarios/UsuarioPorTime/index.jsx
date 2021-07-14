import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function UsuariosPorTime(props) {
    const [usuarios, setUsuarios] = useState([]);
    const [time, setTime] = useState([]);

    
    useEffect(
        () => {
            
            const {id} = props.match.params;
            console.log(id)
            axios.get(`http://localhost:3003/globalhitss/usersTime/${id}`)
                .then(
                    (res) => {
                        const get = res.data;
                        const usuarios = Object.assign(get);
                        setTime(usuarios)
                        setUsuarios(usuarios.users)
                    }
                )
        }, [props.match.params]
    );
    
    
    return (
        <>
            <h3>Usuarios de {time.nome}</h3>
            <Link to={`/inserirUsuario/${time.id}`}>Adicionar</Link>
           
            <div className="row mt-5 p-3 justify-content-between rounded shadow">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Login</th>
                        {/* <th>Senha</th> */}
                        <th>Tipo</th>
                        <th>nome do time</th>
                        <th>Mais Informações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.length > 0 ? (
                            usuarios.map(
                                (usuario, index) =>(
                                    <tr key={index}>
                                        <td>{usuario.nome}</td>
                                        <td>{usuario.login}</td>
                                        {/* <td>{usuario.senha}</td> */}
                                        <td>{usuario.tipo}</td>
                                        <td>{time.nome}</td>
                                        <td><Link to={`/detalhesUsuario/${usuario.id}`}>Detalhes</Link></td>
                                    </tr>
                                )
                            )
                        ):(
                            <tr>
                                <td colSpan='3'>Nenhum usuário registrado</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
            <p className="mt-3"><Link to={`/detalhesTime/${usuarios.id}`}>Voltar</Link></p>
          
        </>
    )
};