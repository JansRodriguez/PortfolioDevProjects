package br.com.backenddesafio.backenddesafio.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.backenddesafio.backenddesafio.Model.Curso;
import br.com.backenddesafio.backenddesafio.Services.CursoServico;

@RestController
@RequestMapping("/")
public class CursoControle {
    
    @GetMapping("/teste")
    public String mensagem(){
        return "Teste conexao!";
    }

    @Autowired
    private CursoServico cs;

    @GetMapping("/listar")
    public Iterable<Curso> listar(){
        return cs.listarCursos();
    }
}
