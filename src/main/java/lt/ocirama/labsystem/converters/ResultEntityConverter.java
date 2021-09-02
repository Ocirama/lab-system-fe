package lt.ocirama.labsystem.converters;

import lt.ocirama.labsystem.model.dto.ResultSave;
import lt.ocirama.labsystem.model.entities.local.ResultEntity;
import lt.ocirama.labsystem.repositories.local.OrderRepository;
import lt.ocirama.labsystem.repositories.local.ResultRepository;
import lt.ocirama.labsystem.repositories.local.SampleRepository;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.Calendar;
import java.util.Objects;

@Component
public class ResultEntityConverter {
    private final ResultRepository resultRepository;
    private final OrderRepository orderRepository;
    private final SampleRepository sampleRepository;

    public ResultEntityConverter(ResultRepository resultRepository, OrderRepository orderRepository, SampleRepository sampleRepository) {
        this.resultRepository = resultRepository;
        this.orderRepository = orderRepository;
        this.sampleRepository = sampleRepository;
    }


    LocalDate localDate = LocalDate.now();

    public ResultEntity convert(ResultSave result) {
        ResultEntity res;

        if (Objects.isNull(result.getId())) {
            res = new ResultEntity();
            Calendar cal = Calendar.getInstance();
            cal.setTime(result.getDate());
            System.out.println(result.getProtocolId());
            System.out.println(cal.get(Calendar.YEAR));
            res.setOrder(orderRepository.findByProtocolId(result.getProtocolId(),cal.get(Calendar.YEAR)));
            res.setSample(sampleRepository.findByProtocolIdAndSampleId(orderRepository.findByProtocolId(result.getProtocolId(),cal.get(Calendar.YEAR)),result.getSampleId()));
            res.setTotalMoisture(result.getTotalMoisture());
            res.setGeneralMoisture(result.getGeneralMoisture());
            res.setCalorificValue(result.getCalorificValue());
            res.setAsh(result.getAsh());
            res.setDate(result.getDate());

        } else {
            Calendar cal = Calendar.getInstance();
            res = resultRepository.findOneById(result.getId());
            res.setOrder(orderRepository.findByProtocolId(result.getProtocolId(), cal.get(Calendar.YEAR)));
            res.setSample(sampleRepository.findByProtocolIdAndSampleId(orderRepository.findByProtocolId(result.getProtocolId(),cal.get(Calendar.YEAR)),result.getSampleId()));
            res.setTotalMoisture(result.getTotalMoisture());
            res.setGeneralMoisture(result.getGeneralMoisture());
            res.setCalorificValue(result.getCalorificValue());
            res.setAsh(result.getAsh());
            res.setDate(result.getDate());


        }
        return res;
    }
}
