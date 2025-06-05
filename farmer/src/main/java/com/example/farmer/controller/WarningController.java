package com.example.farmer.controller;

import com.example.farmer.model.Question;
import com.example.farmer.model.Warning;
import com.example.farmer.service.IWarningService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1")
public class WarningController {
    @Autowired
    private IWarningService warningService;

    @GetMapping("/warnings/{email}")
    private ResponseEntity<?> allUsers(@PathVariable String email) {
        HashMap<String, String> res = new HashMap<>();
        try {
            return new ResponseEntity<>(warningService.all().stream().filter(i->i.getExpertEmail().equals(email)).toList(), HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PatchMapping("/warnings/{id}")
    private ResponseEntity<?> update(@PathVariable String id,@RequestBody Warning question) {
        HashMap<String, String> res = new HashMap<>();
        try {
            Warning question1=warningService.getById(id);
            question1.setWarning(question.getWarning());
            return new ResponseEntity<>(warningService.update(question1), HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PostMapping("/warnings")
    private ResponseEntity<?> addUser(@RequestBody Warning user) {
        HashMap<String, String> res = new HashMap<>();
        try {
            return new ResponseEntity<>(warningService.add(user), HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @DeleteMapping("/warnings/{id}")
    private ResponseEntity<?> deleteUser(@PathVariable String id) {
        HashMap<String, String> res = new HashMap<>();
        try {
            warningService.delete(id);
            res.put("msg", " Deleted successfully");
            return new ResponseEntity<>(res, HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
