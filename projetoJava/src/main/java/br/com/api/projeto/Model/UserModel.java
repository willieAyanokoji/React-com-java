package br.com.api.projeto.Model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.websocket.Decoder.Text;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "user")
@Getter
@Setter

public class UserModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Codigo;
    @Column(unique=true)
    private String email;
    private String nome;
    private String senha;
    private Date nascimneto; 
}
