import './Components.css';

export default()=>{
    return(
        <form>
            <h1>CADASTRO DE CURSOS</h1>    
            <input type="text" name="" id="" placeholder="Nome Curso" className="form-control"/>
            <input type="text" name="" id="" placeholder="Nome Professor" className="form-control"/>
            <input type="text" name="" id="" placeholder="Descrição Curso" className="form-control"/>
            <input type="text" name="" id="" placeholder="R$ 99.99" className="form-control"/>
            <input type="text" name="" id="" placeholder="Segmento Curso" className="form-control"/>

            <input type="button" value="Cadastrar" className='btn btn-success'/>
            <input type="button" value="Alterar" className='btn btn-warning'/>
            <input type="button" value="Excluir" className='btn btn-danger'/>
            <input type="button" value="Cancelar" className='btn btn-success'/>
        </form>
    )
}