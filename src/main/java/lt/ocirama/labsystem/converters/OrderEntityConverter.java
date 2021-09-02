package lt.ocirama.labsystem.converters;

import lt.ocirama.labsystem.model.entities.local.OrderEntity;
import lt.ocirama.labsystem.model.dto.OrderSave;
import lt.ocirama.labsystem.repositories.local.OrderRepository;
import org.springframework.stereotype.Component;

import java.util.Objects;

@Component
public class OrderEntityConverter {
    private final OrderRepository orderRepository;

    public OrderEntityConverter(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }


    public OrderEntity convert(OrderSave order) {
        OrderEntity result;

        if (Objects.isNull(order.getId())) {
            result = new OrderEntity();
            result.setProtocolId(order.getProtocolId());
            result.setCustomer(order.getCustomer());
            result.setTest(order.getTest());
            result.setSampleType(order.getSampleType());
            result.setOrderAmount(order.getOrderAmount());
            result.setYear(order.getYear());
        } else {
            result = orderRepository.findOneById(order.getId());
            result.setProtocolId(order.getProtocolId());
            result.setCustomer(order.getCustomer());
            result.setTest(order.getTest());
            result.setSampleType(order.getSampleType());
            result.setOrderAmount(order.getOrderAmount());
            result.setYear(order.getYear());
        }

        return result;
    }
}
