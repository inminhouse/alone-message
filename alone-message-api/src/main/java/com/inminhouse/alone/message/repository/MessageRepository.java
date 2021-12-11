package com.inminhouse.alone.message.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.inminhouse.alone.message.entity.Message;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long>{

	List<Message> findAllByUser_IdAndConversation_Id(long userId, long conversationId);
}
