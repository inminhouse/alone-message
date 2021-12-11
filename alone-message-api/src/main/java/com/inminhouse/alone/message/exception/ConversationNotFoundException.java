package com.inminhouse.alone.message.exception;

public class ConversationNotFoundException extends RuntimeException {
	
	public ConversationNotFoundException(long id) {
		super("Not Found Conversation " + id);
	}
}
