package com.inminhouse.alone.message.form;

import java.util.Set;

import com.inminhouse.alone.message.entity.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ConversationForm {
	
	private long id;
	
	private String name;
	
	private Set<User> users;
}
