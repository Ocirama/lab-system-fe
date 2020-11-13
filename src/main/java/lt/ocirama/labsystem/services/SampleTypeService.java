package lt.ocirama.labsystem.services;

import lt.ocirama.labsystem.converters.CustomerConverter;
import lt.ocirama.labsystem.converters.CustomerEntityConverter;
import lt.ocirama.labsystem.converters.SampleTypeConverter;
import lt.ocirama.labsystem.converters.SampleTypeEntityConverter;
import lt.ocirama.labsystem.model.dto.Customer;
import lt.ocirama.labsystem.model.dto.CustomerSave;
import lt.ocirama.labsystem.model.dto.SampleType;
import lt.ocirama.labsystem.model.dto.SampleTypeSave;
import lt.ocirama.labsystem.model.entities.CustomerEntity;
import lt.ocirama.labsystem.model.entities.SampleTypeEntity;
import lt.ocirama.labsystem.repositories.CustomerRepository;
import lt.ocirama.labsystem.repositories.SampleTypeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SampleTypeService {
    private final SampleTypeConverter sampleTypeConverter;
    private final SampleTypeEntityConverter sampleTypeEntityConverter;
    private final SampleTypeRepository sampleTypeRepository;

    public SampleTypeService(SampleTypeConverter sampleTypeConverter, SampleTypeEntityConverter sampleTypeEntityConverter, SampleTypeRepository sampleTypeRepository) {
        this.sampleTypeConverter = sampleTypeConverter;
        this.sampleTypeEntityConverter = sampleTypeEntityConverter;
        this.sampleTypeRepository = sampleTypeRepository;
    }

    public List<SampleType> getAll() {
        List<SampleTypeEntity> sampleTypes = sampleTypeRepository.findAll();

        return sampleTypeConverter.convert(sampleTypes);
    }

    public SampleType getCustomer(Integer id) {
        SampleTypeEntity sampleType = sampleTypeRepository.findOneById(id);

        return sampleTypeConverter.convert(sampleType);
    }

    public SampleType save(SampleTypeSave sampleType) {
        SampleTypeEntity sampleTypeEntity = sampleTypeEntityConverter.convert(sampleType);
        SampleTypeEntity result = sampleTypeRepository.save(sampleTypeEntity);

        return sampleTypeConverter.convert(result);
    }

    public void delete(String title) {
        sampleTypeRepository.deleteByTitle(title);
    }
}

