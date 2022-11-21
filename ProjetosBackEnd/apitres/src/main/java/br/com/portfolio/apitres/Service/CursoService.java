package br.com.portfolio.apitres.Service;

import org.springframework.stereotype.Service;

import br.com.portfolio.apitres.Model.Curso;
import br.com.portfolio.apitres.Model.CursoResposta;
import br.com.portfolio.apitres.Repository.CursoRepositorio;

@Service
public class CursoService {
    

    //Objeto do Repositorio - para obter as funcoes sql que viram do repositorio
    private CursoRepositorio cr;

    //Objeto da CursoResposta - para obter a devolutiva caso algum atributo nao seja preenchido
    private CursoResposta crsp;

    //Metodo para cadastrar os itens(produtos)
    

    //Metodo para listar os itens(produtos) a serem cadastrados
    public Iterable<Curso> listarItens(){
        return cr.findAll();
    }
}
