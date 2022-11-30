import './Components.css';

export default({vetor})=>{
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Marca</th>
                    <th>Preço</th>
                    <th>Data Cadastro</th>
                    <th>Selecionar</th>
                </tr>
            </thead>
            <tbody>
                {
                    vetor.map((objeto, indice)=>(
                        <tr key={indice}>
                            <td>{indice+1}</td>
                            <td>{objeto.nome}</td>
                            <td>{objeto.marca}</td>
                            <td>{objeto.preco}</td>
                            <td>{objeto.dataCadastro}</td>
                            <td><button className="btn btn-success">Selecionar</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}