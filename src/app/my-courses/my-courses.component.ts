import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { UserService } from '../user.service'
import { CourseService } from '../course.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
  
  courses: Course[];

  constructor(public userService: UserService, public courseService: CourseService) { }

  ngOnInit() {
    this.courses = this.userService.getCourses();
  }
  havingCourse(): boolean {
    return this.userService.haveCourses();
  }


}
