package br.com.portfolio.apitres.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.portfolio.apitres.Model.Curso;

@Repository
public interface CursoRepositorio extends CrudRepository<Curso, Long>{
    
}
