package com.project3.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project3.backend.entity.Ingredient;
import com.project3.backend.entity.Item;
import com.project3.backend.entity.ItemCategory;
import com.project3.backend.entity.Order;
import com.project3.backend.service.IngredientServiceImpl;
import com.project3.backend.service.ItemCategoryServiceImpl;
import com.project3.backend.service.ItemServiceImpl;
import com.project3.backend.service.OrderServiceImpl;

@RestController
public class DatabaseController {
    @Autowired
    private ItemServiceImpl itemService;
    @Autowired
    private IngredientServiceImpl ingredientService;
    @Autowired
    private ItemCategoryServiceImpl itemCategoryService;
    @Autowired
    private OrderServiceImpl orderService;

    @GetMapping("/menuItems")
    public List<Item> getMenuItems() {
        return itemService.fetchMenuItems();
    }

    @GetMapping("/itemCategories")
    public List<ItemCategory> getItemCategories() {
        return itemCategoryService.fetchItemCategories();
    }

    @GetMapping("/orders")
    public List<Order> getOrders() {
        return orderService.fetchAllOrders();
    }

    @GetMapping("/ingredients")
    public List<Ingredient> getIngredients() {
        return ingredientService.fetchIngredients();
    }

    @PostMapping("/ingredients")
    public void saveIngredient(@RequestBody Ingredient ingredient) {
        System.out.println("Saving ingredient: " + ingredient.toString());
        ingredientService.saveIngredient(ingredient);
    }

    @DeleteMapping("/ingredients")
    public void deleteIngredient(@PathVariable int id) {
        ingredientService.deleteIngredient(id);
    }

    @PostMapping("/orders")
    public void saveOrder(@RequestBody Order order) {
        System.out.println("Saving order: " + order.toString());
        orderService.saveOrder(order);
    }

    @PostMapping("/items")
    public void saveItem(@RequestBody Item item) {
        //TODO: process POST request
        System.out.println("Saving ingredient: " + item.toString());
        itemService.saveItem(item);
        
        
    }

    
    
    
}
