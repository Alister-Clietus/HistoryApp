package com.history.exam.dto;

import org.json.simple.JSONObject;

public class ResponseDTO 
{
	private String status;
	private String message;
	private JSONObject object;
	public ResponseDTO(String status, String message, JSONObject object) 
	{
		this.status=status;
		this.message=message;
		this.object=object;
		
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public JSONObject getObject() {
		return object;
	}
	public void setObject(JSONObject object) {
		this.object = object;
	}
	
	
	

}
