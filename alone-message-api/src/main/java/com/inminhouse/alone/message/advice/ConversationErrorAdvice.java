package com.inminhouse.alone.message.advice;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.inminhouse.alone.message.exception.ConversationNotFoundException;

@RestControllerAdvice
public class ConversationErrorAdvice {

	@ExceptionHandler(ConversationNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public String conversationNotFoundErrorHandler(ConversationNotFoundException e) {
		return e.getMessage();
	}
}
