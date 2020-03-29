import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service'; 
import { Course } from '../course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {


  courses: Array<Course>

  //courseTest: Course;
  isCollapsed: boolean = false;

  /*
  ratingClicked: number;
  itemIdRatingClicked: string;
  */

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

  /*
  ratingComponentClick(clickObj: any): void {
    //console.log('rating component click');
    console.log(clickObj);
    console.log(this.courses);
    const item = this.courses.find(((i: any) => i.id === clickObj.itemId));
    if (!!item) {
      console.log(item);
      item.rating = clickObj.rating;
      this.ratingClicked = clickObj.rating;
      this.itemIdRatingClicked = item.name;
    }
  }
  */

  onClickDelete(id): void {
    //console.log("Delete clicked");
    this.courseService.deleteCourse(id);
  }


}
