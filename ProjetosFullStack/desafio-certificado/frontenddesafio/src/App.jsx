import Cabecalho from "./layout/Cabecalho";
import Rodape from "./layout/Rodape";

import './App.css';
import Formalario from "./component/Formalario";
import Tabela from "./component/Tabela";
import { useState } from "react";

export default()=>{

    //Hook para exibicao de Botoes alternados.
    const [botaoCadastro, setBotaoCadasrtro] = useState(true);

    return(
        <main className="corpo">
            <Cabecalho/>
            <Formalario botao={botaoCadastro}/>
            <Tabela/>
            <Rodape/>
        </main>
    )
}