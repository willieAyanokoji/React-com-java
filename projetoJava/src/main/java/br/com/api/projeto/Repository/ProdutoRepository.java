package br.com.api.projeto.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.api.projeto.Model.ProdutoModel;

@Repository // defini que esse arquivo é um repository
public interface ProdutoRepository extends CrudRepository<ProdutoModel,Long>{
    
}
    