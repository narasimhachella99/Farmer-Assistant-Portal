package com.example.farmer.service.impl;

import com.example.farmer.model.Warning;
import com.example.farmer.repository.IWarningRepository;
import com.example.farmer.service.IWarningService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WarningService implements IWarningService {
    @Autowired
    private IWarningRepository warningRepository;

    @Override
    public List<Warning> all() {
        return warningRepository.findAll();
    }

    @Override
    public Warning getById(String id) {
        return warningRepository.findById(id).get();
    }

    @Override
    public Warning add(Warning user) {
        return warningRepository.save(user);
    }

    @Override
    public Warning update(Warning user) {
        return warningRepository.save(user);
    }

    @Override
    public void delete(String id) {
        warningRepository.deleteById(id);
    }
}
