package br.com.portfolio.apitres.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.portfolio.apitres.Model.Curso;
import br.com.portfolio.apitres.Service.CursoService;

@RestController
public class CursoControle {

    //Objeto de servicos - para trazer os metodos criado la.
    private CursoService cs;
    
    @GetMapping("/teste")
    public String teste(){
        return "Teste de cadastro de Cursos";
    }

    @GetMapping("/listar")
    public Iterable<Curso> listar(){
        return cs.listarItens();
    }

}
