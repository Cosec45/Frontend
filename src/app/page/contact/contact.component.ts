import { Component } from '@angular/core';
import {ContactStructure} from '../../../assets/data/contact';
import {UserService} from '../../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name:string = ""
  email:string = ""
  phone:string = "" 
  massage:string = ""
  constructor(private data1:UserService,private routedata:ActivatedRoute){

  }
  alert() {
    window.alert('Your information has been saved and we will contact you shortly.');
  }
  send(){
    // console.log(this.name+this.lname+this.email+this.phone+this.address+this.massage)
    this.data1.createNewUser({
      name:this.name,
    email:this.email,
    phone:this.phone,
    massage:this.massage}).subscribe(data => {
        console.log(data)
        this.alert()
     });
  }
  

}
