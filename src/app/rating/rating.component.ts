
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { UserService } from '../user.service';
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() rating: number;
  @Input() itemId: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  inputName: string;

  constructor(
    private courseService: CourseService,
    private userService: UserService
  ) { }



  ngOnInit() {
    this.inputName = this.itemId + '_rating';
  }
  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: rating
    });
      this.courseService.rateCourse(this.itemId, rating);
  }
}




