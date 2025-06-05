package com.example.farmer.repository;

import com.example.farmer.model.Cart;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICartRepository extends MongoRepository<Cart,String> {
}
