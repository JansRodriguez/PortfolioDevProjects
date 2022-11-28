package br.com.portfolio.singlepage.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.portfolio.singlepage.Model.Produtos;
import br.com.portfolio.singlepage.Model.ProdutosResposta;
import br.com.portfolio.singlepage.Repository.ProdutoRepositorio;

@Service
public class ProdutoServicos {
    
    @Autowired
    private ProdutosResposta pres;

    @Autowired
    private ProdutoRepositorio pr;

    //Método de cadastro/atualização de itens
    //Método para as requisições POST e PUT
    public ResponseEntity<?> cadastrarAlterarItens(Produtos p, String acao){
        if (p.getNome().equals("")) {
            pres.setDevolucao("O nome do produto precisa ser preenchido.");
            return new ResponseEntity<ProdutosResposta>(pres, HttpStatus.BAD_REQUEST);
        }
        else if (p.getMarca().equals("")) {
            pres.setDevolucao("A marca do produto precisa ser preenchido.");
            return new ResponseEntity<ProdutosResposta>(pres, HttpStatus.BAD_REQUEST);
        }
        else if(p.getPreco().equals("")){
            pres.setDevolucao("O preço 0.00 do produto deve ser preenchido.");
            return new ResponseEntity<ProdutosResposta>(pres, HttpStatus.BAD_REQUEST);
        }
        else if (p.getDataCadastro().equals("")) {
            pres.setDevolucao("A data Ano/Mes/Dia precisa ser preenchida.");
            return new ResponseEntity<ProdutosResposta>(pres, HttpStatus.BAD_REQUEST);
        }
        else{
            if(acao.equals("cadastrar")){
                return new ResponseEntity<Produtos>(pr.save(p), HttpStatus.CREATED);
            }
            else{
                return new ResponseEntity<Produtos>(pr.save(p), HttpStatus.OK);
            }
        }
    }

    //Método para listar todos os itens cadastrados
    //Método para a requisição GET
    public Iterable<Produtos> listarItens(){
        return pr.findAll();
    }


    //Método para deletar itens cadastrados
    //Método para a requisição DELETE
    public ResponseEntity<ProdutosResposta> deletarItens(Long codigo){//Estarei utilizando o PathVariable para identificar qual item quero deletar.

        pr.deleteById(codigo);

        pres.setDevolucao("O produto foi deletado.");

        return new ResponseEntity<ProdutosResposta>(pres, HttpStatus.OK);
    }

}
