package com.example.farmer.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
@Data
@AllArgsConstructor
@NoArgsConstructor @Builder @ToString
@Document
public class Notification {
    @Id
    private String id;
    private String type;
    private String subject;
    private LocalDate date=LocalDate.now();
}
