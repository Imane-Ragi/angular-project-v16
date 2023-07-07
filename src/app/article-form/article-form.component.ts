import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from '../models/article';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent {

  @Input() toggleForm : boolean = false;
  @Input() edit:boolean = false
  @Input() article:Article = { 
    title : "",
    body : ""
   }

  @Output() updateArticle = new EventEmitter();
  
  @Output() addArticleEvent  = new EventEmitter();
  modifyArticle(article:Article) {

    this.updateArticle.emit({message : 'update', article : article})
  }

  addArticle(article:Article) {

    this.addArticleEvent.emit({message : 'add', article : article})
  }
 

}
