package br.com.portifolio.apiquatro.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.portifolio.apiquatro.Models.Modelo;
import br.com.portifolio.apiquatro.Repositories.Repositorio;

@RestController
public class Controle {

    @Autowired
    private Repositorio acaoBanco;
    
    @GetMapping("/api/{nome}")
    public String boasVindas(@PathVariable String nome){
        return "Olá, " + nome + ". Desenvolvendo a API";
    }

    //Rota para cadastrar e salvar o objeto da entidade
    @PostMapping("/cadastrar")
    public Modelo cadstrar(@RequestBody Modelo m){
        return acaoBanco.save(m);
    }

    //Rota para retornar os atributos do modelos - Cadastrar mais não salva.
    @PostMapping("/modelo")
    public Modelo modelo(@RequestBody Modelo model){
        return model;
    }

    //Rota para Listar os itens cadastrados
    @GetMapping("/listar")
    public List<Modelo> listar(){
        return acaoBanco.findAll();
    }


}
