package com.inminhouse.alone.message.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="messages")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Message implements Serializable{

	// TODO : 내용 더 알아보기 Fields in a "Serializable" class should either be transient or serializable
	private static final long serialVersionUID = 8087478687563703350L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column
	private String text;
	
	@Column(name = "media_url")
	private String mediaUrl;
	

	@JsonBackReference(value="user")
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id", referencedColumnName = "id")
	private User user;
	

	@JsonBackReference(value="conversation")
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "conversation_id", referencedColumnName = "id")
	private Conversation conversation;
}
