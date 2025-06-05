package com.example.farmer.controller;

import com.example.farmer.model.Farmer;
import com.example.farmer.service.IFarmerService;
import com.example.farmer.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1")
public class FarmerController {
    @Autowired
    private IFarmerService farmerService;
    @Autowired
    private IOrderService orderService;

    @PostMapping("/farmerRegister")
    private ResponseEntity<?> register(@RequestBody Farmer user) {
        HashMap<String, String> res = new HashMap<>();
        try {
            if (user.getEmail().equals("") && user.getName().equals("") && user.getPassword().equals("")) {
                res.put("msg", "Please fill all the fields");
                return new ResponseEntity<>(res, HttpStatus.BAD_REQUEST);
            }
            boolean checkUser = farmerService.getByEmail(user.getEmail()) != null;
            if (checkUser) {
                res.put("msg", "User already exists");
                return new ResponseEntity<>(res, HttpStatus.BAD_REQUEST);
            } else {
                farmerService.add(user);
                res.put("msg","User added successfully");
                return new ResponseEntity<>(res, HttpStatus.OK);
            }
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/farmerLogin")
    private ResponseEntity<?> login(@RequestBody Farmer user) {
        HashMap<String, String> res = new HashMap<>();
        try {
            if (user.getEmail().equals("admin@gmail.com") && user.getPassword().equals("admin")) {
                res.put("msg", "Admin Login successfully");
                return new ResponseEntity<>(res, HttpStatus.OK);
            }

            if (user.getEmail().equals("") && user.getPassword().equals("")) {
                res.put("msg", "please fill all the fields");
                return new ResponseEntity<>(res, HttpStatus.BAD_REQUEST);
            }
            Farmer checkUser = farmerService.getByEmailAndPassword(user.getEmail(), user.getPassword());
            if (checkUser == null) {
                res.put("msg", "User not found");
                return new ResponseEntity<>(res, HttpStatus.BAD_REQUEST);
            } else {
                res.put("msg", "user login successfully");
                return new ResponseEntity<>(user, HttpStatus.OK);
            }
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/farmerOrders/{email}")
    private ResponseEntity<?> farmerOrders(@PathVariable String email){
        HashMap<String,String> res= new HashMap<>();
        try{
            return  ResponseEntity.ok(orderService.all().stream().filter(i->i.getBuyerEmail().equals(email)));
        }catch (Exception e){
            res.put("msg",e.getMessage());
            return   new ResponseEntity<>(res,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/farmerByEmail/{email}")
    private ResponseEntity<?> getByEmail(@PathVariable String email) {
        HashMap<String, String> res = new HashMap<>();
        try {
            return new ResponseEntity<>(farmerService.getByEmail(email), HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/farmer")
    private ResponseEntity<?> allUsers() {
        HashMap<String, String> res = new HashMap<>();
        try {
            return new ResponseEntity<>(farmerService.all(), HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/farmer/{id}")
    private ResponseEntity<?> getById(@PathVariable String id) {
        HashMap<String, String> res = new HashMap<>();
        try {
            return new ResponseEntity<>(farmerService.getById(id), HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PatchMapping("/farmer/{id}")
    private ResponseEntity<?> updateFarmer(@PathVariable String id,@RequestBody Farmer farmer) {
        HashMap<String, String> res = new HashMap<>();
        try {
            Farmer farmer1=farmerService.getById(id);
            farmer1.setName(farmer.getName());
            farmer1.setEmail(farmer.getEmail());
            farmer1.setPassword(farmer.getPassword());
            farmer1.setPhoneNumber(farmer1.getPhoneNumber());
            return new ResponseEntity<>(farmerService.update(farmer1), HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
