package com.inminhouse.alone.message.exception;

public class UserNotFoundException extends RuntimeException {

	public UserNotFoundException(long id) {
		super("Not Found User " + id);
	}
}
