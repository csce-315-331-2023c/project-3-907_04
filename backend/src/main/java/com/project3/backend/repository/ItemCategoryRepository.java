package com.project3.backend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.project3.backend.entity.ItemCategory;

@Repository
public interface ItemCategoryRepository extends CrudRepository<ItemCategory, Integer>{
    
}
