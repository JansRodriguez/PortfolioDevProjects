package br.com.portfolio.apitres.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.portfolio.apitres.Model.Curso;
import br.com.portfolio.apitres.Model.CursoResposta;
import br.com.portfolio.apitres.Repository.CursoRepositorio;

@Service
public class CursoService {
    

    //Objeto do Repositorio - para obter as funcoes sql que viram do repositorio
    @Autowired //É preciso criar a instancia do objeto.
    private CursoRepositorio cr;

    //Objeto da CursoResposta - para obter a devolutiva caso algum atributo nao seja preenchido
    @Autowired //É preciso criar a instancia do objeto.
    private CursoResposta crsp;

    //Metodo para cadastrar ou Alterar os itens(produtos)
    //Como o usário pode não preencher um dos campos, se utiliza o tipo ResponseEntity <?>, mas buscando do Modelo
    public ResponseEntity<?> cadastrarAlterarItens(Curso curso, String acao){  //tipo de cadastro e acao
        if(curso.getNome().equals("")){
            crsp.setMensagem("O nome é obrigatório!");
            return new ResponseEntity<CursoResposta>(crsp, HttpStatus.BAD_REQUEST);
        }
        else if (curso.getDescricao().equals("")) {
            crsp.setMensagem("A descrição do curso é obrigatória!!");    
            return new ResponseEntity<CursoResposta>(crsp, HttpStatus.BAD_REQUEST);      
        }
        else if (curso.getCarga().equals("")) {
            crsp.setMensagem("A quantidade da carga horária é obrigatória!");
            return new ResponseEntity<CursoResposta>(crsp, HttpStatus.BAD_REQUEST);
        }
        else if (curso.getTotaulas().equals("")) {
            crsp.setMensagem("A quantidade de aulas realizada é obrigatória!");
            return new ResponseEntity<CursoResposta>(crsp, HttpStatus.BAD_REQUEST);
        }
        else if (curso.getDataConclusao().equals("")) {
            crsp.setMensagem("A data de conclusão do curso é obrigatória!");
            return new ResponseEntity<CursoResposta>(crsp, HttpStatus.BAD_REQUEST);
        }
        else{
            if (acao.equals("cadastrar")) {
                return new ResponseEntity<Curso>(cr.save(curso), HttpStatus.CREATED);
            }
            else{
                return new ResponseEntity<Curso>(cr.save(curso), HttpStatus.OK);
            }
        }
    }

    //Metodo para listar os itens(produtos) a serem cadastrados
    public Iterable<Curso> listarItens(){
        return cr.findAll();
    }

    //Metodo para remover itens utilizando o Path Variable (caminho variavel) do identificador da tabela
    public ResponseEntity<CursoResposta> removerItens(Long codigo){

        cr.deleteById(codigo);

        crsp.setMensagem("O curso foi removido com sucesso!!");

        return new ResponseEntity<CursoResposta>(crsp, HttpStatus.OK);
    }

}