package com.history.exam.service;


import com.history.exam.dto.OrderingQuestionDTO;
import com.history.exam.dto.ResponseDTO;

public interface QuestionsService {

	ResponseDTO getOneQuestion();
	ResponseDTO addQuestions(OrderingQuestionDTO questiondto);

	
}
