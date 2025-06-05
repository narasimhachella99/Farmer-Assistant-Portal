package com.example.farmer.service.impl;

import com.example.farmer.model.Expert;
import com.example.farmer.repository.IExpertRepository;
import com.example.farmer.service.IExpertService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpertService implements IExpertService {
    @Autowired
    private IExpertRepository expertRepository;
    @Override
    public List<Expert> all() {
        return expertRepository.findAll();
    }

    @Override
    public Expert getById(String id) {
        return expertRepository.findById(id).get();
    }

    @Override
    public Expert add(Expert user) {
        return expertRepository.save(user);
    }

    @Override
    public Expert update(Expert user) {
        return expertRepository.save(user);
    }

    @Override
    public void delete(String id) {
        expertRepository.deleteById(id);
    }

    @Override
    public Expert getByEmailAndPassword(String email, String password) {
        return expertRepository.findByEmailAndPassword(email, password);
    }

    @Override
    public Expert getByEmail(String email) {
        return expertRepository.findByEmail(email);
    }
}
