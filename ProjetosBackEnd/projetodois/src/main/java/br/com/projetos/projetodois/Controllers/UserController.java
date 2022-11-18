package br.com.projetos.projetodois.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.projetos.projetodois.Models.UserModel;

@RestController
@RequestMapping("/")
public class UserController {

    @GetMapping("")
    public String OlaBaixada(){
        return "Olá, baixada Maranhense!!!!";
    }
    
}
