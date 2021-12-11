package com.inminhouse.alone.message.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.inminhouse.alone.message.entity.Conversation;
import com.inminhouse.alone.message.entity.Message;
import com.inminhouse.alone.message.entity.User;
import com.inminhouse.alone.message.form.MessageForm;
import com.inminhouse.alone.message.repository.MessageRepository;

@RestController
@RequestMapping("/v1/messages")
public class MessageController {
	
	@Autowired MessageRepository messageRepository;

	// 끝도없이 연쇄되고 있음
	@GetMapping("/{userId}/{conversationId}")
	public List<Message> getMessages(@PathVariable("userId") long userId, @PathVariable("conversationId") long conversationId) {
		
		return messageRepository.findAllByUser_IdAndConversation_Id(userId, conversationId);
	}
	
	@PostMapping("/{userId}/{conversationId}")
	public Message createMessage(@PathVariable("userId") long userId, @PathVariable("conversationId") long conversationId, @RequestBody MessageForm messageForm) {
		return messageRepository.save(
				Message.builder()
				.text(messageForm.getText())
				.mediaUrl(messageForm.getMedia_url())
				.user(User.builder().id(userId).build())
				.conversation(Conversation.builder().id(conversationId).build())
				.build());
	}
	
//	@PutMapping
	
//	@DeleteMapping
}
