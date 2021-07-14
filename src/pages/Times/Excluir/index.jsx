import axios from 'axios';
import { useState, useEffect } from 'react';
import {Redirect, Link} from 'react-router-dom';
 
export default function ExcluirTime(props){
    const[state, setState] = useState({
        time: []
    });
 
    const[redirect, setRedirect] = useState(false);
 
    useEffect(
        ()=>{
            const {id} = props.match.params;
            axios.get(`http://localhost:3003/globalhitss/times/${id}`)
           .then(
               res => {
                   const time = res.data;
                   setState({time})
               }
           )
        },[props.match.params]
    )
 
    const handleConfirm = () =>{
        const {id} = props.match.params; 
        axios.put(`http://localhost:3003/globalhitss/deletarTime/${id}`)
        .then(
            data => {
                if(data){
                    alert("Dados Excluidos com sucesso");
                    setRedirect(true);
                }
            }
        )
    }
    
    const {time} = state;
 
    if(redirect){
        return <Redirect to='/times' />
    }else{
        return(
            <>
                <h3>Deseja excluir o time {time.nome} ?</h3> 
                <button className="btn btn-success mt-3" onClick={handleConfirm}>Sim</button>
                <br></br>
                <br></br>
                <p><Link to={`/detalhesTime/${time.id}`}>Voltar</Link></p>
            </>
        )
    }
}
