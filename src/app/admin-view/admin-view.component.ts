import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service'; 
import { Course } from '../course';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  courses: Array<Course>

  isCollapsed: boolean = false;



  constructor(private courseService: CourseService) { 

  }

  public getCourses(){
    this.courses = this.courseService.getCourses();
    //this.courseTest = this.courseService.courseTest;
  }

  ngOnInit() {
    this.getCourses();
  }


  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  onClickDelete(id): void {
    //console.log("Delete clicked");
    this.courseService.deleteCourse(id);
  }


}

