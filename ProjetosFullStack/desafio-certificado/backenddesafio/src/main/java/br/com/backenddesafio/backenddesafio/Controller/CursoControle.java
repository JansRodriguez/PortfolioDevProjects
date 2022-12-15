package br.com.backenddesafio.backenddesafio.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.backenddesafio.backenddesafio.Model.Curso;
import br.com.backenddesafio.backenddesafio.Model.RespostaCurso;
import br.com.backenddesafio.backenddesafio.Services.CursoServico;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
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

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody Curso c){
        return cs.cadastrarAtualizarCurso(c, "cadastrar");
    }

    @PutMapping("/atualizar")
    public ResponseEntity<?> atualizar(@RequestBody Curso c){
        return cs.cadastrarAtualizarCurso(c, "atualizar");
    }

    @DeleteMapping("/deletar{codigo}")
    public ResponseEntity<RespostaCurso> excluir(@PathVariable Long codigo){
        return cs.excluirItens(codigo);
    }
}
