package com.history.exam.service;

import java.util.Optional;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.history.exam.dto.OrderingQuestionDTO;
import com.history.exam.dto.ResponseDTO;
import com.history.exam.entity.OrderingQuestionEntity;
import com.history.exam.repository.OrderingQuestionRepository;

@Service
public class QuestionsServiceImp implements QuestionsService
{
	
@Autowired
OrderingQuestionRepository orderingQuestionRepo;

public ResponseDTO getOneQuestion()
{
    Optional<OrderingQuestionEntity> randomRecord = orderingQuestionRepo.findRandomRecord();
    OrderingQuestionEntity entitydetails=randomRecord.get();
	JSONObject result = new JSONObject();
	JSONArray array = new JSONArray();
	array.add(entitydetails.getOption1());
	array.add(entitydetails.getOption2());
	array.add(entitydetails.getOption3());
	array.add(entitydetails.getOption4());
	array.add(entitydetails.getOption5());
	array.add(entitydetails.getOption6());
	array.add(entitydetails.getOption7());
	array.add(entitydetails.getOption8());
	array.add(entitydetails.getOption9());
	array.add(entitydetails.getOption10());
	result.put("Question",entitydetails.getQuestionheading());
	result.put("JSONARRAY", array);
	return new ResponseDTO("ADDED","SUCCESS",result);
	
}

public ResponseDTO addQuestions(OrderingQuestionDTO questiondto)
{
	OrderingQuestionEntity questionentity=new OrderingQuestionEntity();
	questionentity.setQuestionid(questiondto.getQuestionid());
	questionentity.setQuestionheading(questiondto.getQuestionheading());
	questionentity.setOption1(questiondto.getOption1());
	questionentity.setOption2(questiondto.getOption2());
	questionentity.setOption3(questiondto.getOption3());
	questionentity.setOption4(questiondto.getOption4());
	questionentity.setOption5(questiondto.getOption5());
	questionentity.setOption6(questiondto.getOption6());
	questionentity.setOption7(questiondto.getOption7());
	questionentity.setOption8(questiondto.getOption8());
	questionentity.setOption9(questiondto.getOption9());
	questionentity.setOption10(questiondto.getOption10());
	orderingQuestionRepo.save(questionentity);
	return new ResponseDTO("ADDED","SUCCESS",null);
	
}

}
