package com.tp.api.Controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.tp.api.Entities.Author;
import com.tp.api.Services.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Component
public class AuthorsController {
    @Autowired
    private AuthorService authorService;

    @GetMapping("/authors")
    public String findAll() {
        List<Author> authors = authorService.findAll();
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        return gson.toJson(authors);
    }

    @PostMapping("/authors")
    public String insertOne(@RequestBody Author author) {
        return authorService.save(author).toJson();
    }

    @DeleteMapping("/authors/{id}")
    public String deleteOne(@PathVariable(value="id") Long id) {
        authorService.deleteOne(id);
        return "{\"status\": \"Success\"}";
    }
}
