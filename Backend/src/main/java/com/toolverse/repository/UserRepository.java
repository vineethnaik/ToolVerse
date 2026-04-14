package com.toolverse.repository;

import com.toolverse.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    
    Optional<User> findByUsername(String username);
    
    Optional<User> findByEmail(String email);
    
    Optional<User> findByEmailVerificationToken(String token);
    
    boolean existsByUsername(String username);
    
    boolean existsByEmail(String email);
    
    void deleteByUsername(String username);
}
