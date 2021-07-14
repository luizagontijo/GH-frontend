import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
 
export default function DetalhesResposta(props){
    const[state, setState] = useState({
        resposta: []
    });
 
    useEffect(
        ()=>{
            const {id} = props.match.params;
            axios.get(`http://localhost:3003/globalhitss/respostas/${id}`)
           .then(
               res => {
                   const resposta = res.data;
                   setState({resposta})
               }
           )
        },[props.match.params]
    )
    
    const {resposta} = state;
    return(
        <>
            <h3>Detalhes da Resposta</h3>
 
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
                           <p>idFormulario: {resposta.idFormulario}</p>
                           <p>idAvaliador: {resposta.idAvaliador}</p>
                           <p>idAvaliado: {resposta.idAvaliado}</p>
                           <p>idPergunta: {resposta.idPergunta}</p>
                           <p>Resposta: {resposta.respostaEnviada}</p>
                           
                           <p>Criada em: {moment(resposta.createdAt).format('DD/MM/YYYY')}</p>
                           <p>Editada em: {moment(resposta.updatedAt).format('DD/MM/YYYY')}</p>
                        </td>
                       <td>
                           <p> - </p>
                           <p> - </p>
                           <p><Link to={`/editarResposta/${resposta.id}`}>Editar</Link></p>
                           <p><Link to={`/excluirResposta/${resposta.id}`}>Excluir</Link></p>
                       </td>
                    </tr>
                    
            
                    
                </tbody>
            </table>
            <p><Link to='/respostas'>Voltar</Link></p>
            </>
    )
}
