package com.example.farmer.controller;

import com.example.farmer.model.Product;
import com.example.farmer.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1")
public class ProductController {
    @Autowired
    private IProductService productService;

    @GetMapping("/products")
    private ResponseEntity<?> allUsers() {
        HashMap<String, String> res = new HashMap<>();
        try {
            return new ResponseEntity<>(productService.all(), HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/products/{id}")
    private ResponseEntity<?> getById(@PathVariable String id) {
        HashMap<String, String> res = new HashMap<>();
        try {
            return new ResponseEntity<>(productService.getById(id), HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping("/products")
    private ResponseEntity<?> addProducts(@RequestBody Product product) {
        HashMap<String, String> res = new HashMap<>();
        try {
            return new ResponseEntity<>(productService.add(product), HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PatchMapping("/products/{id}")
    private ResponseEntity<?> addUser(@PathVariable String id,@RequestBody Product product1) {
        HashMap<String, String> res = new HashMap<>();
        try {
            Product product=productService.getById(id);
            product.setName(product1.getName());
            product.setType(product1.getType());
            product.setPrice(product1.getPrice());
            return new ResponseEntity<>(productService.update(product), HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/products/{id}")
    private ResponseEntity<?> deleteUser(@PathVariable String id) {
        HashMap<String, String> res = new HashMap<>();
        try {
            productService.delete(id);
            res.put("msg", "User deleted successfully");
            return new ResponseEntity<>(res, HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
