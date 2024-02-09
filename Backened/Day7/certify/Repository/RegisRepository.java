package com.example.certify.Repository;

import com.example.certify.Model.Registration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegisRepository extends JpaRepository<Registration, Long> {
    // You can define custom query methods if needed
}
