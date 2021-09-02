package lt.ocirama.labsystem.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class GeneralMoistureSave {

    private Integer id;
    private String protocolId;
    private  String sampleId;
    private String trayId;
    private String jarId;
    private Double jarWeight;
    private Double jarAndSampleWeightBefore;
    private Double jarAndSampleWeightAfter;
    private Double jarAndSampleWeightAfterPlus;
    private String date;
}
