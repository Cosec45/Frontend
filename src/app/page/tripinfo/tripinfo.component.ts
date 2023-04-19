import { Component } from '@angular/core';
import {UserService} from '../../user.service';
import { ActivatedRoute,Router} from '@angular/router';



@Component({
  selector: 'app-tripinfo',
  templateUrl: './tripinfo.component.html',
  styleUrls: ['./tripinfo.component.css']
})
export class TripinfoComponent {
  name:  String =""
    lname:  String ="" 
    email:  String = ""
    phone:  String = ""
    guest:  String = ""
    numday: String = ""
    tripdateS: String = ""
    tripdateE: String = ""
  constructor(private data1:UserService,private routedata:ActivatedRoute,private route:Router){

  }
  alert() {
    window.alert('Your information has been saved and we will contact you shortly.');
  }
  send(){
    // console.log(this.name+this.lname+this.email+this.phone+this.address+this.massage)
    this.data1.createNewTripBook({
      name: this.name,
    lname: this.lname,
    email: this.email,
    phone: this.phone,
    guest: this.guest,
    numday:this.numday,
    tripdateS:this.tripdateS,
    tripdateE:this.tripdateE,}).subscribe(data => {
        console.log(data)
        this.route.navigateByUrl("/payment")
     });
  }
}
