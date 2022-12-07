package com.kdb.book;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class BookService {

    private final BookRepository bookRepository;

    @Autowired
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public void addNewBook(Book book) {
        Optional<Book> bookByName = bookRepository
                .findBookByName(book.getName());
            if (bookByName.isPresent()){
                throw new IllegalStateException("name exists");
            }
        bookRepository.save(book);
     }

    public void deleteBook (Integer bookId) {
        boolean exists = bookRepository.existsById(bookId);
        if (!exists) {
            throw new IllegalStateException("Book with id"+ bookId + "does not exists");
        }
        bookRepository.deleteById(bookId);
    }

    @Transactional
    public void updateBook (Integer bookId,
                            String name,
                            Integer pages,
                            Integer price,
                            String img) {
        Book book = bookRepository.findById(bookId)
                .orElseThrow(() -> new IllegalStateException("Book with id"+ bookId + "does not exists"));

        if (name != null &&
                name.length() > 0 &&
                !Objects.equals(book.getName(), name)) {
            book.setName(name);
        }

        if (pages != null &&
                pages > 0 &&
                !Objects.equals(book.getPages(), pages)) {
            book.setPages(pages);
        }

        if (price != null &&
                price > 0 &&
                !Objects.equals(book.getPrice(), price)) {
            book.setPrice(price);
        }
        if (img != null &&
                img.length() > 0 &&
                !Objects.equals(book.getImg(), img)) {
            book.setImg(img);
        }
    }
}

