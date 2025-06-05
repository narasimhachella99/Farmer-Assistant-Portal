package com.example.farmer.service;

import com.example.farmer.model.Expert;

import java.util.List;

public interface IExpertService {

    List<Expert> all();
    Expert getById(String id);
    Expert add(Expert user);
    Expert update(Expert user);
    void delete(String id);
    Expert getByEmailAndPassword(String email,String password);

    Expert getByEmail(String email);
}
