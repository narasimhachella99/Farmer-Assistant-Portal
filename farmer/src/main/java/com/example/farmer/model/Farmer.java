package com.example.farmer.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@AllArgsConstructor
@Data @ToString
public class Farmer {
    @Id
    private String id;
    private String name;
    private String email;
    private String password;
    private String phoneNumber;
}
