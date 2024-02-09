package com.example.certify.Mapper;

import com.example.dto.EnquiryDto;
import com.example.certify.Model.Enquiry;

public class EnquiryMapper {

    public static EnquiryDto toDto(Enquiry enquiry) {
        return new EnquiryDto(
                enquiry.getId(),
                enquiry.getCourseName(),
                enquiry.getDescription(),
                enquiry.getMailId(),
                enquiry.getEnquiryType());
    }

    public static Enquiry toEntity(EnquiryDto enquiryDto) {
        return new Enquiry(
                enquiryDto.getCourseName(),
                enquiryDto.getDescription(),
                enquiryDto.getMailId(),
                enquiryDto.getEnquiryType());
    }
}
