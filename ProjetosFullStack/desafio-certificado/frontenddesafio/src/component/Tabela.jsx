import './Components.css';

export default()=>{
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome do Curso</th>
                    <th>Nome do Professor</th>
                    <th>Descrição do Curso</th>
                    <th>Preço do Curso</th>
                    <th>Segmento</th>
                    <th>Selecionar</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>indice</td>
                    <td>nome</td>
                    <td>nome</td>
                    <td>descricao</td>
                    <td>preco</td>
                    <td>segmento</td>
                    <td><button className='btn btn-success'>Selecionar</button></td>
                </tr>
            </tbody>
        </table>
    )
}