package com.example.farmer.service.impl;

import com.example.farmer.model.Question;
import com.example.farmer.repository.IQuestionRepository;
import com.example.farmer.service.IQuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService implements IQuestionService {
    @Autowired
    private IQuestionRepository questionRepository;
    @Override
    public List<Question> all() {
        return questionRepository.findAll();
    }

    @Override
    public Question getById(String id) {
        return questionRepository.findById(id).get();
    }

    @Override
    public Question add(Question user) {
        return questionRepository.save(user);
    }

    @Override
    public Question update(Question user) {
        return questionRepository.save(user);
    }

    @Override
    public void delete(String id) {
        questionRepository.deleteById(id);
    }
}
