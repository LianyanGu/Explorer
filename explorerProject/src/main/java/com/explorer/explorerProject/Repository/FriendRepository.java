package com.explorer.explorerProject.Repository;

import com.explorer.explorerProject.Entity.Friend;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FriendRepository extends CrudRepository<Friend, String> {
    public List<Friend> findByUserId(@Param("userId") String userId);
}
