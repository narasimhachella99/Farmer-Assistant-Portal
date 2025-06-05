package com.example.farmer.service;

import com.example.farmer.model.Farmer;
import com.example.farmer.model.Product;

import java.util.List;

public interface IProductService {
    List<Product> all();
    Product getById(String id);
    Product add(Product user);
    Product update(Product user);
    void delete(String id);
}
