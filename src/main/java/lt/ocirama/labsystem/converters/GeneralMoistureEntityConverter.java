package lt.ocirama.labsystem.converters;

import lt.ocirama.labsystem.model.dto.GeneralMoistureSave;
import lt.ocirama.labsystem.model.entities.local.GeneralMoistureEntity;
import lt.ocirama.labsystem.model.entities.local.TrayEntity;
import lt.ocirama.labsystem.repositories.local.GeneralMoistureRepository;
import lt.ocirama.labsystem.repositories.local.OrderRepository;
import lt.ocirama.labsystem.repositories.local.SampleRepository;
import lt.ocirama.labsystem.repositories.local.TrayRepository;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Objects;

@Component
public class GeneralMoistureEntityConverter {
    public GeneralMoistureEntityConverter(GeneralMoistureRepository generalMoistureRepository, OrderRepository order, SampleRepository sample, TrayRepository tray) {
        this.generalMoistureRepository = generalMoistureRepository;
        this.order = order;
        this.sample = sample;
        this.tray = tray;
    }

    private final GeneralMoistureRepository generalMoistureRepository;
    private final OrderRepository order;
    private final SampleRepository sample;
    private final TrayRepository tray;


    LocalDate localDate = LocalDate.now();


    public GeneralMoistureEntity convert(GeneralMoistureSave generalMoistureSave) {
        GeneralMoistureEntity result;
        TrayEntity newTray;
        List<GeneralMoistureEntity> gmList;
        if (Objects.isNull(generalMoistureSave.getId())) {
            gmList = new ArrayList<>();
            newTray = new TrayEntity();
            newTray.setTrayId(generalMoistureSave.getTrayId());

            newTray.setSample(sample.findAllByProtocol(generalMoistureSave.getProtocolId(), Calendar.getInstance().get(Calendar.YEAR)).stream()
                    .filter(x -> generalMoistureSave.getSampleId().equals(x.getSampleId()))
                    .findFirst()
                    .orElse(null));


            result = new GeneralMoistureEntity();
            result.setTray(newTray);
            result.setJarId(generalMoistureSave.getJarId());
            result.setJarWeight(generalMoistureSave.getJarWeight());
            result.setJarAndSampleWeightBefore(generalMoistureSave.getJarAndSampleWeightBefore());
            gmList.add(result);
            newTray.setGeneralMoistureEntities(gmList);
            //result.setDate(java.sql.Date.valueOf(order.getDate()));
        } else {
            result = generalMoistureRepository.findOneById(generalMoistureSave.getId());
            result.setJarWeight(generalMoistureSave.getJarWeight());
            result.setJarAndSampleWeightBefore(generalMoistureSave.getJarAndSampleWeightBefore());
            //result.setDate(java.sql.Date.valueOf(order.getDate()));
        }

        return result;
    }


    public GeneralMoistureEntity convert2(GeneralMoistureSave generalMoistureSave) {
        GeneralMoistureEntity result = new GeneralMoistureEntity();
        TrayEntity newTray;


        newTray = generalMoistureRepository.findByTrayAndDate(generalMoistureSave.getTrayId(), DateConverter.dateInput(generalMoistureSave.getDate()));
        List<GeneralMoistureEntity> as = newTray.getGeneralMoistureEntities();
        for (GeneralMoistureEntity a : as) {
            a.setJarAndSampleWeightAfter(generalMoistureSave.getJarAndSampleWeightAfter());
            generalMoistureSave.setJarAndSampleWeightAfterPlus(generalMoistureSave.getJarAndSampleWeightAfter() + DateConverter.getRandomNumberInRange(0.05, 0.30));
            a.setJarAndSampleWeightAfterPlus(generalMoistureSave.getJarAndSampleWeightAfterPlus());
            result = a;
        }

        return result;
    }
}
