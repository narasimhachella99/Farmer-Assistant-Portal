package com.example.farmer.controller;

import com.example.farmer.model.Expert;
import com.example.farmer.service.IExpertService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1")
public class ExpertController {
    @Autowired
    private IExpertService expertService;

    @PostMapping("/expertRegister")
    private ResponseEntity<?> register(@RequestBody Expert user) {
        HashMap<String, String> res = new HashMap<>();
        try {
            if (user.getEmail().equals("") && user.getName().equals("") && user.getPassword().equals("")) {
                res.put("msg", "Please fill all the fields");
                return new ResponseEntity<>(res, HttpStatus.BAD_REQUEST);
            }
            boolean checkUser = expertService.getByEmail(user.getEmail()) != null;
            if (checkUser) {
                res.put("msg", "User already exists");
                return new ResponseEntity<>(res, HttpStatus.BAD_REQUEST);
            } else {
                expertService.add(user);
                res.put("msg","User added successfully");
                return new ResponseEntity<>(res, HttpStatus.OK);
            }
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/expertLogin")
    private ResponseEntity<?> login(@RequestBody Expert user) {
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
            Expert checkUser = expertService.getByEmailAndPassword(user.getEmail(), user.getPassword());
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
    @GetMapping("/expertByEmail/{email}")
    private ResponseEntity<?> getByEmail(@PathVariable String email) {
        HashMap<String, String> res = new HashMap<>();
        try {
            return new ResponseEntity<>(expertService.getByEmail(email), HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/expert")
    private ResponseEntity<?> allUsers() {
        HashMap<String, String> res = new HashMap<>();
        try {
            return new ResponseEntity<>(expertService.all(), HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/expert/{id}")
    private ResponseEntity<?> getById(@PathVariable String id) {
        HashMap<String, String> res = new HashMap<>();
        try {
            return new ResponseEntity<>(expertService.getById(id), HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PatchMapping("/expert/{id}")
    private ResponseEntity<?> update(@PathVariable String id,@RequestBody Expert expert) {
        HashMap<String, String> res = new HashMap<>();
        try {
            Expert expert1=expertService.getById(id);
            expert1.setEmail(expert.getEmail());
            expert1.setName(expert.getName());
            expert1.setPassword(expert.getPassword());
            expert1.setPhoneNumber(expert.getPhoneNumber());
            return new ResponseEntity<>(expertService.update(expert1), HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/expert/{id}")
    private ResponseEntity<?> delete(@PathVariable String id) {
        HashMap<String, String> res = new HashMap<>();
        try {
            expertService.delete(id);
            res.put("msg","expert deleted successfully");
            return new ResponseEntity<>(res, HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
