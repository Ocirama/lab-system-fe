package lt.ocirama.labsystem.repositories.local;

import lt.ocirama.labsystem.model.entities.local.ResultEntity;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface ResultRepository extends Repository<ResultEntity,Integer> {
    List<ResultEntity> findAll();

    ResultEntity findOneById(Integer id);

    ResultEntity save(ResultEntity result);

    void deleteById(Integer id);



}
