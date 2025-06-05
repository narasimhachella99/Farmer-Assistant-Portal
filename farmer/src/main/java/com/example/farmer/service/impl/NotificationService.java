package com.example.farmer.service.impl;

import com.example.farmer.model.Notification;
import com.example.farmer.repository.INotificationRepository;
import com.example.farmer.service.INotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationService implements INotificationService {
    @Autowired
    private INotificationRepository notificationRepository;

    @Override
    public List<Notification> all() {
        return notificationRepository.findAll();
    }

    @Override
    public Notification getById(String id) {
        return notificationRepository.findById(id).get();
    }

    @Override
    public Notification add(Notification user) {
        return notificationRepository.save(user);
    }

    @Override
    public Notification update(Notification user) {
        return notificationRepository.save(user);
    }

    @Override
    public void delete(String id) {
            notificationRepository.deleteById(id);
    }
}
