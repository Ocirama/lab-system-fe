package lt.ocirama.labsystem.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
@Getter
@Setter
@AllArgsConstructor
public class Result {
    private Integer id;
    private String protocolId;
    private String sampleId;
    private Double totalMoisture;
    private Double generalMoisture;
    private Double ash;
    private Double calorificValue;
    private Date date;
}
