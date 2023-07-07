import { Component } from '@angular/core';
import { Course } from '../models/course';
import  Swal from 'sweetalert2';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  image = "https://www.eurafric-information.com/sites/default/files/2022-08/psce.png";
  title = "Welcome to EURAFRIC"
  myCourse : Course = {id : 0  , title : ""};
  courses: Course[] = [
    {id: 1, title :  "Angular", active : false},
    {id: 1, title :  "Spring Boot", active : false},
    {id: 1, title :  "React", active : false},
    {id: 1, title :  "Laravel", active : false},
    {id: 1, title :  "JAVA", active : false}
  ]
  edit: boolean  = false;
  

  addCourse(){

    if(!this.myCourse.title){
      Swal.fire(
          { 
            title : 'Title is require',
            text :  'Please enter the title',
            icon :  'question'
          }
      )
    }
   else{
    this.courses = [...this.courses, this.myCourse];
    this.myCourse = {id : 0  , title : ""};
   }
    
   
  }

  deleteCourse(index: number){

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to delete this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.courses.splice(index,1);
        Swal.fire(
          'Deleted!',
          'The course has been deleted.',
          'success'
        )
      }
    })
  //  if(confirm("Are you sure to delete this course ?!")) {
  //   this.courses.splice(index,1);
  //  }
  }

  editCourse(course: Course){

    this.edit = true;
    this.myCourse = course;
  }

  updateCourse(){
    this.edit = false;
    this.myCourse = {id : 0  , title : ""};
  }

  changeButton(course : Course){
      course.active = !course.active;

  }
}
