import './Components.css';

export default({botao, eventoTeclado, eventoCadastrar})=>{
    return (
            <form >
                <input type="text" onChange={eventoTeclado} name="nome" placeholder="Nome do Produto"  className="form-control"/>

                <input type="text" onChange={eventoTeclado} name="marca" placeholder="Nome do Marca"  className="form-control"/>

                <input type="text" onChange={eventoTeclado} name="preco" placeholder="R$ 0,00"  className="form-control"/>

                <input type="date"  onChange={eventoTeclado}  name="dataCadastro" className="form-control"/>

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