import Cabecalho from "./layout/Cabecalho";
import Rodape from "./layout/Rodape";

import './App.css';
import Formulario from "./component/Formulario";
import Tabela from "./component/Tabela";
import { useEffect, useState } from "react";

export default()=>{

    //Hook para exibicao de Botoes alternados.
    //UseState para mudar a visibilidade dos botões
    const [botaoCadastro, setBotaoCadasrtro] = useState(true);
    //Função para mudar o estado do botãoCadastrar
    const selecionarCursos =(i)=>{
        setBotaoCadasrtro(false);
        setObjetoForm(cursos[i]);
    }

    //Criando um objeto para receber as dados do formulário e usá-los futuramente para inserir na tabela.
    const formulario = {
        codigo: 0, 
        nomeCurso: '',
        nomeProfessor: '',
        descricao: '',
        valor: '',
        segmento: ''
    }
    //useState para obter cada valor do objeto FORM
    const[objetoForm, setObjetoForm] = useState(formulario);
    //Função para pegar os dados inseridos nos campos
    const aoDigitar =(e)=>{
        setObjetoForm({...objetoForm, [e.target.name]: e.target.value});
    }
    //Função para Cadastrar cursos - essa requisição envia para o back-end (e o useEffect traz do backend na tabela)
    const aoCadastrar =()=>{
        fetch("http://localhost:8080/cadastrar", {
            method: 'post',
            body:JSON.stringify(objetoForm),
            headers:{
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(retornoApi => retornoApi.json())
        .then(retornoApi_convertido => {
            if (retornoApi_convertido.retorno !== undefined) {
                alert(retornoApi_convertido.retorno)
            }
            else{
                setCursos([...cursos, retornoApi_convertido]);
                alert("Cadastramento realizado com sucesso!!!");
                limparFormulario();
            }
        }
            
            )
    }
    //Função para Limpar os campos dos formulários apos o cadastramento
    const limparFormulario =()=>{
        setObjetoForm(formulario);
        setBotaoCadasrtro(true);
    }
    
    //useState para atualizar a lista de produtos
    const [cursos, setCursos] = useState([]);
    //useEffect para formatar a lista de cursos cadastradas
    useEffect(()=>{
        fetch("http://localhost:8080/listar")
        .then(retorno => retorno.json())
        .then(retorno_convertido => setCursos(retorno_convertido));
    }, []);

    return(
        <main className="corpo">
            <Cabecalho/>
            {/* TESTE DE RETORNO NO FRONT-END <p>{JSON.stringify(objetoForm)}</p> */}
            <Formulario botao={botaoCadastro} Digitando={aoDigitar} cadastrar={aoCadastrar} objeto={objetoForm} limpar={limparFormulario}/>
            <Tabela lista={cursos} selecionar={selecionarCursos}/>
            <Rodape/>
        </main>
    )
}