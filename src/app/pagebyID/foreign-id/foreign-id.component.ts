import { Component } from '@angular/core';
import {TourFService} from '../../tour-f.service';
import {TourFStructure } from '../../../assets/data/tourFStructure';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-foreign-id',
  templateUrl: './foreign-id.component.html',
  styleUrls: ['./foreign-id.component.css']
})
export class ForeignIDComponent {
  id = '';
  Ddata: TourFStructure = {};
  imgSelect = '';
  constructor(private datanew: TourFService,private routedata:ActivatedRoute,private route:Router) {}

  ngOnInit(): void {
    this.id  = this.routedata.snapshot.paramMap.get('id')|| '-1'
    console.log(this.id);
    console.log('/'+this.id);
    this.datanew.getTourDataById(this.id).subscribe((data)=>{
      this.Ddata = data
      console.log(this.Ddata)
      
    })
  }
  getImg(pic:string){
    this.imgSelect = pic
    console.log(pic)
  }
}
