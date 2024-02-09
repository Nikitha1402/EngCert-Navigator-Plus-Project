package com.example.certify.Controller;

import com.example.dto.EnquiryDto;
import com.example.certify.Service.EnquiryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/enquiries") // Change the request mapping to /enquiries
public class EnquiryController {

    @Autowired
    private EnquiryService enquiryService;

    @GetMapping("/")
    public ResponseEntity<List<EnquiryDto>> getAllEnquiries() {
        List<EnquiryDto> enquiries = enquiryService.getAllEnquiries();
        return ResponseEntity.ok(enquiries);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EnquiryDto> getEnquiryById(@PathVariable Long id) {
        EnquiryDto enquiry = enquiryService.getEnquiryById(id);
        if (enquiry != null) {
            return ResponseEntity.ok(enquiry);
        } else {
            return ResponseEntity.notFound().build(); // Handle not found case
        }
    }

    @PostMapping("/post")
    public ResponseEntity<EnquiryDto> createEnquiry(@RequestBody EnquiryDto enquiryDto) {
        EnquiryDto createdEnquiry = enquiryService.createEnquiry(enquiryDto);
        return new ResponseEntity<>(createdEnquiry, HttpStatus.CREATED);
    }

    @PutMapping("/put/{id}")
    public ResponseEntity<EnquiryDto> updateEnquiry(@PathVariable Long id, @RequestBody EnquiryDto enquiryDto) {
        EnquiryDto updatedEnquiry = enquiryService.updateEnquiry(id, enquiryDto);
        if (updatedEnquiry != null) {
            return ResponseEntity.ok(updatedEnquiry);
        } else {
            return ResponseEntity.notFound().build(); // Handle not found case
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteEnquiry(@PathVariable Long id) {
        if (enquiryService.deleteEnquiry(id)) {
            return new ResponseEntity<>("Enquiry deleted successfully", HttpStatus.OK);
        } else {
            return ResponseEntity.notFound().build(); // Handle not found case
        }
    }
}
