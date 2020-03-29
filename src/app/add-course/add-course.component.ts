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


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  courseForm: FormGroup;
  formsOfCourse: string[] = ["Laboratorium", "Ćwiczenia", "Wykład"];

  constructor(private courseService: CourseService) { }

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
    this.initializeForm();
  }

  onSubmit() {
    const name: string = this.courseForm.value.name;
    const ECTS: number = this.courseForm.value.ECTS;
    const form: string = this.courseForm.value.form;
    const semester: number = this.courseForm.value.semester;
    const limit: number = this.courseForm.value.limit;
    const rating: number = this.courseForm.value.rating;
    this.courseService.addCourse(name, ECTS, form, semester, limit);

  }


}
