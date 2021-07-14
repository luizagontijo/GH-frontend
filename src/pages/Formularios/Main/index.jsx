import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function MainFormularios (props) {
    const [state, setState] = useState({
        times: []
    });

    useEffect(
        () => {
            axios.get(`http://localhost:3003/globalhitss/times`)
                .then(
                    res => {
                        const times = res.data;
                        setState({ times })
                    }
                )
        }, []
    )

    const { times } = state;
    return (
        <>
            <h3>Formulários por Time</h3>
            
            <div className="row mt-3 p-3 justify-content-between rounded shadow">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Mais Informações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        times.map(

                            (time, key) =>
                            (
                                <tr key={key}>
                                    <td>{time.nome}</td>
                                    <td><Link to={`/formulariosTime/${time.id}`}>ver formulários</Link></td>
                                </tr>
                            )
                        )
                    }


                </tbody>
            </table>
            </div>
            <p className="mt-3"><Link>Voltar</Link></p>
        </>
    )
};