package br.com.portfolio.singlepage.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.portfolio.singlepage.Model.Produtos;
import br.com.portfolio.singlepage.Model.ProdutosResposta;
import br.com.portfolio.singlepage.Service.ProdutoServicos;

@RestController
@RequestMapping("/")
public class ProdutosControle {
    
    @GetMapping("/teste")
    public String msg(){
        return "Teste de Conexão!";
    }

    @Autowired
    private ProdutoServicos ps; //Camada de serviços onde estão as regras de negócio.

    //ROTAS: cadastrar/enviar dados (post) ; alterar (put) ; deletar (delete) ; buscar informações (get) 

    //Rota de Cadastrar/enviar dados
    @PostMapping("/cadastrar")//Para a rota do controle precisa-se usar o RequestBod
    public ResponseEntity<?> cadastrar(@RequestBody Produtos produtos){
        return ps.cadastrarAlterarItens(produtos, "cadastrar");
    }

    //Rota de Alterar dados
    @PutMapping("alterar")
    public ResponseEntity<?> alterar(@RequestBody Produtos produtos){
        return ps.cadastrarAlterarItens(produtos, "alterar");
    }

    //Rota de Deletar dados
    @DeleteMapping("/remover{codigo}")
    public ResponseEntity<ProdutosResposta> deletar(@PathVariable Long codigo){
        return ps.deletarItens(codigo);
    }

    //Rota de buscar dados
    @GetMapping("/listar")
    public Iterable<Produtos> listar(){
        return ps.listarItens();
    }
}
