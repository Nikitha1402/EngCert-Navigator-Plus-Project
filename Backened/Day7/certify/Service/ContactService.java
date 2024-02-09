package com.example.certify.Service;

import com.example.certify.Model.Contact;
import com.example.dto.ContactDto;
import com.example.certify.Mapper.ContactMapper;
import com.example.certify.Repository.ContactRepository;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    private final ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public ContactDto createContact(ContactDto contactDto) {
        Contact contact = ContactMapper.toEntity(contactDto);
        contact = contactRepository.save(contact);
        return ContactMapper.toDto(contact);
    }

    // If you need to implement other service methods, you can add them here

}
