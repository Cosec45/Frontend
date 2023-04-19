import { Component } from '@angular/core';
import {TourFService} from '../../tour-f.service';
import {TourFStructure } from '../../../assets/data/tourFStructure';
import { ActivatedRoute,Router } from '@angular/router';
import{TripdetailService}from '../../tripdetail.service'
import{tripdetailStructure}from '../../../assets/data/tripdetail'

@Component({
  selector: 'app-foreign-id',
  templateUrl: './foreign-id.component.html',
  styleUrls: ['./foreign-id.component.css']
})
export class ForeignIDComponent {
  id = '';
  Ddata: TourFStructure = {};
  imgSelect = '';
  tripdata:tripdetailStructure = {};
  constructor(private datanew: TourFService,private routedata:ActivatedRoute,private route:Router,private Newtripdata: TripdetailService) {}

  ngOnInit(): void {
    this.id  = this.routedata.snapshot.paramMap.get('id')|| '-1'
    console.log(this.id);
    console.log('/'+this.id);
    this.datanew.getTourDataById(this.id).subscribe((data)=>{
      this.Ddata = data
      console.log(this.Ddata)
      
    })
    this.Newtripdata.getTripDetailById(this.id).subscribe((data)=>{
      this.tripdata = data
      console.log(this.tripdata)
    })
  }
  getImg(pic:string){
    this.imgSelect = pic
    console.log(pic)
  }
}
