import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../course';


@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.css']
})
export class DeleteCourseComponent implements OnInit {


  @Output() 
  notify: EventEmitter<number> = new EventEmitter<number>();

  courses: Course[];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }

  onClickDelete(id: number) {
    this.notify.emit(id);
  }


}
