package lt.ocirama.labsystem.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SampleSave {
        private Integer id;
        private String sampleId;
        private Double weight;
        //private LocalDate date;
    }

