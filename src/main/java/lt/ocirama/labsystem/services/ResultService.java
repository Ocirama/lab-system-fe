package lt.ocirama.labsystem.services;

import lt.ocirama.labsystem.converters.ResultConverter;
import lt.ocirama.labsystem.converters.ResultEntityConverter;
import lt.ocirama.labsystem.model.dto.Result;
import lt.ocirama.labsystem.model.dto.ResultSave;
import lt.ocirama.labsystem.model.entities.local.ResultEntity;
import lt.ocirama.labsystem.repositories.local.ResultRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ResultService {

    private final ResultConverter resultConverter;
    private final ResultEntityConverter resultEntityConverter;
    private final ResultRepository resultRepository;

    public ResultService(ResultConverter resultConverter, ResultEntityConverter resultEntityConverter, ResultRepository resultRepository) {
        this.resultConverter = resultConverter;
        this.resultEntityConverter = resultEntityConverter;
        this.resultRepository = resultRepository;
    }

    public List<Result> getAll() {
        List<ResultEntity> results = resultRepository.findAll();

        return resultConverter.convert(results);
    }

    public Result getResult(Integer id) {
        ResultEntity result = resultRepository.findOneById(id);

        return resultConverter.convert(result);
    }

    public Result save(ResultSave result) {
        ResultEntity resultEntity = resultEntityConverter.convert(result);
        ResultEntity res = resultRepository.save(resultEntity);

        return resultConverter.convert(res);
    }

    public void delete(Integer id) {
        resultRepository.deleteById(id);
    }

}
