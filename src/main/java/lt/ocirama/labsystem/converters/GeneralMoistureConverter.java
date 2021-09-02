package lt.ocirama.labsystem.converters;

import lt.ocirama.labsystem.model.dto.GeneralMoisture;
import lt.ocirama.labsystem.model.entities.local.GeneralMoistureEntity;
import org.springframework.stereotype.Component;

import java.util.List;

import static java.util.stream.Collectors.toList;
@Component
public class GeneralMoistureConverter {

    public List<GeneralMoisture> convert(List<GeneralMoistureEntity> generalMoistureEntities) {
        return generalMoistureEntities.stream()
                .map(this::convert)
                .collect(toList());
    }

    public GeneralMoisture convert(GeneralMoistureEntity generalMoistureEntity) {
        return new GeneralMoisture(
                generalMoistureEntity.getId(),
                generalMoistureEntity.getTray().getSample().getOrder().getProtocolId(),
                generalMoistureEntity.getTray().getSample().getSampleId(),
                generalMoistureEntity.getTray().getTrayId(),
                generalMoistureEntity.getJarId(),
                generalMoistureEntity.getJarWeight(),
                generalMoistureEntity.getJarAndSampleWeightBefore(),
                generalMoistureEntity.getJarAndSampleWeightAfter(),
                generalMoistureEntity.getJarAndSampleWeightAfterPlus(),
                generalMoistureEntity.getDate());
    }
}
