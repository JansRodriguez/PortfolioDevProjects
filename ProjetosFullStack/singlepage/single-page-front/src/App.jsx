import { useState } from 'react';
import Formulario from './Components/Form';
import Tabela from './Components/Table';

export default()=>{

    //Uso dos Hooks, useState && useEffect
    //O state ira alterar o valor booleano ao selecionar um item para ter valor diferente de cadastro de item novo.
    const [btncadastrar, setBtnCadastrar] = useState(true);

    return(
        <section className="elementos">
            <Formulario botao={btncadastrar}/> {/* O Hook useState vai ser passado para o formulario como uma propriedade, assim o componente Form.jsx recebera o useState*/}
            <Tabela/>
        </section>
    )
};