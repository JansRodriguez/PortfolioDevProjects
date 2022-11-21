package br.com.portfolio.apitres.Model;

import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Component
@Getter
@Setter
public class CursoResposta {
    
    //Atributo para obter a resposta da Entidade, caso os atributos da entidade nao tenham sido todos preenchidos.
    private String mensagem;
}
