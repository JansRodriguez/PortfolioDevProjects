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

    //useEffect para formatar a lista de cursos cadastradas
    useEffect(()=>{
        fetch("http://localhost:8080/listar")
        .then(retorno => retorno.json())
        .then(retorno_convertido => setCursos(retorno_convertido));
    }, []);

    return(
        <main className="corpo">
            <Cabecalho/>
            <p>{JSON.stringify(cursos)}</p>
            <Formulario botao={botaoCadastro}/>
            <Tabela/>
            <Rodape/>
        </main>
    )
}