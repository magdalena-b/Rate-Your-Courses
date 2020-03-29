import { Injectable } from '@angular/core';
import { Course } from './course';
import {AngularFirestore} from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses: Array<Course> = Array<Course>();
  courseTest: Course;
  idCounter: number;


  constructor() {


    this.idCounter = 11;

    this.courses.push({
      'id': 1,
      'name': 'Wstęp do informatyki',
      'ECTS':  4,
      'form': 'Ćwiczenia',
      'semester': 1,
      'limit': 24,
      'numberOfStudents': 0,
      'sumOfGrade': 0,
      'numberOfVotes': 0,
      'rating': 0
    });
    
    this.courses.push({
      'id': 2,
      'name': 'Analiza',
      'ECTS':  4,
      'form': 'Ćwiczenia',
      'semester': 1,
      'limit': 24,
      'numberOfStudents': 0,
      'sumOfGrade': 0,
      'numberOfVotes': 0,
      'rating': 0
    });

    this.courses.push({
      'id': 3,
      'name': 'Matematyka dyskretna',
      'ECTS':  4,
      'form': 'Wykład',
      'semester': 1,
      'limit': 24,
      'numberOfStudents': 0,
      'sumOfGrade': 0,
      'numberOfVotes': 0,
      'rating': 0
    });

    this.courses.push({
      'id': 4,
      'name': 'Algebra',
      'ECTS':  4,
      'form': 'Ćwiczenia',
      'semester': 1,
      'limit': 24,
      'numberOfStudents': 0,
      'sumOfGrade': 0,
      'numberOfVotes': 0,
      'rating': 0
    });

    this.courses.push({
      'id': 5,
      'name': 'Statystyka',
      'ECTS':  4,
      'form': 'Wykład',
      'semester': 1,
      'limit': 24,
      'numberOfStudents': 0,
      'sumOfGrade': 0,
      'numberOfVotes': 0,
      'rating': 0
    });

    this.courses.push({
      'id': 6,
      'name': 'Podstawy elektroniki',
      'ECTS':  4,
      'form': 'Laboratorium',
      'semester': 2,
      'limit': 24,
      'numberOfStudents': 0,
      'sumOfGrade': 0,
      'numberOfVotes': 0,
      'rating': 0
    });

    this.courses.push({
      'id': 7,
      'name': 'Technika cyfrowa',
      'ECTS':  2,
      'form': 'Wykład',
      'semester': 2,
      'limit': 24,
      'numberOfStudents': 0,
      'sumOfGrade': 0,
      'numberOfVotes': 0,
      'rating': 0
    });

    this.courses.push({
      'id': 8,
      'name': 'Fizyka',
      'ECTS':  6,
      'form': 'Ćwiczenia',
      'semester': 2,
      'limit': 24,
      'numberOfStudents': 0,
      'sumOfGrade': 0,
      'numberOfVotes': 0,
      'rating': 0
    });

    this.courses.push({
      'id': 9,
      'name': 'Programowanie funkcyjne',
      'ECTS':  5,
      'form': 'Wykład',
      'semester': 2,
      'limit': 24,
      'numberOfStudents': 0,
      'sumOfGrade': 0,
      'numberOfVotes': 0,
      'rating': 0
    });

    this.courses.push({
      'id': 10,
      'name': 'Wprowadzenie do systemu Unix',
      'ECTS':  3,
      'form': 'Laboratorium',
      'semester': 1,
      'limit': 24,
      'numberOfStudents': 0,
      'sumOfGrade': 0,
      'numberOfVotes': 0,
      'rating': 0
    });

   }

   getCourses() : Course[] {
     return this.courses;
   }

   getCourse(id) : Course {
    return this.courses.filter(course => course.id == id)[0];
   }

   existCourse(id: number): boolean {
    let flag = false;
    this.courses.forEach(c => {
      if (c.id === id) {
        flag = true;
      }
    });
    return flag;
  }

  canJoin(id: number): boolean {
    const courseToJoin = this.courses.find(c => c.id === id);
    return !(courseToJoin.limit == courseToJoin.numberOfStudents);
  }

   addCourse(name: string, ECTS: number, form: string, semester: number, limit: number) {
    this.courses.push({
      'id' : this.idCounter,
      'name': name,
      'ECTS':  ECTS,
      'form': form,
      'semester': semester,
      'limit': 24,
      'numberOfStudents': 0,
      'sumOfGrade': 0,
      'numberOfVotes': 0,
      'rating': 0
    })
    this.idCounter += 1;
   }

   deleteCourse(id: number){
    const courseToDelete = this.courses.find(c => c.id === id);
    const index = this.courses.indexOf(courseToDelete);
    this.courses.splice(index, 1);
   }

   editCourse(id: number, name: string, ECTS: number, form: string, semester: number, limit: number) {
    this.courses.map(course => {
      if (course.id == id) {
        course.name = name;
        course.ECTS = ECTS;
        course.form = form;
        course.semester = semester;
        course.semester = semester;
        course.limit = limit;
      }
    });
  }

   changeNumberOfStudents(id: number) {
    this.courses.map(course => {
      if (course.id == id) {
        course.numberOfStudents++;
      }
    });
  }
  rateCourse(id: number, rate: number) {
    this.courses.map(course => {
      if (course.id == id) {
        course.numberOfVotes++;
        course.sumOfGrade += rate;
        course.rating = +(( course.sumOfGrade / course.numberOfVotes).toFixed(2));
      }
    });
  }
}

