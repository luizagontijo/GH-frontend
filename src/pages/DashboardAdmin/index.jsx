import { Link } from 'react-router-dom';
import { FaUserTie } from 'react-icons/fa';
import { AiOutlineForm } from 'react-icons/ai';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { GoGraph } from 'react-icons/go';
import { BsPeopleCircle } from 'react-icons/bs';
import './index.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';


export default function DashboardGestor() {

    const [countUsers, setCountUsers] = useState(0)
    // const [loading, setLoading] = useState(true)

    const [countTimes, setCountTimes] = useState(0)

    useEffect( () => {
        async function getCountUsers() {
            const {data} = await axios.get('http://localhost:3003/globalhitss/contagemUsuarios')
            setCountUsers(data.count)
        }     
        // setLoading(true)       
        getCountUsers();
        // setLoading(false)


        async function getCountTimes() {
            const {data} = await axios.get('http://localhost:3003/globalhitss/contagemTimes')
            setCountTimes(data.count)
        }
        getCountTimes();

    },[]) 

    

    const [state, setState] = useState({
        usuarios: []
    });

    useEffect(
        () => {
            axios.get(`http://localhost:3003/globalhitss/usuariosRecentes`)
                .then(
                    res => {
                        const usuarios = res.data;
                        console.log(typeof(usuarios))
                        setState({ usuarios })
                        
                    }
                )
        }, []
    )

    const { usuarios } = state;

    return (
        <>
            <div className="container-fluid">

                <div className="dashTresLinha row justify-content-between">

                    <div className="dashTres col-md-4 pt-4 text-center rounded shadow">
                        <FaUserTie size={70} />
                        <p className="pt-3 small mb-0">Bem vindo</p>
                        <p className=" ">Kaique Ryan</p>
                    </div>

                    <Link to='/times' className="dashTres col-md-4 py-4 rounded shadow">
                        <div className="d-flex align-items-center justify-content-around">
                            <HiOutlineUserGroup size={80}  />
                            <div>
                                <h1 className=" text-center">{countTimes}</h1>
                                <p className="text-center">Times <br /> Cadastrados</p>
                            </div>
                        </div>
                    </Link>

                    <Link to='/times' className="dashTres col-md-4 py-4 rounded shadow">
                        <div className="d-flex align-items-center justify-content-around">
                            <BsPeopleCircle size={70}/>
                            <div>
                                <h1 className=" text-center">{countUsers}</h1>
                                <p className="text-center">Usuários <br /> Cadastrados</p>
                            </div>
                        </div>
                        </Link>
                </div>

                <div className="dashLinha row mt-3 p-3 justify-content-between rounded shadow-lg">
                    <div className="">
                        <h5 className="mt-4 mb-0"><AiOutlineForm /> Cadastro de Usuários Recentes</h5> 
                        <br />
                        <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        {/* <th>Login</th> */}
                        <th>Tipo</th>
                        {/* <th>Time</th> */}
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
                                    {/* <td>{usuario.login}</td> */}
                                    <td>{usuario.tipo}</td>
                                    {/* <td><Link to={`/detalhesTime/${usuario.idTime}`}>Ver</Link></td> */}
                                    <td>{moment(usuario.createdAt).format('DD/MM/YYYY')}</td>
                                    <td><Link to={`/detalhesUsuario/${usuario.id}`}>Ver</Link></td>
                                    
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
                    </div>

                    {/*  Colocar grafico pro gestor
                    <div className="dashDois col-md-6 rounded shadow" >
                        <GoGraph /> Graficos
                    </div> */}
                </div>
            </div>
        </>
    )
};