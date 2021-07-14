import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
 
export default function DetalhesFormulario(props){
    const[state, setState] = useState({
        formulario: []
    });
 
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
    
    const {formulario} = state;
    return(
        <>
            <h3>Detalhes do Formulário</h3>
 
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Informações</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                       <td>
                       <p>Time: <Link to={`/detalhesTime/${formulario.idTime}`}>Ver</Link></p>
                           <p>tipo: {formulario.tipo}</p>
                           
                           <p>Criado em: {moment(formulario.createdAt).format('DD/MM/YYYY')}</p>
                           <p>Editado em: {moment(formulario.updatedAt).format('DD/MM/YYYY')}</p>
                        </td>
                       <td>
                           <p><Link to={`/perguntasFormulario/${formulario.id}`}>Ver Perguntas</Link></p>
                           <p> - </p>
                           <p><Link to={`/editarFormulario/${formulario.id}`}>Editar</Link></p>
                           <p><Link to={`/excluirFormulario/${formulario.id}`}>Excluir</Link></p>
                       </td>
                    </tr>
                    
            
                    
                </tbody>
            </table>
            <p><Link to='/formularios'>Voltar</Link></p>
            </>
    )
}
