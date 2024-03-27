package com.history.exam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.history.exam.dto.OrderingQuestionDTO;
import com.history.exam.service.QuestionsService;

@RestController
@RequestMapping("question")
public class QuestionController 
{
	
	@Autowired
	QuestionsService questionsService;
	
	@PostMapping("/add")
	ResponseEntity<?> addQuestions(@RequestBody OrderingQuestionDTO dto)
	{
		return new ResponseEntity<>(questionsService.addQuestions(dto),HttpStatus.OK);
	}
	
	@PostMapping("/delete")
	ResponseEntity<?> deleteQuestions()
	{
		return null;
	}
	
	@GetMapping("/get")
	ResponseEntity<?> getOneQuestion()
	{
		return new ResponseEntity<>(questionsService.getOneQuestion(),HttpStatus.OK);
	}

}
