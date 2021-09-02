package lt.ocirama.labsystem.controllers;

import lt.ocirama.labsystem.model.dto.*;
import lt.ocirama.labsystem.services.GeneralMoistureService;
import lt.ocirama.labsystem.services.TotalMoistureService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@CrossOrigin
@RestController
@RequestMapping("/lei/journals/gm")
public class GmJournalController {

    private final GeneralMoistureService generalMoistureService;

    public GmJournalController(GeneralMoistureService generalMoistureService) {
        this.generalMoistureService = generalMoistureService;
    }


    @GetMapping
    public List<GeneralMoisture> getAll() {
        return generalMoistureService.getAll();
    }

    @GetMapping("/{id}")
    public GeneralMoisture getGeneralMoisture(@PathVariable Integer id) {
        return generalMoistureService.getGeneralMoisture(id);
    }

    @PostMapping
    public GeneralMoisture save(@RequestBody GeneralMoistureSave generalMoistureSave) {
        return generalMoistureService.save(generalMoistureSave);
    }
    @PostMapping("/second")
    public GeneralMoisture save2(@RequestBody GeneralMoistureSave generalMoistureSave) {
        return generalMoistureService.save2(generalMoistureSave);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        generalMoistureService.delete(id);

        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
