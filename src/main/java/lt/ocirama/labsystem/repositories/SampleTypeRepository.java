package lt.ocirama.labsystem.repositories;

import lt.ocirama.labsystem.model.entities.CustomerEntity;
import lt.ocirama.labsystem.model.entities.OrderEntity;
import lt.ocirama.labsystem.model.entities.SampleTypeEntity;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface SampleTypeRepository extends Repository<SampleTypeEntity, Integer> {

    List<SampleTypeEntity> findAll();

    SampleTypeEntity findOneById(Integer id);

    SampleTypeEntity save(SampleTypeEntity order);

    //void deleteByTitle(String title);

    @Modifying
    @Transactional
    @Query("delete from SampleTypeEntity ce where ce.title=:title")
    void deleteByTitle(@Param("title") String title);
}
