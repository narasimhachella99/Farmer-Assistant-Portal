package com.example.farmer.controller;

import com.example.farmer.model.Notification;

import com.example.farmer.service.INotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1")
public class NotificationController {
    @Autowired
    private INotificationService notificationService;


    @GetMapping("/notification")
    private ResponseEntity<?> allUsers() {
        HashMap<String, String> res = new HashMap<>();
        try {
            return new ResponseEntity<>(notificationService.all(), HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/notification/{id}")
    private ResponseEntity<?> getById(@PathVariable String id) {
        HashMap<String, String> res = new HashMap<>();
        try {
            return new ResponseEntity<>(notificationService.getById(id), HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PatchMapping("/notification/{id}")
    private ResponseEntity<?> update(@PathVariable String id, @RequestBody Notification question) {
        HashMap<String, String> res = new HashMap<>();
        try {
            Notification question1 = notificationService.getById(id);
            if(question.getType() ==null){
                question1.setType(question1.getType());
            }else{
                question1.setType(question.getType());
            }
            if(question.getSubject() ==null){
                question1.setSubject(question1.getSubject());
            }else {
                question1.setSubject(question.getSubject());
            }
            return new ResponseEntity<>(notificationService.update(question1), HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PostMapping("/notification")
    private ResponseEntity<?> addUser(@RequestBody Notification user) {
        HashMap<String, String> res = new HashMap<>();
        try {
            return new ResponseEntity<>(notificationService.add(user), HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @DeleteMapping("/notification/{id}")
    private ResponseEntity<?> deleteUser(@PathVariable String id) {
        HashMap<String, String> res = new HashMap<>();
        try {
            notificationService.delete(id);
            res.put("msg", " Deleted successfully");
            return new ResponseEntity<>(res, HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
