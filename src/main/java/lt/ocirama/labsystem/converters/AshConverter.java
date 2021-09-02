package lt.ocirama.labsystem.converters;

import lt.ocirama.labsystem.model.dto.Ash;
import lt.ocirama.labsystem.model.entities.local.AshEntity;
import org.springframework.stereotype.Component;

import java.util.List;

import static java.util.stream.Collectors.toList;
@Component
public class AshConverter {

    public List<Ash> convert(List<AshEntity> ashEntities) {
        return ashEntities.stream()
                .map(this::convert)
                .collect(toList());
    }

    public Ash convert(AshEntity ashEntity) {
        return new Ash(
                ashEntity.getId(),
                ashEntity.getTray().getSample().getOrder().getProtocolId(),
                ashEntity.getTray().getSample().getSampleId(),
                ashEntity.getTray().getTrayId(),
                ashEntity.getDishId(),
                ashEntity.getDishWeight(),
                ashEntity.getDishAndSampleWeightBefore(),
                ashEntity.getDishAndSampleWeightAfter(),
                ashEntity.getDate());
    }
}
