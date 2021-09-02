package lt.ocirama.labsystem.model.entities.local;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "customers")
public class CustomerEntity extends AbstractEntity {

    @Column(name = "title", length = 100)
    private String title;
}
