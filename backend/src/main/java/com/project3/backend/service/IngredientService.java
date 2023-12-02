package com.project3.backend.service;
import com.project3.backend.entity.Ingredient;
import com.project3.backend.reports.IngredientUsageReport;

import java.util.List;
import java.time.LocalDateTime;

public interface IngredientService {
    List<Ingredient> fetchIngredients();
    List<Ingredient> fetchIngredientsById(List<Integer> ids);
    void saveIngredient(Ingredient ingredient);
    void deleteIngredient(int id);
    public List<Ingredient> fetchIngredientsByItemId(int itemId);
    public List<IngredientUsageReport> fetchIngredientUsageBetweenDates(LocalDateTime startDate, LocalDateTime endDate);
}
