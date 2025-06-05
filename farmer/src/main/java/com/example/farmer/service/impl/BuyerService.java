package com.example.farmer.service.impl;

import com.example.farmer.model.Buyer;
import com.example.farmer.repository.IBuyerRepository;
import com.example.farmer.service.IBuyerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BuyerService implements IBuyerService {
    @Autowired
    private IBuyerRepository buyerRepository;
    @Override
    public List<Buyer> all() {
        return buyerRepository.findAll();
    }

    @Override
    public Buyer getById(String id) {
        return buyerRepository.findById(id).get();
    }

    @Override
    public Buyer add(Buyer user) {
        return buyerRepository.save(user);
    }

    @Override
    public Buyer update(Buyer user) {
        return buyerRepository.save(user);
    }

    @Override
    public void delete(String id) {
        buyerRepository.deleteById(id);
    }

    @Override
    public Buyer getByEmailAndPassword(String email, String password) {
        return buyerRepository.findByEmailAndPassword(email, password);
    }

    @Override
    public Buyer getByEmail(String email) {
        return buyerRepository.findByEmail(email);
    }
}
