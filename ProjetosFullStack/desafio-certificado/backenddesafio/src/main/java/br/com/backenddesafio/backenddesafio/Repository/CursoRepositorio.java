package br.com.backenddesafio.backenddesafio.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.backenddesafio.backenddesafio.Model.Curso;

@Repository
public interface CursoRepositorio extends CrudRepository<Curso, Long>{
    
}
