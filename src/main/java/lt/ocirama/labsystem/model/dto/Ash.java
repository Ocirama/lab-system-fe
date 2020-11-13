package lt.ocirama.labsystem.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
public class Ash {
    private Integer id;
    private String protocolId;
    private String sampleId;
    private String trayId;
    private String dishId;
    private Double dishWeight;
    private Double dishAndSampleWeightBefore;
    private Double dishAndSampleWeightAfter;
    private Date date;
}
