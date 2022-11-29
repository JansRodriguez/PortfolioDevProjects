import './Components.css';

export default()=>{
    return (
            <form >
                <input type="text" placeholder="Nome do Produto"  className="form-control"/>

                <input type="text" placeholder="Nome do Marca"  className="form-control"/>

                <input type="text" placeholder="Preço do Produto"  className="form-control"/>

                <input type="date" className="form-control"/>

                <input type="button" value="Cadastrar" className="btn btn-success"/>
                <input type="button" value="Alterar" className="btn btn-primary"/>
                <input type="button" value="Remover" className="btn btn-danger"/>
                <input type="button" value="Listar" className="btn btn-secondary"/>
            </form>
    );
}