package com.example.farmer.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@AllArgsConstructor @Data
@ToString
public class Product {
    @Id
    private String id;
    private String name;
    private String type;
    private Integer price;
    private String farmerEmail;
}
