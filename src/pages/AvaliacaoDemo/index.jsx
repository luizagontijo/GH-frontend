import { Link } from 'react-router-dom';

export default function AvaliacaoDemo() {

    return (
        <>
            <h3 className="mb-4">Formulário de Autoavaliação</h3>
            <h5>AVALIE OS FATORES DE DESEMPENHO ABAIXO DESCRITOS, CONFORME A SEGUINTE LEGENDA: <br />
            1. Nunca  &nbsp;  2. Quase Nunca &nbsp;   3. Às Vezes  &nbsp;   4. Quase sempre  &nbsp;   5. Sempre</h5>
            <table class="table table-sm mt-5  table-hover float-top">
                <thead class="sr-only">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Quesito</th>
                        <th scope="col">Avaliação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Sou flexível às mudanças de trabalho, consigo me adaptar às novas demandas.</td>
                        <td>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadio" id="inlineRadio1" value="1" />
                                <label class="form-check-label" for="inlineRadio1">1</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadio" id="inlineRadio2" value="2" />
                                <label class="form-check-label" for="inlineRadio2">2</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadio" id="inlineRadio3" value="3" />
                                <label class="form-check-label" for="inlineRadio3">3</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadio" id="inlineRadio3" value="4" />
                                <label class="form-check-label" for="inlineRadio3">4</label>

                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadio" id="inlineRadio3" value="5" />
                                <label class="form-check-label" for="inlineRadio3">5</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Antecipo-me às demandas e necessidades dos usuários e da equipe.</td>
                        <td>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadio2" id="inlineRadio1" value="1" />
                                <label class="form-check-label" for="inlineRadio1">1</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadio2" id="inlineRadio2" value="2" />
                                <label class="form-check-label" for="inlineRadio2">2</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadio2" id="inlineRadio3" value="3" />
                                <label class="form-check-label" for="inlineRadio3">3</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadio2" id="inlineRadio3" value="4" />
                                <label class="form-check-label" for="inlineRadio3">4</label>

                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadio2" id="inlineRadio3" value="5" />
                                <label class="form-check-label" for="inlineRadio3">5</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Atuo de forma planejada e organizada, otimizando tempo e recursos materiais.</td>
                        <td>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadio3" id="inlineRadio1" value="1" />
                                <label class="form-check-label" for="inlineRadio1">1</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadio3" id="inlineRadio2" value="2"/>
                                <label class="form-check-label" for="inlineRadio2">2</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadio3" id="inlineRadio3" value="3"/>
                                <label class="form-check-label" for="inlineRadio3">3</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadio3" id="inlineRadio3" value="4"/>
                                <label class="form-check-label" for="inlineRadio3">4</label>

                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadio3" id="inlineRadio3" value="5"/>
                                <label class="form-check-label" for="inlineRadio3">5</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Executo o trabalho dentro do prazo estabelecido.</td>
                        <td>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadio4" id="inlineRadio1" value="1"/>
                                <label class="form-check-label" for="inlineRadio1">1</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadio4" id="inlineRadio2" value="2"/>
                                <label class="form-check-label" for="inlineRadio2">2</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadio4" id="inlineRadio3" value="3"/>
                                <label class="form-check-label" for="inlineRadio3">3</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadio4" id="inlineRadio3" value="4"/>
                                <label class="form-check-label" for="inlineRadio3">4</label>

                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadio4" id="inlineRadio3" value="5"/>
                                <label class="form-check-label" for="inlineRadio3">5</label>
                            </div>
                        </td>
                    </tr>
                    
                    <tr>
                        <th scope="row">5</th>
                        <td>O quanto você contribui positivamente nas interações de equipe?</td>
                        <td>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadio4" id="inlineRadio1" value="1"/>
                                <label class="form-check-label" for="inlineRadio1">1</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadio4" id="inlineRadio2" value="2"/>
                                <label class="form-check-label" for="inlineRadio2">2</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadio4" id="inlineRadio3" value="3"/>
                                <label class="form-check-label" for="inlineRadio3">3</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadio4" id="inlineRadio3" value="4"/>
                                <label class="form-check-label" for="inlineRadio3">4</label>

                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadio4" id="inlineRadio3" value="5"/>
                                <label class="form-check-label" for="inlineRadio3">5</label>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">6</th>
                        <td>Você mostra maturidade apara lidar com questões estratégicas e de alta responsabilidade?</td>
                        <td>
                        <select className="form-control"
                           name='tipo'
                        >
                            <option value="" selected disabled>Selecionar</option>
                            <option value="sim">Sim</option>
                            <option value="nao">Não</option>
                            
                        </select>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">7</th>
                        <td>Você procura se envolver em projetos relevantes para a empresa?</td>
                        <td>
                        <select className="form-control"
                           name='tipo'
                        >
                            <option value="" selected disabled>Selecionar</option>
                            <option value="sim">Sim</option>
                            <option value="nao">Não</option>
                            
                        </select>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">8</th>
                        <td>Você apresenta características de liderança, como planejamento, organização e agilidade na tomada de decisão?</td>
                        <td>
                        <select className="form-control"
                           name='tipo'
                        >
                            <option value="" selected disabled>Selecionar</option>
                            <option value="sim">Sim</option>
                            <option value="nao">Não</option>
                            
                        </select>
                        </td>
                    </tr>
                   

                   
                   
                </tbody>
            </table>
            <button type='submit' className="btn btn-success mt-3">
                       Enviar
                    </button>
            <p className="mt-3"><Link to={`/detalhesFormulario/`}>Voltar</Link></p>
        </>
    )
};
