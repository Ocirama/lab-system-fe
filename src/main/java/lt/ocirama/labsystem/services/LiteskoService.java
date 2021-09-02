package lt.ocirama.labsystem.services;

import lt.ocirama.labsystem.converters.LiteskoConverter;
import lt.ocirama.labsystem.converters.LiteskoEntityConverter;
import lt.ocirama.labsystem.model.dto.Litesko;
import lt.ocirama.labsystem.model.dto.LiteskoSave;
import lt.ocirama.labsystem.model.entities.litesko.ResultEntity;
import lt.ocirama.labsystem.repositories.litesko.LiteskoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LiteskoService {

    private final LiteskoConverter liteskoConverter;
    private final LiteskoEntityConverter liteskoEntityConverter;
    private final LiteskoRepository liteskoRepository;

    public LiteskoService(LiteskoConverter liteskoConverter, LiteskoEntityConverter liteskoConverter1, LiteskoRepository liteskoRepository) {
        this.liteskoConverter = liteskoConverter;
        this.liteskoEntityConverter = liteskoConverter1;
        this.liteskoRepository = liteskoRepository;
    }

    public List<Litesko> getAll() {
        List<ResultEntity> results = liteskoRepository.findAll();

        return liteskoConverter.convert(results);
    }

    public Litesko getResult(Integer id) {
        ResultEntity result = liteskoRepository.findOneById(id);

        return liteskoConverter.convert(result);
    }

    public Litesko save(LiteskoSave result) {
        ResultEntity resultEntity = liteskoEntityConverter.convert(result);
        ResultEntity res = liteskoRepository.save(resultEntity);

        return liteskoConverter.convert(res);
    }

    public void delete(Integer id) {
        liteskoRepository.deleteById(id);
    }
}
