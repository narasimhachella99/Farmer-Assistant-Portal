package com.example.farmer.repository;

import com.example.farmer.model.Warning;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IWarningRepository extends MongoRepository<Warning,String> {
}
