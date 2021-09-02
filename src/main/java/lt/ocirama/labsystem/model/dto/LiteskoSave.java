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
public class LiteskoSave {
    private Integer id;
    private String sampleId;
    private String testType;
    private Date dateOfReceipt;
    private String statusCode;
    private String notes;
    private Date startDate;
    private Date endDate;
    private Double totalMoistureValue;
    private Double lowerCalorificValue;
    private Double upperCalorificValue;
    private Double ashValue;
}
