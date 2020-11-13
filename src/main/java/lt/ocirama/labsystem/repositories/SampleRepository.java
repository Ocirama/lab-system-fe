package lt.ocirama.labsystem.repositories;

import lt.ocirama.labsystem.model.entities.SampleEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

import java.util.Calendar;
import java.util.List;

public interface SampleRepository extends Repository<SampleEntity, Integer> {

    List<SampleEntity> findAll();

    SampleEntity findOneById(Integer id);

    SampleEntity save(SampleEntity sample);

    void deleteById(Integer id);


    @Query(value = "select oe.samples  from OrderEntity oe where oe.protocolId=:protocol and oe.year =:year")
    List<SampleEntity> findAllByProtocol(String protocol, int year);
}
