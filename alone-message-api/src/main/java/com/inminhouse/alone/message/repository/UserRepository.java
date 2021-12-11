package com.inminhouse.alone.message.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.inminhouse.alone.message.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
