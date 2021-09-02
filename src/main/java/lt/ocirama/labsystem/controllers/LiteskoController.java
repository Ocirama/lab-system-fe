package lt.ocirama.labsystem.controllers;

import lt.ocirama.labsystem.model.dto.Litesko;
import lt.ocirama.labsystem.model.dto.LiteskoSave;
import lt.ocirama.labsystem.services.LiteskoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/lei/litesko")
public class LiteskoController {
    private final LiteskoService liteskoService;

    public LiteskoController(LiteskoService liteskoService) {
        this.liteskoService = liteskoService;
    }

    @GetMapping
    public List<Litesko> getAll() {
        return liteskoService.getAll();
    }

    @GetMapping("/{id}")
    public Litesko getResult(@PathVariable Integer id) {
        return liteskoService.getResult(id);
    }

    @PostMapping
    public Litesko save(@RequestBody LiteskoSave result) {
        return liteskoService.save(result);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        liteskoService.delete(id);

        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
