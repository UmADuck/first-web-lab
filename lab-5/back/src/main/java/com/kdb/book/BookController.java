package com.kdb.book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/book")
public class BookController {

    private final BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @CrossOrigin
    @GetMapping
    public List<Book> getAllBooks(){
         return bookService.getAllBooks();
    }

    @CrossOrigin
    @PostMapping(value = "/", consumes = {"application/json", "application/xml"})
    public void addNewBook(@RequestBody Book book) {
        bookService.addNewBook(book);
    }

    @CrossOrigin
    @DeleteMapping(path = "/{bookId}")
    public void deleteBook (@PathVariable("bookId") Integer bookId) {
        bookService.deleteBook(bookId);
    }

    @CrossOrigin
    @PutMapping(path = "/{bookId}", consumes = {"application/json", "application/xml"})
    public void updateBook(
            @PathVariable("bookId") Integer bookId,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) Integer pages,
            @RequestParam(required = false) Integer price,
            @RequestParam(required = false) String img
            ) {
        bookService.updateBook(bookId, name, pages, price, img);
    }
}
