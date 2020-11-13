package lt.ocirama.labsystem.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt.ocirama.labsystem.model.entities.SampleEntity;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AshSave {

    private Integer id;
    private String protocolId;
    private  String sampleId;
    private String trayId;
    private String dishId;
    private Double dishWeight;
    private Double dishAndSampleWeightBefore;
    private Double dishAndSampleWeightAfter;
    private String date;
}
