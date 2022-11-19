package br.com.novaapi.apidois.Model;

import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Component //Essa anotação tem a ideia de fazer o Spring instanciae o objeto dessa classe, automaticamente.
public class LivrosResposta {
    
    private String mensagem;
}
