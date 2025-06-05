package com.example.farmer.service;

import com.example.farmer.model.Product;
import com.example.farmer.model.Question;

import java.util.List;

public interface IQuestionService {
    List<Question> all();
    Question getById(String id);
    Question add(Question user);
    Question update(Question user);
    void delete(String id);
}
