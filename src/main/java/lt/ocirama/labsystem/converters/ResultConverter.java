package lt.ocirama.labsystem.converters;

import lt.ocirama.labsystem.model.dto.Result;
import lt.ocirama.labsystem.model.entities.local.ResultEntity;
import org.springframework.stereotype.Component;

import java.util.List;

import static java.util.stream.Collectors.toList;
@Component
public class ResultConverter {
    public List<Result> convert(List<ResultEntity> results) {
        return results.stream()
                .map(this::convert)
                .collect(toList());
    }

    public Result convert(ResultEntity result) {
        if (result == null) {
            throw new IllegalArgumentException("Result is required");
        }
        return new Result(
                result.getId(),
                result.getOrder().getProtocolId(),
                result.getSample().getSampleId(),
                result.getTotalMoisture(),
                result.getGeneralMoisture(),
                result.getCalorificValue(),
                result.getAsh(),
                result.getDate()
        );
    }
}
