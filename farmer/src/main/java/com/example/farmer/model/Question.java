package com.example.farmer.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@AllArgsConstructor @Data
@ToString
public class Question {
    @Id
    private String id;
    private String question;
    private String answer;
    private String farmerEmail;
}
