package lt.ocirama.labsystem.converters;

import lt.ocirama.labsystem.model.dto.LiteskoSave;
import lt.ocirama.labsystem.model.entities.litesko.ResultEntity;
import lt.ocirama.labsystem.repositories.litesko.LiteskoRepository;
import org.springframework.stereotype.Component;

import java.util.Objects;

@Component
public class LiteskoEntityConverter {
    private final LiteskoRepository liteskoRepository;

    public LiteskoEntityConverter(LiteskoRepository liteskoRepository) {
        this.liteskoRepository = liteskoRepository;
    }

    public ResultEntity convert(LiteskoSave result) {
        ResultEntity res;

        if (Objects.isNull(result.getId())) {
            res = new ResultEntity();
            res.setSampleId(result.getSampleId());
            res.setTestType(result.getTestType());
            res.setDateOfReceipt(result.getDateOfReceipt());
            res.setStatusCode(result.getStatusCode());
            res.setNotes(result.getNotes());
            res.setStartDate(result.getStartDate());
            res.setEndDate(result.getEndDate());
            res.setTotalMoistureValue(result.getTotalMoistureValue());
            res.setLowerCalorificValue(result.getLowerCalorificValue());
            res.setUpperCalorificValue(result.getUpperCalorificValue());
            res.setAshValue(result.getAshValue());
        } else {
            res = liteskoRepository.findOneById(result.getId());
            res.setSampleId(result.getSampleId());
            res.setTestType(result.getTestType());
            res.setDateOfReceipt(result.getDateOfReceipt());
            res.setStatusCode(result.getStatusCode());
            res.setNotes(result.getNotes());
            res.setStartDate(result.getStartDate());
            res.setEndDate(result.getEndDate());
            res.setTotalMoistureValue(result.getTotalMoistureValue());
            res.setLowerCalorificValue(result.getLowerCalorificValue());
            res.setUpperCalorificValue(result.getUpperCalorificValue());
            res.setAshValue(result.getAshValue());
        }
        return res;
    }
}
