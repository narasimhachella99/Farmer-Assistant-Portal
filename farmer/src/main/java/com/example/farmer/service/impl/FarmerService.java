package com.example.farmer.service.impl;

import com.example.farmer.model.Farmer;
import com.example.farmer.repository.IFarmerRepository;
import com.example.farmer.service.IFarmerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FarmerService implements IFarmerService {
    @Autowired
    private IFarmerRepository farmerRepository;
    @Override
    public List<Farmer> all() {
        return farmerRepository.findAll();
    }

    @Override
    public Farmer getById(String id) {
        return farmerRepository.findById(id).get();
    }

    @Override
    public Farmer add(Farmer user) {
        return farmerRepository.save(user);
    }

    @Override
    public Farmer update(Farmer user) {
        return farmerRepository.save(user);
    }

    @Override
    public void delete(String id) {
        farmerRepository.deleteById(id);
    }

    @Override
    public Farmer getByEmailAndPassword(String email, String password) {
        return farmerRepository.findByEmailAndPassword(email, password);
    }

    @Override
    public Farmer getByEmail(String email) {
        return farmerRepository.findByEmail(email);
    }
}
