package br.com.backenddesafio.backenddesafio.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "cursos")
@Getter
@Setter
public class Curso {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long codigo;

    private String nomeCurso;

    private String nomeProfessor;

    private String descricao;

    private String valor;

    private String segmento;
}
