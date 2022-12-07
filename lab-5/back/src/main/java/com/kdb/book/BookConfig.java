package com.kdb.book;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class BookConfig {

    @Bean
    CommandLineRunner commandLineRunner(BookRepository repository) {
        return args -> {
            Book harryPotter = new Book(
                    1,
              "Harry Potter",
              300,
              160,
              "https://cdn.pixabay.com/photo/2015/11/19/21/11/book-1052014__340.jpg"
            );
            Book warAndPeace = new Book(
                    2,
                    "war and peace",
                    2500,
                    1500,
                    "https://cdn.pixabay.com/photo/2014/08/16/18/17/book-419589__340.jpg"
            );
            Book bible = new Book(
                    3,
                    "bible",
                    1500,
                    1000,
                    "https://cdn.pixabay.com/photo/2018/07/01/20/01/music-3510326__340.jpg"
            );
            repository.saveAll(
                    List.of(harryPotter, warAndPeace, bible)
            );
        };
    }
}
