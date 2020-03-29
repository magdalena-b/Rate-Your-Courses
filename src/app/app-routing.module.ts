import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { DeleteCourseComponent } from './delete-course/delete-course.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard'
import { AdminViewComponent } from './admin-view/admin-view.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EditCourseComponent } from './edit-course/edit-course.component';


const routes: Routes = [

  { 
    path: 'course-list', 
    component: CourseListComponent,
    canActivate: [AuthGuard]
  },

  { 
    path: 'course-info/:id', 
    component: CourseInfoComponent,
    canActivate: [AuthGuard] 
  },
  
  { 
    path: 'add-course', 
    component: AddCourseComponent,
    canActivate: [AuthGuard]
  },
  
  { path: 'delete-course', component: DeleteCourseComponent },
  
  { path: 'register', component: RegisterComponent },
  
  { path: 'login', component: LoginComponent },

  { 
    path: 'admin-view', 
    component: AdminViewComponent,
    canActivate: [AdminGuard]
  },

  {
    path: 'my-courses',
    component: MyCoursesComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'welcome',
    component: WelcomeComponent
  },

  {
    path: 'edit-course/:id',
    component: EditCourseComponent
  }

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
