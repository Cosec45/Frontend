import { Component } from '@angular/core';
import {UserService} from '../../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  cardnum: String = ""
  numoncard: String = ""
  exdate: String = ""
  cvv: String = ""
  constructor(private data1:UserService,private routedata:ActivatedRoute){

  }
  alert() {
    window.alert('Your information has been saved and we will contact you shortly.');
  }
  send(){
    // console.log(this.name+this.lname+this.email+this.phone+this.address+this.massage)
    this.data1.createNewPayment({
      cardnum: this.cardnum,
      numoncard: this.numoncard,
      exdate: this.exdate,
      cvv: this.cvv}).subscribe(data => {
        console.log(data)
        this.alert()
     });
    }
}
