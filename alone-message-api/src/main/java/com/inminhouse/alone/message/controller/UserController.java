package com.inminhouse.alone.message.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.inminhouse.alone.message.entity.User;
import com.inminhouse.alone.message.exception.UserNotFoundException;
import com.inminhouse.alone.message.form.UserForm;
import com.inminhouse.alone.message.repository.UserRepository;

@RestController
@RequestMapping("/v1/users")
public class UserController {
	
	@Autowired
	private UserRepository repository;
	
	@GetMapping()
	public List<User> all() {
		return repository.findAll();
	}
	
	@PostMapping()
	public User createUser(@RequestBody UserForm userForm) {
		return repository.save(
				User.builder()
				.name(userForm.getName())
				.build());
	}
	
	@GetMapping("/{id}")
	public User one(@PathVariable("id") long id) {
//		return repository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
		try {
			return repository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
		} catch (UserNotFoundException e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Not Found User " + id);
		}
	}
	
	@PutMapping("/{id}")
	public User updateUser(@PathVariable("id") long id, @RequestBody UserForm userForm) {
		return repository.findById(id).map(user -> {
			user.setName(userForm.getName());
			return repository.save(user);
		}).orElseThrow(() -> new UserNotFoundException(id));
	}
	
	@DeleteMapping("/{id}")
	public void deleteUser(@PathVariable("id") long id) {
		repository.deleteById(id);
	}

}
