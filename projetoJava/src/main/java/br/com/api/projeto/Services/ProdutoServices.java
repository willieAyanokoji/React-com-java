package br.com.api.projeto.Services;

import org.hibernate.dialect.InterbaseDialect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.api.projeto.Model.ErroModel;
import br.com.api.projeto.Model.ProdutoModel;
import br.com.api.projeto.Repository.ProdutoRepository;
import ch.qos.logback.core.status.Status;

@Service
public class ProdutoServices {
    @Autowired
    private ProdutoRepository pr;
    @Autowired
    private ErroModel em;
    public Iterable<ProdutoModel> listarAll(){
        return pr.findAll();
    }
    public ResponseEntity<?> cadastrar(ProdutoModel pm){
        if(pm.getNome().equals("")){
            em.setMensagem("nome do produto é obrigatorio");
            
            return new ResponseEntity<ErroModel>(em,HttpStatus.BAD_REQUEST);
        }else{
            return new ResponseEntity<ProdutoModel>(pr.save(pm),HttpStatus.CREATED);
        }
    }
    public ResponseEntity<?> atualizar(ProdutoModel pm){
        if(pm.getNome().equals("")){
            em.setMensagem("nome do produto é obrigatorio");
            return new ResponseEntity<ErroModel>(em,HttpStatus.BAD_REQUEST);
        }else{
            return new ResponseEntity<ProdutoModel>(pr.save(pm),HttpStatus.OK);
        }
    }
    public ResponseEntity<ErroModel> remover(long codigo){
        pr.deleteById(codigo);
        em.setMensagem("Removido com sucesso");
         return  new ResponseEntity<ErroModel>(em, HttpStatus.OK);
    }
}
