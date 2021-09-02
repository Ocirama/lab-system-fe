package lt.ocirama.labsystem.converters;

import lt.ocirama.labsystem.model.entities.local.SampleEntity;
import lt.ocirama.labsystem.model.dto.SampleSave;
import lt.ocirama.labsystem.repositories.local.OrderRepository;
import lt.ocirama.labsystem.repositories.local.SampleRepository;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.Calendar;
import java.util.Objects;

@Component
public class SampleEntityConverter {

    private final SampleRepository sampleRepository;
    private final OrderRepository order;

    public SampleEntityConverter(SampleRepository sampleRepository, OrderRepository order) {
        this.sampleRepository = sampleRepository;
        this.order = order;
    }

    LocalDate localDate = LocalDate.now();

    public SampleEntity convert(SampleSave sample) {
        SampleEntity result;

        if (Objects.isNull(sample.getId())) {
            result = new SampleEntity();
            result.setOrder(order.findByProtocolId(sample.getProtocolId(), Calendar.getInstance().get(Calendar.YEAR)));
            result.setSampleId(sample.getSampleId());
            result.setSampleWeight(sample.getSampleWeight());

        } else {
            result = sampleRepository.findOneById(sample.getId());
            result.setOrder(order.findByProtocolId(sample.getProtocolId(),Calendar.getInstance().get(Calendar.YEAR)));
            result.setSampleId(sample.getSampleId());
            result.setSampleWeight(sample.getSampleWeight());

        }
        return result;
    }
}
