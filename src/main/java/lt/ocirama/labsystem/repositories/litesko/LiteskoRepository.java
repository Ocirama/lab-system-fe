package lt.ocirama.labsystem.repositories.litesko;

import lt.ocirama.labsystem.model.entities.litesko.ResultEntity;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface LiteskoRepository extends Repository<ResultEntity,Integer> {
    List<ResultEntity> findAll();

    ResultEntity findOneById(Integer id);

    ResultEntity save(ResultEntity result);

    void deleteById(Integer id);



}
