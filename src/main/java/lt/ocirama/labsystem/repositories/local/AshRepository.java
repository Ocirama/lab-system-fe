package lt.ocirama.labsystem.repositories.local;

import lt.ocirama.labsystem.model.entities.local.AshEntity;
import lt.ocirama.labsystem.model.entities.local.SampleEntity;
import lt.ocirama.labsystem.model.entities.local.TrayEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

import java.util.Date;
import java.util.List;

public interface AshRepository extends Repository<AshEntity, Integer> {

    List<AshEntity> findAll();

    AshEntity findOneById(Integer id);

    AshEntity save(AshEntity sample);

    void deleteById(Integer id);

    @Query(value = "select oe.samples  from OrderEntity oe where oe.protocolId=:protocol")
    List<SampleEntity> findAllByProtocol(String protocol);

    @Query(value="Select te from TrayEntity te where te.trayId=:padeklas AND te.date=:current_date")
    TrayEntity findByTrayAndDate(String padeklas, Date current_date);


}
