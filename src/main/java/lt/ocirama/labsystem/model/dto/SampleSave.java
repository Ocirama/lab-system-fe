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
public class SampleSave {

    private Integer id;
    private String protocolId;
    private String sampleId;
    private Double sampleWeight;
    private Date date;
}

