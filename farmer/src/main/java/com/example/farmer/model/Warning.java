package com.example.farmer.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@AllArgsConstructor
@NoArgsConstructor @ToString @Data
public class Warning {
    @Id
    private String id;
    private String warning;
    private String expertEmail;
}
