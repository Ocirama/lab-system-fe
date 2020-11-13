package lt.ocirama.labsystem.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
public class GeneralMoisture {
    private Integer id;
    private String protocolId;
    private String sampleId;
    private String trayId;
    private String jarId;
    private Double jarWeight;
    private Double jarAndSampleWeightBefore;
    private Double jarAndSampleWeightAfter;
    private Double jarAndSampleWeightAfterPlus;
    private Date date;
}
