import axios from 'axios';
import { useState, useEffect} from 'react';
import {Redirect, Link} from 'react-router-dom';
 
export default function EditarFormulario(props){
    const[state, setState] = useState({
        formulario: {
            idTime: '',
            tipo: ''
        }
    });
 
    //tras os dados através do id
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
 
    const[redirect, setRedirect] = useState(false);
 
    const handleInputChange = (e) => {
        const name = e.target.name;
        const value  = e.target.value;
        setState({
            formulario:{
                ...state.formulario, [name]: value
            }
        })
    }
 
    const handleSubmit = (e) => {
        const req = state.formulario;
        const {id} = state.formulario;
        axios({
            method: 'put',
            url:`http://localhost:3003/globalhitss/editarFormulario/${id}`,
            data: req,
            headers:{"Content-Type": "application/json"}
        }).then(
            data => {
                if(data){
                    alert("Dados Editados com sucesso");
                    setRedirect(true);
                }
            }
        ).catch(
            () => {console.log("Não foi possivel editar")}
        );
        e.preventDefault();
    }
    const {formulario} = state;
    console.log(state);
    
    if(redirect){
        return <Redirect to={`/formulariosTime/${formulario.idTime}`} />
    }else{
        return(
            <div className="form">
                <h3>Editar Formulário</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>idTime</label>
                        <input
                            type='text'
                            name='idTime'
                            className='form-control'
                            placeholder="idTime"
                            required
                            value={formulario.idTime}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Tipo</label>
                        <input
                            type='text'
                            name='tipo'
                            className='form-control'
                            placeholder="tipo"
                            required
                            value={formulario.tipo}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type='submit' className="btn btn-success mt-3">
                        Editar
                    </button>
                </form>
                <p><Link to={`/formulariosTime/${formulario.idTime}`}>Voltar</Link> </p>
            </div>
        )
    }  
}
