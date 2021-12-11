package com.inminhouse.alone.message.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.inminhouse.alone.message.entity.Conversation;
import com.inminhouse.alone.message.exception.ConversationNotFoundException;
import com.inminhouse.alone.message.exception.UserNotFoundException;
import com.inminhouse.alone.message.form.ConversationForm;
import com.inminhouse.alone.message.repository.ConversationRepository;

@RestController
@RequestMapping(value = "/v1/conversations")
public class ConversationController {

	@Autowired
	private ConversationRepository repository;
	
	@GetMapping("/{userId}")
	public List<Conversation> all(@PathVariable("userId") long userId) {
		return repository.findAllByUsers_Id(userId);
	}
	
	@PostMapping()
	public Conversation createConversation(@RequestBody ConversationForm conversationForm) {
		return repository.save(
				Conversation.builder()
				.name(conversationForm.getName())
				.users(conversationForm.getUsers())
				.build());
	}
	
	@GetMapping("/{id}")
	public Conversation one(@PathVariable("id") long id) {
		return repository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
	}
	
	@PutMapping("/{id}")
	public Conversation updateConversation(@PathVariable("id") long id, @RequestBody ConversationForm conversationForm) {
		return repository.findById(id).map(conversation -> {
			conversation.setName(conversationForm.getName());
			return repository.save(conversation);
		}).orElseThrow(() -> new ConversationNotFoundException(id));
	}
	
	@DeleteMapping("/{id}")
	public void deleteConversation(@PathVariable("id") long id) {
		repository.deleteById(id);
	}
}
