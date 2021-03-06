package lt.ocirama.labsystem.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
public class Sample {

    private Integer id;
    private String protocolId;
    private String testType;
    private String sampleId;
    private Double sampleWeight;
    private Date date;
}
