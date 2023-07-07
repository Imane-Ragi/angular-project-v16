import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  
  constructor(private contactService:ContactService) { }
  
  saveContact(form : NgForm)
  {
    if(form.valid)
    {
      this.contactService.persiste(form.value).subscribe((res) => {console.log(res)
        form.reset()});
     
    }
  }
}
