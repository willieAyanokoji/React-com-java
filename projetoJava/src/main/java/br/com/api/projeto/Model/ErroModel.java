package br.com.api.projeto.Model;

import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Component // spring vai da um "new"
@Getter
@Setter
public class ErroModel {
    private String mensagem;
}
