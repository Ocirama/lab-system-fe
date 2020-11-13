package lt.ocirama.labsystem.converters;

import lt.ocirama.labsystem.model.dto.SampleTypeSave;
import lt.ocirama.labsystem.model.entities.SampleTypeEntity;
import lt.ocirama.labsystem.repositories.SampleTypeRepository;
import org.springframework.stereotype.Component;

import java.util.Objects;

@Component
public class SampleTypeEntityConverter {
    private final SampleTypeRepository sampleTypeRepository;

    public SampleTypeEntityConverter(SampleTypeRepository sampleTypeRepository) {
        this.sampleTypeRepository = sampleTypeRepository;
    }

    public SampleTypeEntity convert(SampleTypeSave sample) {
        SampleTypeEntity result;

        if (Objects.isNull(sample.getId())) {
            result = new SampleTypeEntity();
            result.setTitle(sample.getTitle());
        } else {
            result = sampleTypeRepository.findOneById(sample.getId());
            result.setTitle(sample.getTitle());

        }

        return result;
    }
}
