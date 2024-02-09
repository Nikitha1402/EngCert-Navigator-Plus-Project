package com.example.certify.Service;

import com.example.dto.EnquiryDto;
import com.example.certify.Mapper.EnquiryMapper;
import com.example.certify.Model.Enquiry;
import com.example.certify.Repository.EnquiryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class EnquiryService {

    @Autowired
    private EnquiryRepository enquiryRepository;

    public List<EnquiryDto> getAllEnquiries() {
        List<Enquiry> enquiries = enquiryRepository.findAll();
        return enquiries.stream()
                .map(EnquiryMapper::toDto)
                .collect(Collectors.toList());
    }

    public EnquiryDto getEnquiryById(Long id) {
        Optional<Enquiry> optionalEnquiry = enquiryRepository.findById(id);
        return optionalEnquiry.map(EnquiryMapper::toDto).orElse(null);
    }

    public EnquiryDto createEnquiry(EnquiryDto enquiryDto) {
        Enquiry enquiry = EnquiryMapper.toEntity(enquiryDto);
        Enquiry savedEnquiry = enquiryRepository.save(enquiry);
        return EnquiryMapper.toDto(savedEnquiry);
    }

    public EnquiryDto updateEnquiry(Long id, EnquiryDto enquiryDto) {
        if (enquiryRepository.existsById(id)) {
            enquiryDto.setId(id);
            Enquiry enquiry = EnquiryMapper.toEntity(enquiryDto);
            Enquiry updatedEnquiry = enquiryRepository.save(enquiry);
            return EnquiryMapper.toDto(updatedEnquiry);
        }
        return null; // Handle not found case
    }

    public boolean deleteEnquiry(Long id) {
        if (enquiryRepository.existsById(id)) {
            enquiryRepository.deleteById(id);
            return true;
        }
        return false; // Handle not found case
    }
}
