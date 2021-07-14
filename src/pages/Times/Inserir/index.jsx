import axios from 'axios';
import { useState } from 'react';
import {Redirect, Link} from 'react-router-dom';
 
export default function InserirTime(){
    const[state, setState] = useState({
        time: {
            nome:''
        }
    });
    const[redirect, setRedirect] = useState(false);

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setState({
            time:{
                ...state.time, [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        const req = state.time;
        axios({
            method: 'post',
            url:'http://localhost:3003/globalhitss/inserirTime',
            data: req,
            headers:{"Content-Type": "application/json"}
        }).then(
            data => {
                if(data){
                    alert("Dados inseridos com sucesso")
                    setRedirect(true);
                }
            }
        ).catch(
            () => {console.log("Não foi posspível adicionar os dados")}
        );
        e.preventDefault();
    }
     
    console.log(state)
    
    if(redirect){
        return<Redirect to='/times' />
    }else{
        return(

            <div className="form-group">
                <h3>Adicionar Time</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nome:</label>
                        <input 
                            type='text'
                            name='nome'
                            className='form-control'
                            placeholder="nome"
                            required
                            onChange={handleInputChange}
                            
                        />
                    
                    
                        <button type='submit' className="btn btn-success mt-3 mb-3">
                            Adicionar
                        </button>
                        <p><Link to='/times'>Voltar</Link> </p>
                    </div>
                  
                </form>
                
                
            </div>
        )

    }
    
}
