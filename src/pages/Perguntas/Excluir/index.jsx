import axios from 'axios';
import { useState, useEffect } from 'react';
import {Redirect, Link} from 'react-router-dom';
 
export default function ExcluirPergunta(props){
    const[state, setState] = useState({
        pergunta: []
    });
 
    const[redirect, setRedirect] = useState(false);
 
    useEffect(
        ()=>{
            const {id} = props.match.params;
            axios.get(`http://localhost:3003/globalhitss/perguntas/${id}`)
           .then(
               res => {
                   const pergunta = res.data;
                   setState({pergunta})
               }
           )
        },[props.match.params]
    )
 
    const handleConfirm = () =>{
        const {id} = props.match.params; 
        axios.put(`http://localhost:3003/globalhitss/deletarPergunta/${id}`)
        .then(
            data => {
                if(data){
                    alert("Dados Excluidos com sucesso");
                    setRedirect(true);
                }
            }
        )
    }
    
    const {pergunta} = state;
 
    if(redirect){
        return <Redirect to='/perguntas' />
    }else{
        return(
            <>
                <h3>Deseja excluir a pergunta "{pergunta.textoPergunta}" ?</h3> 
                <button className="btn  btn-primary" onClick={handleConfirm}>Sim</button>
                <br></br>
                <br></br>
                <p><Link to={`/detalhesPergunta/${pergunta.id}`}>Voltar</Link></p>
            </>
        )
    }
}
