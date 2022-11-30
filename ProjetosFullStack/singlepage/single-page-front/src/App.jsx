import { useEffect, useState } from 'react';
import Formulario from './Components/Form';
import Tabela from './Components/Table';

export default()=>{

    //Uso dos Hooks, useState && useEffect
    //O state ira alterar o valor booleano ao selecionar um item para ter valor diferente de cadastro de item novo.
    //O useEffect irá gerar uma requisição no backend, pegar os dados e trazer para o front-end

    //useState - para selecionar os botoes de cadastro ou os outros.
    const [btncadastrar, setBtnCadastrar] = useState(true);

    //useState - para criar o componente de armazenamento do retorno do back-end trazido pelo useEffect.
    const [produtos, setProdutos] = useState([]);

    //useEffect - para gerir a conexão do back-end com a devolutiva ao front-end.
    useEffect(()=>{
        fetch("http://localhost:8080/listar")
        .then(retorno => retorno.json())//Retorno precisa ser garimpado
        .then(retorno_convertido => setProdutos(retorno_convertido));
    }, []);



    //Retorno
    return(
        <section className="elementos">
            <Formulario botao={btncadastrar}/> {/* O Hook useState vai ser passado para o formulario como uma propriedade, assim o componente Form.jsx recebera o useState*/}
            <Tabela vetor={produtos}/>
        </section>
    )
};