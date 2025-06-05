package com.example.farmer.controller;

import com.example.farmer.model.*;
import com.example.farmer.service.IBuyerService;
import com.example.farmer.service.ICartService;
import com.example.farmer.service.IOrderService;
import com.example.farmer.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1")
public class BuyerController {
    @Autowired
    private IBuyerService buyerService;
    @Autowired
    private ICartService cartService;
    @Autowired
    private IProductService productService;
    @Autowired
    private IOrderService orderService;

//    @GetMapping("/orders")
//    private ResponseEntity<?> allOrders(){
//        HashMap<String,String> res= new HashMap<>();
//        try{
//            return  ResponseEntity.ok(orderService.)
//        }catch (Exception e){
//            res.put("msg", e.getMessage());
//            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
//
    @GetMapping("/orders/{email}")
    private ResponseEntity<?> orders(@PathVariable String email){
        HashMap<String,String> res= new HashMap<>();
        try{
            return  new ResponseEntity<>(orderService.all().stream().filter(i->i.getBuyerEmail().equals(email)).toList(),HttpStatus.OK);
        }catch (Exception e){
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/checkout/{email}")
    private ResponseEntity<?> checkout(@PathVariable String email) {
        HashMap<String, String> res = new HashMap<>();
        try {
            Buyer buyer = buyerService.getByEmail(email);
            Integer total=0;
            List<Cart> cartList=cartService.all().stream().filter(i->i.getBuyerEmail().equals(email)).toList();
            for(Cart cart:cartList){
                int n=cart.getTotal();
                total=total +n;
                Order order= Order.builder()
                        .buyerEmail(cart.getBuyerEmail())
                        .quantity(cart.getQuantity())
                        .price(cart.getPrice())
                        .productType(cart.getProductType())
                        .total(n)
                        .productName(cart.getProductName())
                        .build();

                orderService.add(order);
            }
            return  new ResponseEntity<>(total,HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/addQuantity/{id}")
    private ResponseEntity<?> addQuantity(@PathVariable String id, @RequestBody Cart cart) {
        HashMap<String, String> res = new HashMap<>();
        try {
            Cart cart1 = cartService.getById(id);
            cart1.setQuantity(cart.getQuantity());
            cart1.setTotal(cart.getQuantity() * cart1.getPrice());
            cartService.update(cart1);
            return new ResponseEntity<>(cart1, HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/cart/{email}")
    private ResponseEntity<?> cart(@PathVariable String email) {
        HashMap<String, String> res = new HashMap<>();
        try {
            Buyer buyer = buyerService.getByEmail(email);
            List<Cart> cartList = cartService.all().stream().filter(i -> i.getBuyerEmail().equals(email)).toList();
            return new ResponseEntity<>(cartList, HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PostMapping("/addToCart/{email}/{id}")
    private ResponseEntity<?> addCart(@PathVariable String email, @PathVariable String id) {
        HashMap<String, String> res = new HashMap<>();
        try {
            Buyer buyer = buyerService.getByEmail(email);
            Product product = productService.getById(id);
            Cart cart1 = Cart.builder()
                    .productName(product.getName())
                    .productType(product.getType())
                    .price(product.getPrice())
                    .buyerEmail(buyer.getEmail())
                    .build();
            cartService.add(cart1);
            res.put("msg", "Added successfully");
            return new ResponseEntity<>(res, HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/cart/{id}")
    private ResponseEntity<?> deleteCart(@PathVariable String id) {
        HashMap<String, String> res = new HashMap<>();
        try {
            cartService.delete(id);
            res.put("msg", " Item removed");
            return new ResponseEntity<>(res, HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/buyerRegister")
    private ResponseEntity<?> register(@RequestBody Buyer user) {
        HashMap<String, String> res = new HashMap<>();
        try {
            if (user.getEmail().equals("") && user.getName().equals("") && user.getPassword().equals("")) {
                res.put("msg", "Please fill all the fields");
                return new ResponseEntity<>(res, HttpStatus.BAD_REQUEST);
            }
            boolean checkUser = buyerService.getByEmail(user.getEmail()) != null;
            if (checkUser) {
                res.put("msg", "User already exists");
                return new ResponseEntity<>(res, HttpStatus.BAD_REQUEST);
            } else {
                buyerService.add(user);
                res.put("msg", "User added successfully");
                return new ResponseEntity<>(res, HttpStatus.OK);
            }
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/buyerLogin")
    private ResponseEntity<?> login(@RequestBody Buyer user) {
        HashMap<String, String> res = new HashMap<>();
        try {
            if (user.getEmail().equals("admin@gmail.com") && user.getPassword().equals("admin")) {
                res.put("msg", "Admin Login successfully");
                return new ResponseEntity<>(res, HttpStatus.OK);
            }

            if (user.getEmail().equals("") && user.getPassword().equals("")) {
                res.put("msg", "please fill all the fields");
                return new ResponseEntity<>(res, HttpStatus.BAD_REQUEST);
            }
            Buyer checkUser = buyerService.getByEmailAndPassword(user.getEmail(), user.getPassword());
            if (checkUser == null) {
                res.put("msg", "User not found");
                return new ResponseEntity<>(res, HttpStatus.BAD_REQUEST);
            } else {
                res.put("msg", "user login successfully");
                return new ResponseEntity<>(user, HttpStatus.OK);
            }
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/buyerByEmail/{email}")
    private ResponseEntity<?> getByEmail(@PathVariable String email) {
        HashMap<String, String> res = new HashMap<>();
        try {
            return new ResponseEntity<>(buyerService.getByEmail(email), HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/buyer")
    private ResponseEntity<?> allUsers() {
        HashMap<String, String> res = new HashMap<>();
        try {
            return new ResponseEntity<>(buyerService.all(), HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/buyer/{id}")
    private ResponseEntity<?> getById(@PathVariable String id) {
        HashMap<String, String> res = new HashMap<>();
        try {
            return new ResponseEntity<>(buyerService.getById(id), HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PatchMapping("/buyer/{id}")
    private ResponseEntity<?> getById(@PathVariable String id,@RequestBody Buyer buyer) {
        HashMap<String, String> res = new HashMap<>();
        try {
            Buyer buyer1=buyerService.getById(id);
            if(buyer.getName()!=null){
                buyer1.setName(buyer.getName());
            }else{
                buyer1.setName(buyer1.getName());
            }
            if(buyer.getEmail()!=null){
                buyer1.setEmail(buyer.getEmail());
            }else{
                buyer1.setEmail(buyer1.getEmail());
            }
            if(buyer.getPhoneNumber()!=null){
                buyer1.setPhoneNumber(buyer.getPhoneNumber());
            }else{
                buyer1.setPhoneNumber(buyer1.getPhoneNumber());
            }
            buyer1.setPassword(buyer.getPassword());
            return new ResponseEntity<>(buyerService.update(buyer1), HttpStatus.OK);
        } catch (Exception e) {
            res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
