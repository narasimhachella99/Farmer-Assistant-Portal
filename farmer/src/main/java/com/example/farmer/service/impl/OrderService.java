package com.example.farmer.service.impl;

import com.example.farmer.model.Order;
import com.example.farmer.repository.IOrderRepository;
import com.example.farmer.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService implements IOrderService {
    @Autowired
    private IOrderRepository orderRepository;
    @Override
    public List<Order> all() {
        return orderRepository.findAll();
    }

    @Override
    public Order getById(String id) {
        return orderRepository.findById(id).get();
    }

    @Override
    public Order add(Order user) {
        return orderRepository.save(user);
    }

    @Override
    public Order update(Order user) {
        return orderRepository.save(user);
    }

    @Override
    public void delete(String id) {
        orderRepository.deleteById(id);
    }
}
