import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

export default function TodosPorTime() {
    const [state, setState] = useState({
        times: []
    });

    
    useEffect(
        () => {
            
            axios.get(`http://localhost:3003/globalhitss/usersTime/`)
                .then(
                    res => {
                        const times = res.data;
                        setState({ times });

                    }
                )
        }, []
    );
    
    const { times } = state;
    return (
        <>
            <h3>times </h3>
            

            <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Nome</th>
                        <th>Login</th>
                        <th>Senha</th>
                        <th>Tipo</th>
                        <th>Time</th>
                        <th>Criado</th>
                        <th>Editado</th>
                        <th>Detalhes</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        times.length > 0 ? (
                            times.map(
                                (time, index) =>(
                                    <tr key={index}>
                                        <td>{time.nome}</td>
                                    <td>{time.id}</td>
                                    <td>{times.senha}</td>
                                    <td>{time.tipo}</td>
                                    <td>{moment(time.createdAt).format('DD/MM/YYYY')}</td>
                                    <td>{moment(time.updatedAt).format('DD/MM/YYYY')}</td>
                                    <td><Link to={`/detalhestime/${time.id}`}>Detalhes</Link></td>
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

            <p><Link to={`/detalhesTime/${times.id}`}>Voltar</Link></p>
          
        </>
    )
};