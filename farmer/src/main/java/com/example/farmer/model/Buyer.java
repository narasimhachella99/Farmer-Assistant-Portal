package com.example.farmer.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document
@AllArgsConstructor @NoArgsConstructor
@Data @ToString
public class Buyer {
    @Id
    private String id;
    private String name;
    private String email;
    private String password;
    private String phoneNumber;
}
