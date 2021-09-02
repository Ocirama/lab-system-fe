package lt.ocirama.labsystem.model.entities.local;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity
@Table(name = "results")
public class ResultEntity extends AbstractEntity {
    @Column(name = "total_moisture", nullable = false)
    private double totalMoisture;
    @Column(name = "general_moisture", nullable = false)
    private double generalMoisture;
    @Column(name = "ash", nullable = false)
    private double ash;
    @Column(name = "calorific_value", nullable = false)
    private double calorificValue;

    @ManyToOne
    @JoinColumn(name = "sample_id")
    private SampleEntity sample;
    @ManyToOne
    @JoinColumn(name = "order_id")
    private OrderEntity order;


}
