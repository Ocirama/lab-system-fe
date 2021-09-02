package lt.ocirama.labsystem.services;

import lt.ocirama.labsystem.converters.GeneralMoistureConverter;
import lt.ocirama.labsystem.converters.GeneralMoistureEntityConverter;
import lt.ocirama.labsystem.model.dto.GeneralMoisture;
import lt.ocirama.labsystem.model.dto.GeneralMoistureSave;
import lt.ocirama.labsystem.model.entities.local.GeneralMoistureEntity;
import lt.ocirama.labsystem.repositories.local.GeneralMoistureRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GeneralMoistureService {
    private final GeneralMoistureConverter generalMoistureConverter;
    private final GeneralMoistureEntityConverter generalMoistureEntityConverter;
    private final GeneralMoistureRepository generalMoistureRepository;

    public GeneralMoistureService(GeneralMoistureConverter generalMoistureConverter, GeneralMoistureEntityConverter generalMoistureEntityConverter, GeneralMoistureRepository generalMoistureRepository) {
        this.generalMoistureConverter = generalMoistureConverter;
        this.generalMoistureEntityConverter = generalMoistureEntityConverter;
        this.generalMoistureRepository = generalMoistureRepository;
    }

    public List<GeneralMoisture> getAll() {
        List<GeneralMoistureEntity> generalMoistureEntities = generalMoistureRepository.findAll();

        return generalMoistureConverter.convert(generalMoistureEntities);
    }

    public GeneralMoisture getGeneralMoisture(Integer id) {
        GeneralMoistureEntity generalMoistureEntity = generalMoistureRepository.findOneById(id);

        return generalMoistureConverter.convert(generalMoistureEntity);
    }

    public GeneralMoisture save(GeneralMoistureSave generalMoistureSave) {
        GeneralMoistureEntity generalMoistureEntity = generalMoistureEntityConverter.convert(generalMoistureSave);
        GeneralMoistureEntity result = generalMoistureRepository.save(generalMoistureEntity);

        return generalMoistureConverter.convert(result);
    }

    public GeneralMoisture save2(GeneralMoistureSave generalMoistureSave) {
        GeneralMoistureEntity generalMoistureEntity = generalMoistureEntityConverter.convert2(generalMoistureSave);
        GeneralMoistureEntity result = generalMoistureRepository.save(generalMoistureEntity);

        return generalMoistureConverter.convert(result);
    }


    public void delete(Integer id) {
        generalMoistureRepository.deleteById(id);
    }
}
