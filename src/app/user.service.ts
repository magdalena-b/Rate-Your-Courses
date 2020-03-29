import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { CourseService } from './course.service';
import { Course } from './course';
import { User } from './user';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User = {
    email: '',
    courses: [],
  };
  coursesChanged = new Subject<Course[]>();
  constructor(public router: Router, public authService: AuthService, public courseService: CourseService) { 
    this.user.email = authService.getUser().email;
  }
  getCourses() {
    this.user.courses.forEach(course => {
      if (!this.courseService.existCourse(course.id)) {
        this.deleteCourse(course.id);
      }
    });
    return this.user.courses.slice();
  }
  deleteCourse(id: number) {
    const courseToDelete = this.user.courses.find(c => c.id === id);
    const index = this.user.courses.indexOf(courseToDelete);
    this.user.courses.splice(index, 1);
    this.coursesChanged.next(this.user.courses.slice());
  }
  haveCourses(): boolean {
    return !(this.user.courses.length == 0);
  }
  joinCourse(id: number) {
    let flag = true;
    this.user.courses.forEach(c => {
      if (c.id == id) {
        flag = false;
      }
    });
    if (flag && this.courseService.canJoin(id)) {
      this.user.courses.push(this.courseService.getCourse(id));
      this.courseService.changeNumberOfStudents(id);
    }

  }

}
