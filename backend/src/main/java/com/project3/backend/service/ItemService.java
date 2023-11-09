package com.project3.backend.service;
import com.project3.backend.entity.Item;

import java.util.List;


public interface ItemService {
    List<Item> fetchMenuItems();
    void saveItem(Item item);
    void deleteItem(int id);
    
}