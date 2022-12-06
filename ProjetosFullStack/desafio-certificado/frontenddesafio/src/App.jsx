import Cabecalho from "./layout/Cabecalho";
import Rodape from "./layout/Rodape";

import './App.css';
import Formalario from "./component/Formalario";
import Tabela from "./component/Tabela";

export default()=>{
    return(
        <main className="corpo">
            <Cabecalho/>
            <Formalario/>
            <Tabela/>
            <Rodape/>
        </main>
    )
}