package com.example.certify.Repository;

import com.example.certify.Model.Enquiry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EnquiryRepository extends JpaRepository<Enquiry, Long> {
    // You can define custom query methods if needed
}
