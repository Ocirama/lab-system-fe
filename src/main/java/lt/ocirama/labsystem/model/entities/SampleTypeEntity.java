package lt.ocirama.labsystem.model.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Setter
@Getter
@Entity
@Table(name = "sample_types")
public class SampleTypeEntity extends AbstractEntity {

    @Column(name = "title", length = 100)
    private String title;
}
