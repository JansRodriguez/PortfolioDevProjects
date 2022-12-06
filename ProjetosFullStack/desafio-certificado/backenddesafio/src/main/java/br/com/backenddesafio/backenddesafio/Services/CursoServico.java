package br.com.backenddesafio.backenddesafio.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.backenddesafio.backenddesafio.Model.Curso;
import br.com.backenddesafio.backenddesafio.Model.RespostaCurso;
import br.com.backenddesafio.backenddesafio.Repository.CursoRepositorio;

@Service
public class CursoServico {

    @Autowired
    private CursoRepositorio cr; //Instancia para ter acesso as funcoes SQL

    @Autowired
    private RespostaCurso rc; //Instancia para ter acesso ao atributo retorno do nao preenchimento de algum campo da entidade.

    //Metodo para cadastrarAtualizar curso - E esse metodo pode devolver um retorno caso algum atributo nao tenha sido preenchido.
    public ResponseEntity<?> cadastrarAtualizarCurso(Curso c, String procedimento){
        if (c.getNomeCurso().equals("")) {
            rc.setRetorno("O nome do curso precisa estar preenchido.");
            return new ResponseEntity<RespostaCurso>(rc, HttpStatus.BAD_REQUEST);
        }
        else if (c.getNomeProfessor().equals("")) {
            rc.setRetorno("O nome do Professor do curso precisa estar preenchido.");
            return new ResponseEntity<RespostaCurso>(rc, HttpStatus.BAD_REQUEST);
        }
        else if (c.getDescricao().equals("")) {
            rc.setRetorno("A descricao do curso precisa estar preenchida.");
            return new ResponseEntity<RespostaCurso>(rc, HttpStatus.BAD_REQUEST);
        }
        else if (c.getValor().equals("")) {
            rc.setRetorno("O valor do curso precisa estar preenchido.");
            return new ResponseEntity<RespostaCurso>(rc, HttpStatus.BAD_REQUEST);
        }
        else if (c.getSegmento().equals("")) {
            rc.setRetorno("O segmento; do curso precisa estar preenchido.");
            return new ResponseEntity<RespostaCurso>(rc, HttpStatus.BAD_REQUEST);
        }
        else{
            if (procedimento.equals("cadastrar")) {
                return new ResponseEntity<Curso>(c, HttpStatus.CREATED);
            }
            else{
                return new ResponseEntity<Curso>(c, HttpStatus.OK);
            }
        }
    }

    
    //Metodo para listar/selecionar curso
    public Iterable<Curso> listarCursos(){
        return cr.findAll();
    }

    //Metodo para excluir itens
    public ResponseEntity<RespostaCurso> excluirItens(Long codigo){

        cr.deleteById(codigo);

        rc.setRetorno("O curso foi excluido com sucesso!!");

        return new ResponseEntity<RespostaCurso>(rc, HttpStatus.OK);
    }

}
