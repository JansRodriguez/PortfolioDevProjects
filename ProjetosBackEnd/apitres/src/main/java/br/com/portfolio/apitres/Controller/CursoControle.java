package br.com.portfolio.apitres.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.portfolio.apitres.Model.Curso;
import br.com.portfolio.apitres.Model.CursoResposta;
import br.com.portfolio.apitres.Service.CursoService;

@RestController
public class CursoControle {

    //Objeto de servicos - para trazer os metodos criado la.
    @Autowired
    //É preciso criar a dependencias para instanciar o objeto
    private CursoService cs;
    
    @GetMapping("/teste")
    public String teste(){
        return "Teste de cadastro de Cursos";
    }

    @GetMapping("/listar")
    public Iterable<Curso> listar(){
        return cs.listarItens();
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody Curso curso){
        return cs.cadastrarAlterarItens(curso, "cadastrar");
    }

    @PutMapping("/alterar")
    public ResponseEntity<?> alterar(@RequestBody Curso curso){
        return cs.cadastrarAlterarItens(curso, "alterar");
    }

    @DeleteMapping("/remover{codigo}")
    public ResponseEntity<CursoResposta> remover(@PathVariable Long codigo){
        return cs.removerItens(codigo);
    }

}
