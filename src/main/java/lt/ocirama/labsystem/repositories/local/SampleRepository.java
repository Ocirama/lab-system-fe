package lt.ocirama.labsystem.repositories.local;

import lt.ocirama.labsystem.model.entities.local.OrderEntity;
import lt.ocirama.labsystem.model.entities.local.SampleEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface SampleRepository extends Repository<SampleEntity, Integer> {

    List<SampleEntity> findAll();

    SampleEntity findOneById(Integer id);

    SampleEntity save(SampleEntity sample);

    void deleteById(Integer id);


    @Query(value = "select oe.samples  from OrderEntity oe where oe.protocolId=:protocol and oe.year =:year")
    List<SampleEntity> findAllByProtocol(String protocol, int year);
    @Query(value = "select oe  from OrderEntity oe where oe.protocolId=:protocol and oe.year =:year")
    OrderEntity findByProtocolId(String protocol, int year);

    @Query(value = "select se  from SampleEntity se where se.sampleId=:sampleId and se.order =:order")
    SampleEntity findByProtocolIdAndSampleId(OrderEntity order,String sampleId);
}
