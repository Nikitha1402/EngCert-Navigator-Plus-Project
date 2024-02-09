package com.example.certify.Controller;

import com.example.dto.RegisDto;
import com.example.certify.Service.RegisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/registration")
public class RegisController {

    @Autowired
    private RegisService regisService;

    @PostMapping("/submit")
    public ResponseEntity<RegisDto> submitRegistration(@RequestBody RegisDto regisDto) {
        RegisDto createdRegistration = regisService.createRegistration(regisDto);
        return new ResponseEntity<>(createdRegistration, HttpStatus.CREATED);
    }

}
