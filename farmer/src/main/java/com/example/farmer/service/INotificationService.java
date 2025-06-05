package com.example.farmer.service;

import com.example.farmer.model.Notification;

import java.util.List;

public interface INotificationService {

    List<Notification> all();

    Notification getById(String id);

    Notification add(Notification user);

    Notification update(Notification user);

    void delete(String id);
}
