package br.com.api.projeto.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.projeto.Model.ErroModel;
import br.com.api.projeto.Model.ProdutoModel;
import br.com.api.projeto.Services.ProdutoServices;

@RestController // controle de rotas
@CrossOrigin(origins = "*")
public class ProdutoController {
    @Autowired
    private ProdutoServices pr;
    @GetMapping("/Listar")
    public Iterable<ProdutoModel> listar(){
        return pr.listarAll();
    }
    @PostMapping("/Cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody ProdutoModel pm){
        return pr.cadastrar(pm);
    }
    @PostMapping("/Atualizar")
    public ResponseEntity<?> atualizar(@RequestBody ProdutoModel pm){
        return pr.atualizar(pm);
    }
    @DeleteMapping("/remover/{codigo}")
    public ResponseEntity<ErroModel> remover(@PathVariable long codigo){
        return pr.remover(codigo);
    }
    @GetMapping("/")
    public String rota(){
        return "Api rota funcionando";
    }
}
