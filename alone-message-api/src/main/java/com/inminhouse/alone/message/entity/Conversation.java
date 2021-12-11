package com.inminhouse.alone.message.entity;

import java.io.Serializable;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="conversations")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Conversation implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(length = 100, nullable = false)
	private String name;
	

	// Owner를 conversation으로 정함
	// JPA는 Owner의 변경에만 신경씀
	// users에 user 추가되어도 join table에 추가 안됨 그러나 conversations 테이블에 users랑 같이 넣으면 join table에 추가됨
	// User가 먼저 등록되고 그 User에 관련되어 Conversation이 추가되어야하기때문에 이쪽이 오너
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
	@JoinTable(
		name = "conversation_user",
		joinColumns = @JoinColumn(name = "conversation_id", referencedColumnName = "id", nullable = false, updatable = false),
		inverseJoinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id", nullable = false, updatable = false))
	private Set<User> users;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "conversation")
	private List<Message> messages;
}
