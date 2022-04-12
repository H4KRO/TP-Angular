package com.tp.api.Controllers;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.tp.api.Entities.Book;
import com.tp.api.Services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Component
public class BooksController {
    @Autowired
    private BookService bookService;

    @GetMapping("/books")
    public String findAll() {
        List<Book> book = bookService.findAll();
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        return gson.toJson(book);
    }

    @PostMapping("/books")
    public String insertOne(@RequestBody Book book) {
        return bookService.save(book).toJson();
    }

    @DeleteMapping("/books/{id}")
    public String deleteOne(@PathVariable(value="id") Long id) {
        bookService.deleteOne(id);
        return "{\"status\": \"Success\"}";
    }

    @PatchMapping("/books/{id}")
    public String updateOne(@PathVariable(value="id") Long id, @RequestBody Book book) {
        book.setId(id);
        return bookService.save(book).toJson();
    }
}
