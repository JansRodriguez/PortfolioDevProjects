import './Components.css';

export default()=>{
    return(
        <form>
            <input type="text" name="" id="" placeholder="Nome Curso" className="form-control"/>
            <input type="text" name="" id="" placeholder="Nome Professor" className="form-control"/>
            <input type="text" name="" id="" placeholder="Descrição Curso" className="form-control"/>
            <input type="text" name="" id="" placeholder="R$ 99.99" className="form-control"/>
            <input type="text" name="" id="" placeholder="Segmento Curso" className="form-control"/>

            <input type="button" value="Cadastrar" />
            <input type="button" value="Alterar" />
            <input type="button" value="Excluir" />
            <input type="button" value="Cancelar" />
        </form>
    )
}