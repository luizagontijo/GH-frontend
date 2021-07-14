import axios from 'axios';
import { useState, useEffect } from 'react';
import {Redirect, Link} from 'react-router-dom';
 
export default function ExcluirFormulario(props){
    const[state, setState] = useState({
        formulario: []
    });
 
    const[redirect, setRedirect] = useState(false);
 
    useEffect(
        ()=>{
            const {id} = props.match.params;
            axios.get(`http://localhost:3003/globalhitss/formularios/${id}`)
           .then(
               res => {
                   const formulario = res.data;
                   setState({formulario})
               }
           )
        },[props.match.params]
    )
 
    const handleConfirm = () =>{
        const {id} = props.match.params; 
        axios.put(`http://localhost:3003/globalhitss/deletarFormulario/${id}`)
        .then(
            data => {
                if(data){
                    alert("Dados Excluidos com sucesso");
                    setRedirect(true);
                }
            }
        )
    }
    
    const {formulario} = state;
 
    if(redirect){
        return <Redirect to='/formularios' />
    }else{
        return(
            <>
                <h3>Deseja excluir o formulário {formulario.tipo} ?</h3> 
                <button className="w-30 btn btn-lg btn-primary" onClick={handleConfirm}>Sim</button>
                <br></br>
                <br></br>
                <p><Link to={`/detalhesFormulario/${formulario.id}`}>Voltar</Link></p>
            </>
        )
    }
}
