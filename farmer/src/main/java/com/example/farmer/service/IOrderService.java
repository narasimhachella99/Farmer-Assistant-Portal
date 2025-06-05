package com.example.farmer.service;

import com.example.farmer.model.Order;
import com.example.farmer.model.Product;

import java.util.List;

public interface IOrderService {
    List<Order> all();
    Order getById(String id);
    Order add(Order user);
    Order update(Order user);
    void delete(String id);
}
