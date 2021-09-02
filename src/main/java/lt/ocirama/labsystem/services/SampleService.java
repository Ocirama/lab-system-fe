package lt.ocirama.labsystem.services;

import java.util.Calendar;
import java.util.List;
import lt.ocirama.labsystem.converters.SampleConverter;
import lt.ocirama.labsystem.converters.SampleEntityConverter;
import lt.ocirama.labsystem.model.dto.Sample;
import lt.ocirama.labsystem.model.dto.SampleSave;
import lt.ocirama.labsystem.model.entities.local.SampleEntity;
import lt.ocirama.labsystem.repositories.local.SampleRepository;
import org.springframework.stereotype.Service;

@Service
public class SampleService {

    private final SampleConverter sampleConverter;
    private final SampleEntityConverter sampleEntityConverter;
    private final SampleRepository sampleRepository;

    public SampleService(SampleConverter sampleConverter, SampleEntityConverter sampleEntityConverter, SampleRepository sampleRepository) {
        this.sampleConverter = sampleConverter;
        this.sampleEntityConverter = sampleEntityConverter;
        this.sampleRepository = sampleRepository;
    }


    public List<Sample> getAll() {
        List<SampleEntity> samples = sampleRepository.findAll();

        return sampleConverter.convert(samples);
    }

    public Sample getSample(Integer id) {
        SampleEntity sample = sampleRepository.findOneById(id);

        return sampleConverter.convert(sample);
    }

    public Sample save(SampleSave sample) {
        SampleEntity sampleEntity = sampleEntityConverter.convert(sample);
        SampleEntity result = sampleRepository.save(sampleEntity);

        return sampleConverter.convert(result);
    }

    public void delete(Integer id) {
        sampleRepository.deleteById(id);
    }

    public List<Sample> getAllByProtocol(String protocolId) {

            int year = Calendar.getInstance().get(Calendar.YEAR);

            List<SampleEntity> samples = sampleRepository.findAllByProtocol(protocolId, year);
            if (samples.size() != 0){
                return sampleConverter.convert(samples);
            }else {
                year = Calendar.getInstance().get(Calendar.YEAR) - 1;
                samples = sampleRepository.findAllByProtocol(protocolId, year);
                return sampleConverter.convert(samples);
            }
    }
}
