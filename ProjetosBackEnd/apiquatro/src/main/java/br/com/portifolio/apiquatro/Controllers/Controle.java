package br.com.portifolio.apiquatro.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
    public Modelo cadastrar(@RequestBody Modelo m){
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
    //Rota para Listar os itens cadastrados especificos
    @GetMapping("/listar/{codigo}")
    public Modelo listarPorCodigo(@PathVariable int codigo){
        return acaoBanco.findByCodigo(codigo);
    }
    //Rota para Listar os itens cadastrados por nome
    @GetMapping("/listar/nome/{nome}")
    public List<Modelo> listarPorNome(@PathVariable String nome){
        return acaoBanco.findByNome(nome);
    }
    //Rota para Listar os itens cadastrados por idade
    @GetMapping("/listar/idade/{idade}")
    public Modelo listarPorIdade(@PathVariable int idade){
        return acaoBanco.findByIdade(idade);
    }

    //Rota para alterar e salvar o objeto da entidade
    @PutMapping("/alterar")
    public Modelo alterar(@RequestBody Modelo m){
        return acaoBanco.save(m);
    }

    //Rota para deletar o objeto da entidade
    @DeleteMapping("/deletar/{codigo}")
    public void deletar(@PathVariable int codigo){
        Modelo m = listarPorCodigo(codigo);
        acaoBanco.delete(m);
    }
}