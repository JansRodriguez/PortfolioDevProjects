package br.com.novaapi.apidois.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.novaapi.apidois.Model.LivrosModelo;

@Repository
public interface LivrosRepositorio extends CrudRepository<LivrosModelo, Long>{
    
}
