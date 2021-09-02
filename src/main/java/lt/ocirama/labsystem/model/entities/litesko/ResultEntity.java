package lt.ocirama.labsystem.model.entities.litesko;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "results")
public class ResultEntity extends AbstractEntity {
    @Column(name = "sample_id", length = 50, nullable = false, unique = true)
    private String sampleId;
    @Column(name = "test_type", length = 50, nullable = false)
    private String testType;
    @Column(name = "date_of_receipt")
    private Date dateOfReceipt;
    @Column(name = "status_code", length = 1)
    private String statusCode;
    @Column(name = "notes", length = 250)
    private String notes;
    @Column(name = "start_date")
    private Date startDate;
    @Column(name = "end_date")
    private Date endDate;
    @Column(name = "total_moisture_Value")
    private Double totalMoistureValue;
    @Column(name = "lower_calorific_value")
    private Double lowerCalorificValue;
    @Column(name = "upper_calorific_value")
    private Double upperCalorificValue;
    @Column(name = "ash_value")
    private Double ashValue;


}
