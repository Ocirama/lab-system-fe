package lt.ocirama.labsystem.repositories.local;


import lt.ocirama.labsystem.model.entities.local.UserEntity;
import org.springframework.data.repository.Repository;

public interface UserRepository extends Repository<UserEntity, Integer> {

    UserEntity findOneByEmail(String email);
}
