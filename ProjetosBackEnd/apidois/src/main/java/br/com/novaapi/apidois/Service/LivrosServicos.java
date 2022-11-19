package br.com.novaapi.apidois.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.novaapi.apidois.Model.LivrosModelo;
import br.com.novaapi.apidois.Repository.LivrosRepositorio;

//Essa classe terá a função de listar os itens (livros), trazendo todo o serviço pesado para cá e deixando a camada controle, apenas com o controle das rotas.
//Obs.: Isso poderia ter sido feito lá em controle.
@Service
public class LivrosServicos {
    
    //Dentro da classe Repositorio, com a herança temos os métos SQL
    @Autowired
    private LivrosRepositorio lr;


    //Método para listar todos os livros cadastrados
    //Iterable é um tipo de dado
    public Iterable<LivrosModelo> listarItens(){
        return lr.findAll();
    }
}
