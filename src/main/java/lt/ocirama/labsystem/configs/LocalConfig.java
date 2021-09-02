package lt.ocirama.labsystem.configs;

import lt.ocirama.labsystem.model.entities.local.*;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

@Configuration
@Primary
@EnableJpaRepositories(entityManagerFactoryRef = "localEntityManager",
        transactionManagerRef = "localTransactionManager",
        basePackages = {"lt.ocirama.labsystem.repositories.local"})
public class LocalConfig {
    @Bean("localDataSourceProperties")
    @Primary
    @ConfigurationProperties("app.spring.datasource")
    public DataSourceProperties localDataSourceProperties() {
        return new DataSourceProperties();
    }


    @Bean(name = "localDataSource")
    @Primary
    public DataSource localDataSource(@Qualifier("localDataSourceProperties") DataSourceProperties localDataSourceProperties) {
        return localDataSourceProperties.initializeDataSourceBuilder().build();
    }

    @Bean(name = "localEntityManager")
    @Primary
    public LocalContainerEntityManagerFactoryBean localEntityManagerFactory(
            EntityManagerFactoryBuilder builder) {
        return builder
                .dataSource(localDataSource(localDataSourceProperties()))
                .packages(AshEntity.class, CustomerEntity.class, GeneralMoistureEntity.class, OrderEntity.class,
                        ReferenceTrayEntity.class, ResultEntity.class, SampleEntity.class,
                        SampleTypeEntity.class, TotalMoistureEntity.class, TrayEntity.class, TrayWeightEntity.class, UserEntity.class)
                .persistenceUnit("local")
                .build();
    }

    @Bean(name = "localTransactionManager")
    public JpaTransactionManager transactionManager(@Qualifier("localEntityManager") EntityManagerFactory localEntityManager) {
        JpaTransactionManager transactionManager = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(localEntityManager);

        return transactionManager;
    }
}
