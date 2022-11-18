package br.com.novaapi.apidois.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LivrosControle {
    
    @GetMapping("/teste")
    public String mensagem(){
        return "Cadastrado de Livros";
    }
}
