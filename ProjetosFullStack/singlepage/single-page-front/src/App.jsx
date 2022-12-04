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

    //Criar uma Função para enviar os dados do formulário extraido da Funçao 'dadosDigitados' para o backend e listado pelo useEffect acima
    const dadosCadastrados = ()=>{
        fetch('http://localhost:8080/cadastrar', {//converter fetch que é um GET em post.
            method:'post',
            body:JSON.stringify(objetosFormulario),
            headers:{
                'Content-type':'application/json',
                'Accept':'application/json'
            }
        })
        .then(retorno => retorno.json())//O then é uma 'promisse' que o que virá será convertido em JSON
        .then(retorno_convertido => /* {console.log(retorno_convertido) - Usar o console.log para testar as validações dos campos implementadas no backEnd, obrigando o envio de todos os dados;
        }*/
            {
                if (retorno_convertido.devolucao !== undefined) {
                    alert(retorno_convertido.devolucao);
                }
                else{   
                    setProdutos([...produtos, retorno_convertido]);
                    alert('Produto cadastrado com sucesso!!');
                }
            }
        )
    }


    //Retorno
    return(
        <section className="elementos">
            {/* //Teste: <p>{JSON.stringify(objetosFormulario)}</p> */}
            <Formulario botao={btncadastrar} eventoTeclado ={dadosDigitados} eventoCadastrar={dadosCadastrados}/> {/* O Hook useState vai ser passado para o formulario como uma propriedade, assim o componente Form.jsx recebera o useState*/}
            <Tabela vetor={produtos}/>
        </section>
    )
};