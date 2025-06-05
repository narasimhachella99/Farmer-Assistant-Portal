package com.example.farmer.service;

import com.example.farmer.model.Farmer;

import java.util.List;

public interface IFarmerService {

    List<Farmer> all();
    Farmer getById(String id);
    Farmer add(Farmer user);
    Farmer update(Farmer user);
    void delete(String id);
    Farmer getByEmailAndPassword(String email,String password);

    Farmer getByEmail(String email);
}
