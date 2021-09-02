package lt.ocirama.labsystem.converters;

import lt.ocirama.labsystem.model.dto.Litesko;
import lt.ocirama.labsystem.model.entities.litesko.ResultEntity;
import org.springframework.stereotype.Component;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Component
public class LiteskoConverter {
    public List<Litesko> convert(List<lt.ocirama.labsystem.model.entities.litesko.ResultEntity> results) {
        return results.stream()
                .map(this::convert)
                .collect(toList());
    }

    public Litesko convert(ResultEntity result) {
        if (result == null) {
            throw new IllegalArgumentException("Result is required");
        }
        return new Litesko(
                result.getId(),
                result.getSampleId(),
                result.getTestType(),
                result.getDateOfReceipt(),
                result.getStatusCode(),
                result.getNotes(),
                result.getStartDate(),
                result.getEndDate(),
                result.getTotalMoistureValue(),
                result.getLowerCalorificValue(),
                result.getUpperCalorificValue(),
                result.getAshValue()
        );
    }
}
