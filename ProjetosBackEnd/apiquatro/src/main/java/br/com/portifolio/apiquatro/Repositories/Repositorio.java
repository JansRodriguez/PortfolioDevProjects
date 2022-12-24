package br.com.portifolio.apiquatro.Repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.portifolio.apiquatro.Models.Modelo;

@Repository
public interface Repositorio extends CrudRepository<Modelo, Integer>{
   
    //Listar todos
    List<Modelo> findAll();

    //Listar por critério
    Modelo findByCodigo(int codigo);
    List<Modelo> findByNome(String nome);
    Modelo findByIdade(int idade);
}
