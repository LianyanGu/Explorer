package com.explorer.explorerProject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class ExplorerProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExplorerProjectApplication.class, args);
	}
}
