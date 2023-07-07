import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './table/table.component';
import { ListComponent } from './list/list.component';
import { LayoutComponent } from './layout/layout.component';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { CardComponent } from './card/card.component';
import { ContactComponent } from './contact/contact.component';
import { TodoComponent } from './todo/todo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Route, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path : "" , redirectTo : '/blog', pathMatch:'full'},
  {path : "courses" , component : CoursesComponent},
  {path : "todo" , component : TodoComponent},
  {path : "blog" , component : BlogComponent},
  {path : "contact" , component : ContactComponent},
  {path : "articles" , component : ArticlesComponent},
  {path : "**" , component : PageNotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    TableComponent,
    ListComponent,
    LayoutComponent,
    CoursesComponent,
    ArticlesComponent,
    ArticleFormComponent,
    CardComponent,
    ContactComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

