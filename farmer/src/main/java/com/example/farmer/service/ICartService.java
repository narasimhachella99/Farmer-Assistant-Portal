package com.example.farmer.service;

import com.example.farmer.model.Cart;
import com.example.farmer.model.Product;

import java.util.List;

public interface ICartService {
    List<Cart> all();
    Cart getById(String id);
    Cart add(Cart user);
    Cart update(Cart user);
    void delete(String id);
}
