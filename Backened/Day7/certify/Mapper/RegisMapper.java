package com.example.certify.Mapper;

import com.example.dto.RegisDto;
import com.example.certify.Model.Registration;

public class RegisMapper {

    public static Registration mapToRegistrationEntity(RegisDto regisDto) {
        Registration registration = new Registration();
        registration.setFullName(regisDto.getFullName());
        registration.setEmail(regisDto.getEmail());
        registration.setMobileNumber(regisDto.getMobileNumber());
        registration.setSelectedCourse(regisDto.getSelectedCourse());
        registration.setGender(regisDto.getGender());
        registration.setBirthDate(regisDto.getBirthDate());
        // map other properties if needed
        return registration;
    }

    public static RegisDto mapToRegisDto(Registration registration) {
        RegisDto regisDto = new RegisDto();
        regisDto.setFullName(registration.getFullName());
        regisDto.setEmail(registration.getEmail());
        regisDto.setMobileNumber(registration.getMobileNumber());
        regisDto.setSelectedCourse(registration.getSelectedCourse());
        regisDto.setGender(registration.getGender());
        regisDto.setBirthDate(registration.getBirthDate());
        // map other properties if needed
        return regisDto;
    }
}
