package com.explorer.explorerProject.Repository;

import com.explorer.explorerProject.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    public List<User> findByUserName(@Param("userName") String userName);

//    public List<User> findAll();
}
