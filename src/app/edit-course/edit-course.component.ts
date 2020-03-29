import { NgModule, Component, Pipe, OnInit } from "@angular/core";
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Course } from '../course';
import { CourseService } from '../course.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})

export class EditCourseComponent implements OnInit {
  courseForm: FormGroup;
  course: Course;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) { }

  private initializeForm() {
    let name: string;
    let ECTS: number;
    let form: string;
    let semester: number;
    let limit: number;
    let rating: number;
    let isShown: boolean = false; 
  

  this.courseForm = new FormGroup({
    name: new FormControl(name, Validators.required),
    ECTS: new FormControl(ECTS, Validators.required),
    form: new FormControl(form, Validators.required),
    semester: new FormControl(semester, Validators.required),
    limit: new FormControl(limit, Validators.required),
    rating: new FormControl(rating, Validators.required),
  });

}


  ngOnInit() {
    this.route.params.pipe(map(params => params['id'])).subscribe(id => {
      this.course = this.courseService.getCourse(id);
    });
    this.initializeForm();
  }
  onSubmit() {
    const id: number = this.course.id;
    const name: string = this.course.name;
    //const name: string = this.courseForm.value.name;
    const ECTS: number = this.courseForm.value.ECTS;
    const form: string = this.courseForm.value.form;
    const semester: number = this.courseForm.value.semester;
    const limit: number = this.courseForm.value.limit;
    this.courseService.editCourse(id, name, ECTS, form, semester, limit);
    this.router.navigate(['/courses']);
  }

}
