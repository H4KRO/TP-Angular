package com.tp.api.Services;

import com.tp.api.Entities.Book;

import java.util.Optional;

public interface IBookService {
    Optional<Book> findById(Long id);
}
