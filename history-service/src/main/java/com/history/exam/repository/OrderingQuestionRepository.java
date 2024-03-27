package com.history.exam.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.history.exam.entity.OrderingQuestionEntity;

public interface OrderingQuestionRepository extends JpaRepository<OrderingQuestionEntity,String>
{
    @Query(value = "SELECT * FROM ORDERING_QUESTIONS ORDER BY RAND() LIMIT 1", nativeQuery = true)
    Optional<OrderingQuestionEntity> findRandomRecord();

}
