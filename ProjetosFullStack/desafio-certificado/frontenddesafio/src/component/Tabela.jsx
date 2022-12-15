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
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><button className='btn btn-success'>Selecionar</button></td>
                </tr>
            </tbody>
        </table>
    )
}