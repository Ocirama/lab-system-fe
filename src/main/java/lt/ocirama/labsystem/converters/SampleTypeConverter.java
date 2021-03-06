package lt.ocirama.labsystem.converters;

import lt.ocirama.labsystem.model.dto.SampleType;
import lt.ocirama.labsystem.model.entities.local.SampleTypeEntity;
import org.springframework.stereotype.Component;

import java.util.List;

import static java.util.stream.Collectors.toList;
@Component
public class SampleTypeConverter {

    public List<SampleType> convert(List<SampleTypeEntity> customers) {
        return customers.stream()
                .map(this::convert)
                .collect(toList());
    }

    public SampleType convert(SampleTypeEntity sample) {
        if (sample == null) {
            throw new IllegalArgumentException("Sample type is required");
        }
        return new SampleType(
                sample.getId(),
                sample.getTitle());
    }
}
