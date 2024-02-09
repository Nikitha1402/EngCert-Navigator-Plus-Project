package com.example.certify.Service;

import com.example.dto.CourseDto;
import com.example.certify.Mapper.CourseMapper;
import com.example.certify.Model.Course;
import com.example.certify.Repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    public List<CourseDto> getAllCourses() {
        List<Course> courses = courseRepository.findAll();
        return courses.stream()
                .map(CourseMapper::mapToCourseDto)
                .collect(Collectors.toList());
    }

    public CourseDto getCourseById(Long id) {
        Course course = courseRepository.findById(id).orElse(null);
        return CourseMapper.mapToCourseDto(course);
    }

    public CourseDto createCourse(CourseDto courseDto) {
        Course course = CourseMapper.mapToCourse(courseDto);
        course = courseRepository.save(course);
        return CourseMapper.mapToCourseDto(course);
    }

    public CourseDto updateCourse(Long id, CourseDto courseDto) {
        Course existingCourse = courseRepository.findById(id).orElse(null);
        if (existingCourse != null) {
            existingCourse.setName(courseDto.getName());
            existingCourse.setDuration(courseDto.getDuration());
            existingCourse.setFee(courseDto.getFee());
            existingCourse = courseRepository.save(existingCourse);
            return CourseMapper.mapToCourseDto(existingCourse);
        }
        return null; // Handle not found case
    }

    public boolean deleteCourse(Long id) {
        if (courseRepository.existsById(id)) {
            courseRepository.deleteById(id);
            return true;
        }
        return false; // Handle not found case
    }
}
