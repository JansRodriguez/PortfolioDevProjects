import Cabecalho from "./layout/Cabecalho";
import Rodape from "./layout/Rodape";

import './App.css';
import Formulario from "./component/Formulario";
import Tabela from "./component/Tabela";
import { useEffect, useState } from "react";

export default()=>{

    //Hook para exibicao de Botoes alternados.
    //UseState para mudar o estado dos botões
    const [botaoCadastro, setBotaoCadasrtro] = useState(true);

    //useState para atualizar a lista de produtos
    const [cursos, setCursos] = useState([]);

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

    //useEffect para formatar a lista de cursos cadastradas
    useEffect(()=>{
        fetch("http://localhost:8080/listar")
        .then(retorno => retorno.json())
        .then(retorno_convertido => setCursos(retorno_convertido));
    }, []);

    return(
        <main className="corpo">
            <Cabecalho/>
            <p>{JSON.stringify(objetoForm)}</p>
            <Formulario botao={botaoCadastro} Digitando={aoDigitar}/>
            <Tabela lista={cursos}/>
            <Rodape/>
        </main>
    )
}