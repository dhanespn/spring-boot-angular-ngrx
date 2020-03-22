package ru.coco.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.coco.todo.model.TodoCategory;

public interface TodoCategoryRepository extends JpaRepository<TodoCategory, Long> {
}
