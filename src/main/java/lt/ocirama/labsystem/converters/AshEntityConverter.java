package lt.ocirama.labsystem.converters;

import lt.ocirama.labsystem.model.dto.AshSave;
import lt.ocirama.labsystem.model.dto.GeneralMoistureSave;
import lt.ocirama.labsystem.model.entities.AshEntity;
import lt.ocirama.labsystem.model.entities.GeneralMoistureEntity;
import lt.ocirama.labsystem.model.entities.TrayEntity;
import lt.ocirama.labsystem.repositories.*;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Objects;

@Component
public class AshEntityConverter {


    private final AshRepository ashRepository;
    private final OrderRepository order;
    private final SampleRepository sample;
    private final TrayRepository tray;

    public AshEntityConverter(AshRepository ashRepository, OrderRepository order, SampleRepository sample, TrayRepository tray) {
        this.ashRepository = ashRepository;
        this.order = order;
        this.sample = sample;
        this.tray = tray;
    }

    LocalDate localDate = LocalDate.now();


    public AshEntity convert(AshSave ashSave) {
        AshEntity result;
        TrayEntity newTray;
        List<AshEntity> gmList;
        if (Objects.isNull(ashSave.getId())) {
            gmList = new ArrayList<>();
            newTray = new TrayEntity();
            newTray.setTrayId(ashSave.getTrayId());

            newTray.setSample(sample.findAllByProtocol(ashSave.getProtocolId(), Calendar.getInstance().get(Calendar.YEAR)).stream()
                    .filter(x -> ashSave.getSampleId().equals(x.getSampleId()))
                    .findFirst()
                    .orElse(null));

            result = new AshEntity();
            result.setTray(newTray);
            result.setDishId(ashSave.getDishId());
            result.setDishWeight(ashSave.getDishWeight());
            result.setDishAndSampleWeightBefore(ashSave.getDishAndSampleWeightBefore());
            gmList.add(result);
            newTray.setAshEntities(gmList);
            //result.setDate(java.sql.Date.valueOf(order.getDate()));
        } else {
            result = ashRepository.findOneById(ashSave.getId());
            result.setDishWeight(ashSave.getDishWeight());
            result.setDishAndSampleWeightBefore(ashSave.getDishAndSampleWeightBefore());
            //result.setDate(java.sql.Date.valueOf(order.getDate()));
        }

        return result;


    }


    public AshEntity convert2(AshSave ashSave) {
        AshEntity result = new AshEntity();
        TrayEntity newTray;


        newTray = ashRepository.findByTrayAndDate(ashSave.getTrayId(), DateConverter.dateInput(ashSave.getDate()));
        List<AshEntity> as = newTray.getAshEntities();
        for (AshEntity a : as) {
            a.setDishAndSampleWeightAfter(ashSave.getDishAndSampleWeightAfter());
            result = a;
        }
        return result;
    }
}
