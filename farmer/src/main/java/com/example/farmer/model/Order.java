package com.example.farmer.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document
@AllArgsConstructor @NoArgsConstructor
@Data @ToString @Builder
public class Order {
    @Id
    private String id;
    private String buyerEmail;
    private String productName;
    private String productType;
    private Integer quantity;
    private Integer price;
    private Integer total;
}
