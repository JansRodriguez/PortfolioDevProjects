package br.com.novaapi.apidois.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.novaapi.apidois.Model.LivrosModelo;
import br.com.novaapi.apidois.Model.LivrosResposta;
import br.com.novaapi.apidois.Repository.LivrosRepositorio;

//Essa classe terá a função de listar os itens (livros), trazendo todo o serviço pesado para cá e deixando a camada controle, apenas com o controle das rotas.
//Obs.: Isso poderia ter sido feito lá em controle.
@Service
public class LivrosServicos {
    
    //Dentro da classe Repositorio, com a herança temos os métos SQL
    @Autowired
    private LivrosRepositorio lr;

    //Essa classe é necessário quando o usuário não preencher todos os dados, OBJETIVO DA API, ai será retonada uma resposta como obrigatoriedade.
    @Autowired
    private LivrosResposta lres;;

    //Método para listar todos os livros cadastrados
    //Iterable é um tipo de dado
    public Iterable<LivrosModelo> listarItens(){
        return lr.findAll();
    }

    //--Serviço para cadatrar
    //Método para cadastrar itens(livros) e trazer a classe LivrosResposta caso não haja a completa inserção dos dados
    //Usarei o tipo ResponseEntity, pois poderá ter tanto o Modelo como Resposta como devolutiva e uma <?>, pois pode ser um dos dois casos.
    //Outra observação é que dentro do parametro do método tem que ter o modelo, pois indica o que devo ou não cadastrar
    public ResponseEntity<?> cadastrarItens(LivrosModelo lm){
        if (lm.getTitulo().equals("")) {
            lres.setMensagem("O título do livro é obrigatório!");
            return new ResponseEntity<LivrosResposta>(lres, HttpStatus.BAD_REQUEST);
        }
        else if(lm.getAutor().equals("")){
            lres.setMensagem("O nome do autor da obra é obrigatória!!!");
            return new ResponseEntity<LivrosResposta>(lres, HttpStatus.BAD_REQUEST);
        }
        else if(lm.getData().equals("")){ //Vê com o ralf como faz para verificar data nessa linha
            lres.setMensagem("O ano da obra é obrigatório!");
            return new ResponseEntity<LivrosResposta>(lres, HttpStatus.BAD_REQUEST);
        }
        else if(lm.getEdicao().equals("")){//Vê com o ralf como faz para verificar inteiro nessa linha
            lres.setMensagem("A número da edição do livro é obrigatoria!!");
            return new ResponseEntity<LivrosResposta>(lres, HttpStatus.BAD_REQUEST);
        }
        else if(lm.getEditora().equals("")){
            lres.setMensagem("O nome da editora é obrigatória!!!");
            return new ResponseEntity<LivrosResposta>(lres, HttpStatus.BAD_REQUEST);
        }
        else if(lm.getIsbn().equals("")){
            lres.setMensagem("O código ISBN é obrigatório!!");
            return new ResponseEntity<LivrosResposta>(lres, HttpStatus.BAD_REQUEST);
        }
        else{
            return new ResponseEntity<LivrosModelo>(lr.save(lm), HttpStatus.CREATED);
        }
    }
}
