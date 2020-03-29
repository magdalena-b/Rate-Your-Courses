import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Course } from '../course';
import { map, switchMap } from 'rxjs/operators';
import { CourseService } from '../course.service';
import { UserService } from '../user.service'

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

  course: Course;

  courses: Array<Course>
  ratingClicked: number;
  itemIdRatingClicked: string;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
    private userService: UserService) { }

  ngOnInit() {
    this.route.params.pipe(map(params => params['id'])).subscribe(id => {
      console.log(id);
      this.course = this.courseService.getCourse(id);
      console.log(this.course);
      // console.log(this.course.id);
      this.getCourses();
    });
  }

  public getCourses(){
    this.courses = this.courseService.getCourses();
  }


  ratingComponentClick(clickObj: any): void {
  //ratingComponentClick(clickObj: any) {
    console.log('rating component click');
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

  joinCourse() {
    if (!this.userService.courseService.canJoin(this.course.id)) { window.alert('Brak wolnych miejsc na kurs'); } else { this.userService.joinCourse(this.course.id); }
  }


}
