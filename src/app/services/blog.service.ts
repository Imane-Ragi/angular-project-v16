import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  apiURL = "http://localhost:3000/articles";

  constructor(private http : HttpClient) { }

  getAll():Observable<Article[]>{
   return this.http.get<Article[]>(this.apiURL);
  }

  persiste(article:Article) : Observable<Article>{
    return this.http.post<Article>(this.apiURL, article)
  }

  updateArticle(data:Article) : Observable<Article>
  {
    return this.http.put<Article>(`${this.apiURL}/${data.id}`,data)
  }

  deleteArticle(id:number)
  {
    return this.http.delete(`${this.apiURL}/${id}`)
  }
}
