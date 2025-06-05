package com.example.farmer.service;

import com.example.farmer.model.Question;
import com.example.farmer.model.Warning;

import java.util.List;

public interface IWarningService {
    List<Warning> all();
    Warning getById(String id);
    Warning add(Warning user);
    Warning update(Warning user);
    void delete(String id);
}
