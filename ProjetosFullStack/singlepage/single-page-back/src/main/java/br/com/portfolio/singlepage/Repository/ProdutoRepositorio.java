package br.com.portfolio.singlepage.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.portfolio.singlepage.Model.Produtos;

@Repository
public interface ProdutoRepositorio extends CrudRepository<Produtos, Long>{
    
}
