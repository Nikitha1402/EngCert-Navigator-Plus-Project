package com.example.certify.Mapper;

import com.example.dto.CourseDto;
import com.example.certify.Model.Course;

public class CourseMapper {

    public static CourseDto mapToCourseDto(Course course) {
        return new CourseDto(
                course.getId(),
                course.getName(),
                course.getDuration(),
                course.getFee());
    }

    public static Course mapToCourse(CourseDto courseDto) {
        return new Course(
                courseDto.getId(),
                courseDto.getName(),
                courseDto.getDuration(),
                courseDto.getFee());
    }
}
