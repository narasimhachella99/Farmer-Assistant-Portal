package com.example.farmer.controller;

import com.example.farmer.model.Product;
import com.example.farmer.model.Question;
import com.example.farmer.service.IQuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1")
public class QuestionController {
    @Autowired
    private IQuestionService questionService;

    @GetMapping("/questions")
    private ResponseEntity<?> allUsers() {
        HashMap<String, String> res = new HashMap<>();
        try {
            return new ResponseEntity<>(questionService.all(), HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/questions/{id}")
    private ResponseEntity<?> getById(@PathVariable String id) {
        HashMap<String, String> res = new HashMap<>();
        try {
            return new ResponseEntity<>(questionService.getById(id), HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PatchMapping("/questions/{id}")
    private ResponseEntity<?> update(@PathVariable String id,@RequestBody Question question) {
        HashMap<String, String> res = new HashMap<>();
        try {
            Question question1=questionService.getById(id);
            question1.setAnswer(question.getAnswer());
            return new ResponseEntity<>(questionService.update(question1), HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PostMapping("/questions")
    private ResponseEntity<?> addUser(@RequestBody Question user) {
        HashMap<String, String> res = new HashMap<>();
        try {
            return new ResponseEntity<>(questionService.add(user), HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @DeleteMapping("/questions/{id}")
    private ResponseEntity<?> deleteUser(@PathVariable String id) {
        HashMap<String, String> res = new HashMap<>();
        try {
            questionService.delete(id);
            res.put("msg", "User deleted successfully");
            return new ResponseEntity<>(res, HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
