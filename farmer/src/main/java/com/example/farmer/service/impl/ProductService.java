package com.example.farmer.service.impl;

import com.example.farmer.model.Product;
import com.example.farmer.repository.IProductRepository;
import com.example.farmer.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;
    @Override
    public List<Product> all() {
        return productRepository.findAll();
    }

    @Override
    public Product getById(String id) {
        return productRepository.findById(id).get();
    }

    @Override
    public Product add(Product user) {
        return productRepository.save(user);
    }

    @Override
    public Product update(Product user) {
        return productRepository.save(user);
    }

    @Override
    public void delete(String id) {
        productRepository.deleteById(id);
    }
}
