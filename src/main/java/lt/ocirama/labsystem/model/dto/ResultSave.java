package lt.ocirama.labsystem.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ResultSave {

    private Integer id;
    private String protocolId;
    private String sampleId;
    private Double totalMoisture;
    private Double generalMoisture;
    private Double calorificValue;
    private Double ash;
    private Date date;

}
