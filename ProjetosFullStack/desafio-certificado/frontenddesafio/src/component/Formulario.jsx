import './Components.css';

export default({botao, Digitando, cadastrar})=>{
    return(
        <form>
            <h1>CADASTRO DE CURSOS</h1>    
            <input type="text" onChange={Digitando} name="nomeCurso" id="" placeholder="Nome Curso" className="form-control"/>
            <input type="text" onChange={Digitando} name="nomeProfessor" id="" placeholder="Nome Professor" className="form-control"/>
            <input type="text" onChange={Digitando} name="descricao" id="" placeholder="Descrição Curso" className="form-control"/>
            <input type="text" onChange={Digitando} name="valor" id="" placeholder="R$ 99.99" className="form-control"/>
            <input type="text" onChange={Digitando} name="segmento" id="" placeholder="Segmento Curso" className="form-control"/>

            {
                botao

                ?

                <input type="button" value="Cadastrar" onClick={cadastrar} className='btn btn-success'/>
                
                :

                <>
    
                    <input type="button" value="Alterar" className='btn btn-warning'/>
                    <input type="button" value="Excluir" className='btn btn-danger'/>
                    <input type="button" value="Cancelar" className='btn btn-info'/>
                </>
            }

            
        </form>
    )
}