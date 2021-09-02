package lt.ocirama.labsystem.configs;

import lt.ocirama.labsystem.model.entities.litesko.ResultEntity;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

@Configuration
@EnableJpaRepositories(entityManagerFactoryRef = "liteskoEntityManager",
        transactionManagerRef = "liteskoTransactionManager",
        basePackages = {"lt.ocirama.labsystem.repositories.litesko"})
public class LiteskoConfig {
    @Bean("liteskoDataSourceProperties")
    @ConfigurationProperties("app.spring.datasource2")
    public DataSourceProperties liteskoDataSourceProperties() {
        return new DataSourceProperties();
    }


    @Bean(name = "liteskoDataSource")
    public DataSource liteskoDataSource(@Qualifier("liteskoDataSourceProperties") DataSourceProperties liteskoDataSourceProperties) {
        return liteskoDataSourceProperties.initializeDataSourceBuilder().build();
    }

    @Bean(name = "liteskoEntityManager")
    public LocalContainerEntityManagerFactoryBean liteskoEntityManagerFactory(
            EntityManagerFactoryBuilder builder) {
        return builder
                .dataSource(liteskoDataSource(liteskoDataSourceProperties()))
                .packages(ResultEntity.class)
                .persistenceUnit("litesko")
                .build();
    }

    @Bean(name = "liteskoTransactionManager")
    public JpaTransactionManager transactionManager(@Qualifier("liteskoEntityManager") EntityManagerFactory liteskoEntityManager) {
        JpaTransactionManager transactionManager = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(liteskoEntityManager);

        return transactionManager;
    }
}

