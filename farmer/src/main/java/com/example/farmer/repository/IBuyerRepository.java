package com.example.farmer.repository;

import com.example.farmer.model.Buyer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IBuyerRepository extends MongoRepository<Buyer,String> {
    Buyer findByEmailAndPassword(String email,String password);
    Buyer findByEmail(String email);
    Buyer findByName(String name);
}
