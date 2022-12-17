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

    //Função para atualizar itens da Tabela - essa função buscar do banckend a requisição para alterar
    const alterar =()=>{
        fetch('http://localhost:8080/atualizar', {
            method:'put',
            body:JSON.stringify(objetoForm),
            headers:{
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(retornoApi => retornoApi.json())
        .then(retornoApi_convertido =>{
            if (retornoApi_convertido.retorno !== undefined) {
                alert(retornoApi_convertido.retorno);
            }
            else{
                //Copia da lista para fazer a alteração
                let listaCopia = [...cursos];
                //Objeto 'curso' para especificar qual item será removido.
                let indice = listaCopia.findIndex((curso)=>{
                    return curso.codigo === objetoForm.codigo
                });
                //Atualizar lista cópia
                listaCopia[indice] = objetoForm;
                //Fazer com que a lista original receba a lista copia com o item deletado
                setCursos(listaCopia);
                //Mensagem e limpeza do formulário
                alert("Dados atualizados com sucesso!!");
                limparFormulario();
            }
        })
    }

    //Função para Remover itens da Tabela - essa funçao busca do backend a requisição de deletar
    const remover =()=>{
        fetch("http://localhost:8080/deletar"+objetoForm.codigo, {
            method:'delete',
            headers:{
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(retornoApi => retornoApi.json())
        .then(retornoApi_convertido => {

            //Mensagem de Exclusão do itens (cursos)
            alert(retornoApi_convertido.retorno)

            //Cópia da lista de cursos
            let listaCopia = [...cursos];
            //Objeto 'curso' para especificar qual item será removido.
            let indice = listaCopia.findIndex((curso)=>{
                return curso.codigo === objetoForm.codigo;
            });
            //Removendo itens da Copia da Lista
            listaCopia.splice(indice, 1); //O numero 1 é para indicar que apenas 1 elementos será removido.
            //Fazer com que a lista original receba a lista copia com o item deletado
            setCursos(listaCopia);
            //Limpando os campos do formulario
            limparFormulario();
        })
    }

    return(
        <main className="corpo">
            <Cabecalho/>
            {/* TESTE DE RETORNO NO FRONT-END <p>{JSON.stringify(objetoForm)}</p> */}
            <Formulario botao={botaoCadastro} Digitando={aoDigitar} cadastrar={aoCadastrar} objeto={objetoForm} limpar={limparFormulario} remover={remover}/>
            <Tabela lista={cursos} selecionar={selecionarCursos}/>
            <Rodape/>
        </main>
    )
}