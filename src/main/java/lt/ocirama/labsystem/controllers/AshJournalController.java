package lt.ocirama.labsystem.controllers;

import lt.ocirama.labsystem.model.dto.*;
import lt.ocirama.labsystem.services.AshService;
import lt.ocirama.labsystem.services.GeneralMoistureService;
import lt.ocirama.labsystem.services.TotalMoistureService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/lei/journals/ash")
public class AshJournalController {

    private final AshService ashService;

    public AshJournalController(AshService ashService) {
        this.ashService = ashService;
    }

    @GetMapping
    public List<Ash> getAll() {
        return ashService.getAll();
    }

    @GetMapping("/{id}")
    public Ash getAsh(@PathVariable Integer id) {
        return ashService.getAsh(id);
    }

    @PostMapping
    public Ash save(@RequestBody AshSave ashSave) {
        return ashService.save(ashSave);
    }
    @PostMapping("/second")
    public Ash save2(@RequestBody AshSave ashSave) {
        return ashService.save2(ashSave);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        ashService.delete(id);

        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
