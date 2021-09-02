package lt.ocirama.labsystem.model.entities.litesko;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@MappedSuperclass
public abstract class AbstractEntity {

    private static final int ODD_PRIME = 31;

    @Id
    @Column(name = "id", unique = true, nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Override
    public int hashCode() {
        return getId() == null ? 0 : ODD_PRIME * getId().hashCode();
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (getId() == null || obj == null || !(getClass().equals(obj.getClass()))) {
            return false;
        }
        return getId().equals(((AbstractEntity) obj).getId());
    }
}
