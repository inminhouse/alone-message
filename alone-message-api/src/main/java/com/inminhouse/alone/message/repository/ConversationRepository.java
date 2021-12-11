package com.inminhouse.alone.message.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.inminhouse.alone.message.entity.Conversation;

@Repository
public interface ConversationRepository extends JpaRepository<Conversation, Long>{

	// No property userId found for type User! Traversed path: Conversation.users.
	// Conversation.users.id 이런 식으로 접근
	List<Conversation> findAllByUsers_Id(long userId);
}
