package br.com.portfolio.singlepage.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class ProdutosControle {
    
    @GetMapping("/teste")
    public String msg(){
        return "Teste de Conexão!";
    }
}
