package br.com.backenddesafio.backenddesafio.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.backenddesafio.backenddesafio.Model.Curso;
import br.com.backenddesafio.backenddesafio.Repository.CursoRepositorio;

@Service
public class CursoServico {

    @Autowired
    private CursoRepositorio cr;

    public Iterable<Curso> listarCursos(){
        return cr.findAll();
    }
}
