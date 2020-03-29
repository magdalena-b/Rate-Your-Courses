import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course.service';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingComponent } from './rating/rating.component';
import { DeleteCourseComponent } from './delete-course/delete-course.component';
import { FilterByNamePipe } from './filter-by-name.pipe';
import { FilterByEctsPipe } from './filter-by-ects.pipe';
import { FilterByRatingPipe } from './filter-by-rating.pipe';
import { CourseInfoComponent } from './course-info/course-info.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EditCourseComponent } from './edit-course/edit-course.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseComponent,
    AddCourseComponent,
    RatingComponent,
    DeleteCourseComponent,
    FilterByNamePipe,
    FilterByEctsPipe,
    FilterByRatingPipe,
    CourseInfoComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    AdminViewComponent,
    MyCoursesComponent,
    WelcomeComponent,
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, // do obsługi autentykacji
    AngularFirestoreModule, // do obslugi baz danych
    AngularFireDatabaseModule, // do obslugi baz danych
    AngularFirestoreModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
