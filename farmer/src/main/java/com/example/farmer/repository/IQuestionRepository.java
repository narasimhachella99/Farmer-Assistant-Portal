package com.example.farmer.repository;

import com.example.farmer.model.Question;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IQuestionRepository extends MongoRepository<Question,String> {
}
