import './Components.css';

export default({botao, eventoTeclado, eventoCadastrar, campos})=>{
    return (
            <form >
                <input type="text" value={campos.nome} onChange={eventoTeclado} name="nome" placeholder="Nome do Produto"  className="form-control"/>

                <input type="text" value={campos.marca} onChange={eventoTeclado} name="marca" placeholder="Nome do Marca"  className="form-control"/>

                <input type="text" value={campos.preco} onChange={eventoTeclado} name="preco" placeholder="R$ 0,00"  className="form-control"/>

                <input type="date" value={campos.dataCadastro} onChange={eventoTeclado}  name="dataCadastro" className="form-control"/>

                {
                    botao
                    
                    ?

                    <input type="button" value="Cadastrar" className="btn btn-success" onClick={eventoCadastrar}/>
                    
                    :

                    <>
                        <input type="button" value="Alterar" className="btn btn-primary"/>
                        <input type="button" value="Remover" className="btn btn-danger"/>
                        <input type="button" value="Listar" className="btn btn-secondary"/>
                    </>
                
                }

            </form>
    );
}