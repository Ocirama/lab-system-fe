package lt.ocirama.labsystem.controllers;

import lt.ocirama.labsystem.model.dto.Customer;
import lt.ocirama.labsystem.model.dto.CustomerSave;
import lt.ocirama.labsystem.model.dto.SampleType;
import lt.ocirama.labsystem.model.dto.SampleTypeSave;
import lt.ocirama.labsystem.services.CustomerService;
import lt.ocirama.labsystem.services.SampleTypeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/lei/st")
public class SampleTypeController {

    private final SampleTypeService sampleTypeService;

    public SampleTypeController(SampleTypeService sampleTypeService) {
        this.sampleTypeService = sampleTypeService;
    }

    @GetMapping
    public List<SampleType> getAll() {
        return sampleTypeService.getAll();
    }

    @GetMapping("/{id}")
    public SampleType getSampleType(@PathVariable Integer id) {
        return sampleTypeService.getCustomer(id);
    }

    @PostMapping
    public SampleType save(@RequestBody SampleTypeSave sampleType) {
        return sampleTypeService.save(sampleType);
    }

    @DeleteMapping("/{title}")
    public ResponseEntity<Void> delete(@PathVariable String title) {
        sampleTypeService.delete(title);

        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
