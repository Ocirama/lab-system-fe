package lt.ocirama.labsystem.services;

import lt.ocirama.labsystem.converters.AshConverter;
import lt.ocirama.labsystem.converters.AshEntityConverter;
import lt.ocirama.labsystem.model.dto.Ash;
import lt.ocirama.labsystem.model.dto.AshSave;
import lt.ocirama.labsystem.model.entities.local.AshEntity;
import lt.ocirama.labsystem.repositories.local.AshRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AshService {
    private final AshConverter ashConverter;
    private final AshEntityConverter ashEntityConverter;
    private final AshRepository ashRepository;

    public AshService(AshConverter ashConverter, AshEntityConverter ashEntityConverter, AshRepository ashRepository) {
        this.ashConverter = ashConverter;
        this.ashEntityConverter = ashEntityConverter;
        this.ashRepository = ashRepository;
    }

    public List<Ash> getAll() {
        List<AshEntity> ashEntities = ashRepository.findAll();

        return ashConverter.convert(ashEntities);
    }

    public Ash getAsh(Integer id) {
        AshEntity ashEntity = ashRepository.findOneById(id);

        return ashConverter.convert(ashEntity);
    }

    public Ash save(AshSave ashSave) {
        AshEntity ashEntity = ashEntityConverter.convert(ashSave);
        AshEntity result = ashRepository.save(ashEntity);

        return ashConverter.convert(result);
    }

    public Ash save2(AshSave ashSave) {
        AshEntity ashEntity = ashEntityConverter.convert2(ashSave);
        AshEntity result = ashRepository.save(ashEntity);

        return ashConverter.convert(result);
    }


    public void delete(Integer id) {
        ashRepository.deleteById(id);
    }
}
