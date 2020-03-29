import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './course';

@Pipe({
  name: 'filterByEcts'
})
export class FilterByEctsPipe implements PipeTransform {

  transform(courses: Course[], searchText: string): Course[] {
    
    if(!courses){
      return [];
    }

    if(!searchText){
      return courses;
    }

    searchText = searchText.toLowerCase();
    return courses.filter(course => {
      return course.ECTS.toString().includes(searchText);
    });
  }


}
