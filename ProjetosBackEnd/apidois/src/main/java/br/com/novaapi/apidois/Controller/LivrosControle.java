package br.com.novaapi.apidois.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.novaapi.apidois.Model.LivrosModelo;
import br.com.novaapi.apidois.Service.LivrosServicos;

@RestController
public class LivrosControle {
    
    @Autowired
    //Nesse momento estamos trazendo a listagem dos itens(livros) para serem publicados pela rota que criaremos, a função do objeto serviço é o transporte das informações, pois aqui a @Autowired instancia.
    private LivrosServicos ls;

    
    
    @GetMapping("/teste")
    public String mensagem(){
        return "Cadastrado de Livros";
    }

    //Metodos para buscar a listagem vinda da classe serviços.
    @GetMapping("/listar")
    public Iterable<LivrosModelo> listar(){
        return ls.listarItens();
    }

    
}
