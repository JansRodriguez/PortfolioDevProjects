import './Components.css';

export default({lista, selecionar})=>{
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome do Curso</th>
                    <th>Professor</th>
                    <th>Descrição do Curso</th>
                    <th>Preço</th>
                    <th>Segmento</th>
                    <th>Selecionar</th>
                </tr>
            </thead>
            <tbody>
                {
                    lista.map((objeto, i)=>(
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{objeto.nomeCurso}</td>
                            <td>{objeto.nomeProfessor}</td>
                            <td>{objeto.descricao}</td>
                            <td>R${objeto.valor}</td>
                            <td>{objeto.segmento}</td>
                            <td><button className='btn btn-success' onClick={()=>{selecionar(i)}}>Selecionar</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}