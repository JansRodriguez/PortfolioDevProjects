import './Components.css';

export default({botao, Digitando, cadastrar, objeto, limpar, remover})=>{
    return(
        <form>
            <h1>CADASTRO DE CURSOS</h1>    
            <input type="text" onChange={Digitando} name="nomeCurso" id="" value={objeto.nomeCurso} placeholder="Nome Curso" className="form-control"/>
            <input type="text" onChange={Digitando} name="nomeProfessor" id="" value={objeto.nomeProfessor} placeholder="Nome Professor" className="form-control"/>
            <input type="text" onChange={Digitando} name="descricao" id="" value={objeto.descricao} placeholder="Descrição Curso" className="form-control"/>
            <input type="text" onChange={Digitando} name="valor" id="" value={objeto.valor} placeholder="R$ 99.99" className="form-control"/>
            <input type="text" onChange={Digitando} name="segmento" id="" value={objeto.segmento} placeholder="Segmento Curso" className="form-control"/>

            {
                botao

                ?

                <input type="button" value="Cadastrar" onClick={cadastrar} className='btn btn-success'/>
                
                :

                <>
    
                    <input type="button" value="Alterar" className='btn btn-warning'/>
                    <input type="button" value="Excluir"  onClick={remover} className='btn btn-danger'/>
                    <input type="button" value="Cancelar" onClick={limpar} className='btn btn-info'/>
                </>
            }

            
        </form>
    )
}