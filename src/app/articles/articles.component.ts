import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Article } from '../models/article';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  isGrid : boolean = false;
  edit:boolean = false;
  toggleForm : boolean = false ;
  articles : Article[] = [];

  myArticle : Article = {
    id : 0,
    title : "",
    body : ""
  }
  //blogService = inject(BlogService)
  constructor(private blogService : BlogService) {}
  ngOnInit(): void {
    this.getArticles()
  }

  getArticles(){
    this.blogService.getAll().subscribe( (data) => {
      this.articles =  data
      console.log('data' , this.articles)
    }
    );
  }

  postArticle(data : any)
  {
    console.log('hello');
    
    this.blogService.persiste(data.article).subscribe((re) => 
    console.log(re));

    Swal.fire(
      { 
        title : 'Success',
        text :  'Article added succesfully',
        icon :  'success'
      }


  )
  
  this.initArticle()
  this.getArticles()
  }

  editArticle(article:Article){

    this.myArticle = article
    this.edit = true
    

  }


  initArticle()
  {
    this.myArticle = {
      id : 0,
      title : "",
      body : ""
    }
  }

  toggleAdd()
  {
    this.toggleForm = ! this.toggleForm
  }

  updateArticle(data : any)
  {
    console.log(data);
    
    this.blogService.updateArticle(data.article).subscribe((res) =>   {console.log(res)
    this.edit = false
    this.initArticle()
    } );
    
  }

  deleteArticle(id:number)
  {
    
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
        this.blogService.deleteArticle(id).subscribe((res) => {console.log(res)})
    
          this.articles = [...this.articles.filter(ob => ob.id !== id)]
        Swal.fire(
          'Deleted!',
          'The course has been deleted.',
          'success'
        )
      }
    })
    
    
   
  }


  showList()
  {
    this.isGrid = false;
  }


  showGrid()
  {
    this.isGrid = true;
  }
     
  
}


