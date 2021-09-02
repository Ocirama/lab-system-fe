package lt.ocirama.labsystem.controllers;

import lt.ocirama.labsystem.model.dto.Result;
import lt.ocirama.labsystem.model.dto.ResultSave;
import lt.ocirama.labsystem.model.dto.Sample;
import lt.ocirama.labsystem.model.dto.SampleSave;
import lt.ocirama.labsystem.services.ResultService;
import lt.ocirama.labsystem.services.SampleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/lei/results")
public class ResultController {
    private final ResultService resultService;

    public ResultController(ResultService resultService) {
        this.resultService = resultService;
    }

    @GetMapping
    public List<Result> getAll() {
        return resultService.getAll();
    }

    @GetMapping("/{id}")
    public Result getResult(@PathVariable Integer id) {
        return resultService.getResult(id);
    }

    @PostMapping
    public Result save(@RequestBody ResultSave result) {
        return resultService.save(result);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        resultService.delete(id);

        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
