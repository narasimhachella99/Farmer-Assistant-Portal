package com.example.farmer.service;

import com.example.farmer.model.Buyer;

import java.util.List;

public interface IBuyerService {
    List<Buyer> all();
    Buyer getById(String id);
    Buyer add(Buyer user);
    Buyer update(Buyer user);
    void delete(String id);
    Buyer getByEmailAndPassword(String email,String password);

    Buyer getByEmail(String email);
}
