package com.example.farmer.repository;

import com.example.farmer.model.Expert;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IExpertRepository extends MongoRepository<Expert,String> {

    Expert findByEmailAndPassword(String email,String password);
    Expert findByEmail(String email);
    Expert findByName(String name);
}
