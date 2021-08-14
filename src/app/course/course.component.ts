import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  template: `
  <h2>{{ title }}</h2>
  <ul>
  <li *ngFor= "let course of courses">
  {{ course }}
  </li>
  </ul>
  `,
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses = ["course1", "course2", "course3"];
  title= "List of courses";
  constructor() {
   }

  ngOnInit(): void {
  }

}
