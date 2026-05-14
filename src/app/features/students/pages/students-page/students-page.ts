import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-students-page',
  imports: [],
  templateUrl: './students-page.html',
  styles: ``,
})
export class StudentsPage {
  readonly students = signal ([
    {id:1,name:"DAVID"},
    {id:2,name:"DAMIAN"},
    {id:3,name:"ADRIAN"},
    {id:4,name:"SONARA"},
    {id:5,name:"RTA"},
    {id:6,name:"HOME"},
    {id:7,name:"ADMINISTRATOR"},
  ])
}
