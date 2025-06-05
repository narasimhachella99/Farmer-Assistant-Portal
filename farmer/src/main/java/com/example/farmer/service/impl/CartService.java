package com.example.farmer.service.impl;

import com.example.farmer.model.Cart;
import com.example.farmer.repository.ICartRepository;
import com.example.farmer.service.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService implements ICartService {
    @Autowired
    private ICartRepository cartRepository;
    @Override
    public List<Cart> all() {
        return cartRepository.findAll();
    }

    @Override
    public Cart getById(String id) {
        return cartRepository.findById(id).get();
    }

    @Override
    public Cart add(Cart user) {
        return cartRepository.save(user);
    }

    @Override
    public Cart update(Cart user) {
        return cartRepository.save(user);
    }

    @Override
    public void delete(String id) {
        cartRepository.deleteById(id);
    }
}
