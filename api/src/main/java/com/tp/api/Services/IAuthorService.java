package com.tp.api.Services;

import com.tp.api.Entities.Author;

import java.util.Optional;

public interface IAuthorService {
    Optional<Author> findById(Long id);
}
