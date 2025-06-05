package com.example.farmer.repository;

import com.example.farmer.model.Farmer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IFarmerRepository extends MongoRepository<Farmer,String> {
    Farmer findByEmailAndPassword(String email,String password);
    Farmer findByEmail(String email);
    Farmer findByName(String name);
}
