import { useEffect, useState } from 'react';
import Formulario from './Components/Form';
import Tabela from './Components/Table';

export default()=>{

    //Criar um objeto para representar as entradas do formulario
    //Com esse objeto, iremos manipular os dados do formulario, lancando no BD.
    const form = {
        codigo: 0,
        nome: '',
        marca: '',
        preco: '',
        dataCadastro: ''
    }

    //Uso dos Hooks, useState && useEffect
    //O state ira alterar o valor booleano ao selecionar um item para ter valor diferente de cadastro de item novo.
    //O useEffect irá gerar uma requisição no backend, pegar os dados e trazer para o front-end

    //useState - para selecionar os botoes de cadastro ou os outros.
    const [btncadastrar, setBtnCadastrar] = useState(true);

    //useState - para criar o componente de armazenamento do retorno do back-end trazido pelo useEffect.
    const [produtos, setProdutos] = useState([]);

    //useState - para manipular os campos dos formularios.
    const [objetosFormulario, setObjetosFormulario] = useState(form);


    //useEffect - para gerir a conexão do back-end com a devolutiva ao front-end.
    useEffect(()=>{
        fetch("http://localhost:8080/listar")
        .then(retorno => retorno.json())//Retorno precisa ser garimpado
        .then(retorno_convertido => setProdutos(retorno_convertido));
    }, []);

    //Função para obter dados do formulário
    const dadosDigitados = (event)=>{
        setObjetosFormulario({...objetosFormulario, [event.target.name]:event.target.value});
    //Colocar essa função como props no formulario
    }


    //Retorno
    return(
        <section className="elementos">
            <p>{JSON.stringify(objetosFormulario)}</p>
            <Formulario botao={btncadastrar} eventoTeclado ={dadosDigitados}/> {/* O Hook useState vai ser passado para o formulario como uma propriedade, assim o componente Form.jsx recebera o useState*/}
            <Tabela vetor={produtos}/>
        </section>
    )
};