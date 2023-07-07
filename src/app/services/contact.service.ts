import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  apiURL = "http://localhost:3000/contacts";

  constructor(private http : HttpClient) { }

  persiste(contact : Contact):Observable<Contact>{
   return this.http.post<Contact>(this.apiURL,contact);
  }
}
