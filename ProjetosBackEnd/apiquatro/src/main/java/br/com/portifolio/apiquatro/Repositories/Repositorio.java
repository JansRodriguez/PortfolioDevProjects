package br.com.portifolio.apiquatro.Repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.portifolio.apiquatro.Models.Modelo;

@Repository
public interface Repositorio extends CrudRepository<Modelo, Integer>{
    
    List<Modelo> findAll();

    List<Modelo> findByNome(String nome);
}
